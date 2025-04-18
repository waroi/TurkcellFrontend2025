"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.scss";

const ThemeToggle: React.FC = () => {
   const { theme, toggleTheme } = useTheme();

   return (
      <button
         className="theme-toggle"
         onClick={toggleTheme}
         aria-label={theme === "dark" ? "Aydınlık moda geç" : "Karanlık moda geç"}
      >
         {theme === "dark" ? (
            <Sun size={20} className="theme-toggle__icon" />
         ) : (
            <Moon size={20} className="theme-toggle__icon" />
         )}
      </button>
   );
};

export default ThemeToggle;
