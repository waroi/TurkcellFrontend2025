"use client";
import React from "react";
import CustomButton from "../atoms/CustomButton";

const SliderText = () => {
  return (
    <div>
      <h1 className="display-3 fw-semibold mb-4">
        Buy & Sell Digital <br /> Assets In The Rocket
      </h1>
      <p className="fs-3 fw-normal text-secondary">
        Coin rocket is the easiest, safest, and fastest way to buy & sell crypto
        asset exchange.
      </p>
      <CustomButton
        label="Get started now"
        variant="primary"
        className="mt-4 rounded-pill py-2 px-4"
      />
    </div>
  );
};

export default SliderText;
