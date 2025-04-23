import React from "react";

const Button = ({
  label,
  padding,
  color = "primary",
  isBold = false,
  textColor = "text-dark",
  margin = "mt-97",
  onClick = null,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${padding} btn btn-${color} ${
        color === "primary" ? "text-white" : `${textColor}`
      } fs-6 ${isBold ? "fw-bold" : "fw-normal"} rounded-pill ${margin}`}
    >
      {label}
    </button>
  );
};

export default Button;
