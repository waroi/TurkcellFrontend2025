import React from "react";

export const CarouselButton = ({ children, ...props }) => {
  return (
    <button type="button" data-bs-target="#DigitalCarousel" {...props}>
      {" "}
      {children}
    </button>
  );
};

export const IndicatorButton = ({ ...props }) => {
  return (
    <button data-bs-target="#DigitalCarousel" type="button" {...props}></button>
  );
};
