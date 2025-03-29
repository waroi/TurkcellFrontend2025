import React from "react";

const Button = ({ variant = "contained", className = "", children }) => {
  const baseStyles = {
    contained: "bg-lime-500 text-black font-semibold hover:text-white hover:bg-lime-400",
    outlined: "border-lime-500 text-lime-500 font-semibold border hover:text-black hover:bg-lime-500",
    dissabled: "bg-neutral-700 text-neutral-400 font-medium",
    xlButton: "text-4xl font-medium",
  };
  const mutualCss = "rounded cursor-pointer px-8 py-3";
  const Component = variant;

  return <Component className={`${baseStyles[variant]} ${className} ${mutualCss}`}>{children}</Component>;
};

export default Button;
