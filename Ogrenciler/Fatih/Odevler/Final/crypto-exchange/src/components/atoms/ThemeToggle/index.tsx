"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, selectTheme } from "@/store/slices/themeSlice";
import Image from "next/image";
import SunIcon from "@/assets/sun.svg";
import MoonIcon from "@/assets/dark.svg";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);

  return (
    <div
      onClick={() => dispatch(toggleTheme())}
      className={styles.toggle}
      aria-label={`Change to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Image
        src={theme === "light" ? SunIcon : MoonIcon}
        alt="Theme Icon"
        width={16}
        height={16}
      />
    </div>
  );
};

export default ThemeToggle;
