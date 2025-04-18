"use client";

import React from "react";
import Image from "next/image";

interface StepProgressProps {
  currentStep: number;
  steps: string[];
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, steps }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {steps.map((step, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep - 1;

        return (
          <div
            key={step}
            className="d-flex align-items-center gap-2 text-nowrap flex-grow-1"
          >
            <div
              className="rounded-circle border d-flex align-items-center justify-content-center"
              style={{
                width: 18,
                height: 18,
                borderColor: isCompleted || isCurrent ? "#16c784" : "#ccc",
                backgroundColor:
                  isCompleted || isCurrent ? "#16c784" : "transparent",
              }}
            >
              {isCompleted && (
                <Image
                  src="/global/success.png"
                  alt="done"
                  width={25}
                  height={25}
                />
              )}
            </div>

            <span
              className={`fw-semibold ${
                isCompleted || isCurrent ? "text-dark" : "text-muted"
              }`}
            >
              {step}
            </span>

            {i !== steps.length - 1 && (
              <div
                className="mx-2 flex-grow-1"
                style={{ borderTop: "1px dashed #ccc" }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepProgress;
