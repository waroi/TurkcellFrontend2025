"use client";
import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    const tables = document.querySelectorAll("table");
    const cards = document.querySelectorAll(".card");

    if (theme === "dark") {
      tables.forEach((table) => table.classList.add("table-dark"));
      cards.forEach((card) => {
        card.classList.add("bg-dark", "text-white");
      });
    } else {
      tables.forEach((table) => table.classList.remove("table-dark"));
      cards.forEach((card) => {
        card.classList.remove("bg-dark", "text-white");
      });
    }
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
