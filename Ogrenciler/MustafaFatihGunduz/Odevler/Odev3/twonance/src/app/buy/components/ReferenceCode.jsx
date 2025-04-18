"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
const ReferenceCode = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <h6 className="text-dark fw-normal fs-6 mt-12">
        {translations.referenceCode}
      </h6>
      <p className="text-secondary display-2 fw-normal">
        {translations.youMustIncludeReferencecode}
      </p>
      <button className="w-100 fw-bold text-dark fs-6 border-1 rounded py-93 bg-white">
        BNJMNFTH98
      </button>
    </div>
  );
};

export default ReferenceCode;
