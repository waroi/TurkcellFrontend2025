"use client";
import { useTranslations } from "next-intl";
import React from "react";

const Partners = () => {
  const t = useTranslations();
  return (
    <div className="mt-5">
      <h4 className="mb-4">{t("homeSlider.p")}</h4>
      <div>
        <img src="/partners.png" alt="Partners" className="w-100" />
      </div>
    </div>
  );
};

export default Partners;
