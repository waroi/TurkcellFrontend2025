"use client";

import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import styles from "./StepProgress.module.css";

interface StepProgressProps {
  currentStep: number;
  steps: string[];
}

const StepProgress: React.FC<StepProgressProps> = ({ currentStep, steps }) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      {steps.map((step, i) => {
        const isCompleted = i < currentStep;
        const isCurrent = i === currentStep - 1;
        const isActive = isCompleted || isCurrent;
        const textClass =
          theme === "dark"
            ? isActive
              ? "text-white"
              : "text-muted"
            : isActive
            ? "text-dark"
            : "text-muted";

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
                borderColor: isActive ? "#16c784" : "#ccc",
                backgroundColor: isActive ? "#16c784" : "transparent",
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

            <span className={`fw-semibold ${textClass}`}>{step}</span>

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
