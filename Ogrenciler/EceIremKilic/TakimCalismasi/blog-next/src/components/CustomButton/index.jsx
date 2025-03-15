import React from "react";

const CustomButton = ({ variant, buttonText, type, onClick, className }) => {
  return (
    <button
      className={`btn btn-${variant} rounded-pill ${className}`}
      type={type}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
