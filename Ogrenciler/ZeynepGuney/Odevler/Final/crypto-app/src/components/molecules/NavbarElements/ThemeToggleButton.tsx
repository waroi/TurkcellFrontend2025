"use client";
import React from "react";
import { useTheme } from "../../../context/ThemeContext"; 
import styles from "./ThemeToggleButton.module.scss";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`${styles.button} ${theme === "light" ? styles.light : styles.dark}`}
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <img src="/assets/sun.png" alt="Sun" className={styles.icon} />
      ) : (
        <img src="/assets/moon.png" alt="Moon" className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeToggleButton;
