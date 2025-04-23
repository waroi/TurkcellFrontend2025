"use client";
import React from "react";
import { Button } from "@mui/material";
import useStepper from "@/hooks/useStepper";
const StepperCustomButtons = ({
  cancelLabel,
  continueLabel,
  isOneButton = false,
}) => {
  const { activeStep, handleNext, handleBack, steps } = useStepper();
  return (
    <div>
      {isOneButton ? null : (
        <Button
          variant="contained"
          color="white"
          onClick={handleBack}
          className="rounded-pill text-primary bg-white py-94 px-29 mx-12 w-100"
          // disabled={activeStep === steps.length - 1}
        >
          {cancelLabel}
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className="rounded-pill py-94 px-29  me-12 w-100"
        disabled={activeStep === steps.length - 1}
      >
        {continueLabel}
      </Button>
    </div>
  );
};

export default StepperCustomButtons;
