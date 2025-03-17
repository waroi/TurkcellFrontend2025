import React from "react";

export const CarouselButton = ({ children, ...props }) => {
  return (
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      {...props}
    >
      {" "}
      {children}
    </button>
  );
};

export const IndicatorButton = ({ ...props }) => {
  return (
    <button
      data-bs-target="#carouselExampleIndicators"
      type="button"
      {...props}
    ></button>
  );
};
