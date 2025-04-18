import React from 'react'
import "./Button.scss"

type ButtonProps = {
    variant: "primary-button" | "secondary-button" | "outlined" | "non-styled";
    fontSize?: "df" | "sm-1" | "sm-2"
    height?: 40 | 44 | 48 | 56 | 64
    className?: string;
    children: React.ReactNode;
    type?:"submit"
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({type, variant, className="", children, onClick, fontSize, height}) => {
  
    return (
    <button type={type} onClick={onClick} className={`${variant} ${className} btn-h-${height} btn-size-${fontSize}`}>{children}</button>
  )
}

export default Button