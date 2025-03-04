import React from "react";
import { useTheme } from "../context/ThemeContext";

function Button() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h2>Aktif Tema: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Tema Degistir
      </button>
    </>
  );
}

export default Button;
