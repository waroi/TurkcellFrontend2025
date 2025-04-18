"use client";

import { useEffect } from "react";
import { useThemeStore } from "../[locale]/store/ThemeStore";

export const ThemeProvider = () => {
  const { setTheme } = useThemeStore();

  const systemThemePreference = () => {
    const isDarkPreffered = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = isDarkPreffered ? "dark" : "light";
    return initialTheme;
  };

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("theme-storage");
      const parsed = raw ? JSON.parse(raw) : null;
      const initialTheme = parsed?.state?.theme;

      setTheme(initialTheme ?? systemThemePreference());
    } catch (error) {
      console.error(error);
      setTheme(systemThemePreference());
    }
  }, []);

  return null;
};
