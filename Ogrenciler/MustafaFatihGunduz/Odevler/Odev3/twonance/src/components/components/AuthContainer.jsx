"use client";
import React from "react";
import Overlay from "@/components/components/Overlay";
import { useLanguage } from "@/context/LanguageContext";
const AuthContainer = ({ authType }) => {
  const { translations } = useLanguage();
  return (
    <div className="container-fluid bg-secondary position-relative authContainer">
      <Overlay />
      <div className="container position-relative z-1">
        <div className="d-flex align-items-center justify-content-between py-18">
          <h1 className="text-dark fs-2 fw-bold">{authType}</h1>
          <h6 className="text-secondary fs-5 fw-normal">
            {translations.home}
            <span className="text-secondary fs-5 fw-normal mx-11">/</span>
            {authType}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
