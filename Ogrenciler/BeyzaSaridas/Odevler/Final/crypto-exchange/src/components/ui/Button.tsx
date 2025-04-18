"use client";

import React from "react";
import { combineClasses } from "../../lib/utils";
import "./Button.scss";

interface ButtonProps {
   className?: string;
   children: React.ReactNode;
   variant?: "primary" | "secondary" | "outline" | "ghost";
   size?: "sm" | "md" | "lg";
   onClick?: () => void;
   type?: "button" | "submit" | "reset";
   disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
   className = "",
   children,
   variant = "primary",
   size = "md",
   onClick,
   type = "button",
   disabled = false,
}) => {
   const buttonClasses = combineClasses(
      "button",
      `button--${variant}`,
      `button--${size}`,
      className
   );

   return (
      <button
         className={buttonClasses}
         onClick={onClick}
         type={type}
         disabled={disabled}
      >
         {children}
      </button>
   );
};

export default Button;
