'use client';

import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
  theme?: string;
  label?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  isActive = false,
  onClick,
  theme = "light"
}) => {
  return (
    <button
      className={`${className} ${styles.button} ${isActive ? styles.active : ""} ${styles[theme]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
