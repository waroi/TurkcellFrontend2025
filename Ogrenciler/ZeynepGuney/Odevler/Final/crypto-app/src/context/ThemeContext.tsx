"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  dropIcon: string;
  notificationIcon: string;
  logoIcon : string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const logoIcon = theme === "light" ? "/assets/Logo.svg" : "/assets/Logo2.svg";
  const dropIcon = theme === "light" ? "/assets/drop-black.svg" : "/assets/drop-white.svg";
  const notificationIcon = theme === "light" ? "/assets/notification-black.svg" : "/assets/notification-white.svg";

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, dropIcon, notificationIcon, logoIcon }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme, ThemeProvider içinde kullanılmalıdır. Başka bir yerden çağırıldı");
  return context;
};
