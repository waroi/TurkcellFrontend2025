import React from "react";
import clsx from "clsx";
import { ButtonProps } from "@/types/types";



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
