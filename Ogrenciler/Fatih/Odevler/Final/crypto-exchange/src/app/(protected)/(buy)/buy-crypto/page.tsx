"use client";

import React, { useState } from "react";
import BuyStepOne from "@/components/molecules/BuyStepOne";
import BuyStepTwo from "@/components/molecules/BuyStepTwo";
import BuyStepThree from "@/components/molecules/BuyStepThree";
import StepProgress from "@/components/molecules/StepProgress";
import { useTranslations } from "next-intl";

const BuyCrypto = () => {
  const [step, setStep] = useState(1);
  const t = useTranslations("Buy");

  const steps = [t("step1"), t("step2"), t("step3")];

  return (
    <div className="container p-5">
      <StepProgress currentStep={step} steps={steps} />

      {step === 1 && <BuyStepOne onContinue={() => setStep(2)} />}
      {step === 2 && <BuyStepTwo onContinue={() => setStep(3)} />}
      {step === 3 && <BuyStepThree />}
    </div>
  );
};

export default BuyCrypto;
