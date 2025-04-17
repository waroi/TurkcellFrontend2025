import React from "react";
import "./button.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  onClick,
  type = "button",
  className = "",
  disabled = false
}: ButtonProps) => {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`} 
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;