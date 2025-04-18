import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  rounded?: "rounded-pill" | "rounded-0";
  px?: string;
  py?: string;
};

function Button({
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  rounded = "rounded-pill",
  px = "px-4",
  py = "py-2",
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        className,
        "btn",
        `${px}`,
        `${py}`,
        "fw-bold",
        `${rounded}`
      )}
    >
      {children}
    </button>
  );
}

export default Button;