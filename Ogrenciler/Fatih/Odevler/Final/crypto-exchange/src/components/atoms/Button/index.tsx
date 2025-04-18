"use client";

import styles from "./Button.module.css";

const Button = ({
  children,
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) => {
  const className = variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
