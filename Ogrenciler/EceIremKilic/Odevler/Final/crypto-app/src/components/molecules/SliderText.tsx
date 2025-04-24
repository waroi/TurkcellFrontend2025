"use client";
import React from "react";
import CustomButton from "../atoms/CustomButton";
import { useTranslations } from "next-intl";

const SliderText = () => {
  const t = useTranslations();
  return (
    <div>
      <h1 className="display-3 fw-semibold mb-4">{t("homeSlider.s1")}</h1>
      <p className="fs-3 fw-normal text-secondary">{t("homeSlider.s2")}</p>
      <CustomButton
        label={t("homeSlider.s3")}
        variant="primary"
        className="mt-4 rounded-pill py-2 px-4"
      />
    </div>
  );
};

export default SliderText;
