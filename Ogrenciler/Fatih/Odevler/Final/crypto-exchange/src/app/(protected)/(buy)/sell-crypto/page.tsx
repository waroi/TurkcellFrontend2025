"use client";

import React, { useState } from "react";
import StepProgress from "@/components/molecules/StepProgress";
import SellStepOne from "@/components/molecules/SellStepOne";
import SellStepTwo from "@/components/molecules/SellStepTwo";
import SellStepThree from "@/components/molecules/SellStepThree";

const SellCrypto = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="container p-5">
      <StepProgress
        currentStep={step}
        steps={["Select crypto", "Enter Amount", "Payment Details"]}
      />

      {step === 1 && <SellStepOne onContinue={() => setStep(2)} />}
      {step === 2 && <SellStepTwo onContinue={() => setStep(3)} />}
      {step === 3 && <SellStepThree onContinue={() => setStep(4)} />}
    </div>
  );
};

export default SellCrypto;
