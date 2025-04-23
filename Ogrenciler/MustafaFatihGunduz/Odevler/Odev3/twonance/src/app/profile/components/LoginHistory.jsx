"use client";
import React from "react";
import LoginTable from "./components/LoginTable";
import Button from "../../../components/components/Button";
import { useLanguage } from "../../../context/LanguageContext";
const LoginHistory = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="container">
        <h4 className="fs-3 fw-bold text-dark">
          {" "}
          {translations.activeSessions}{" "}
        </h4>
        <p className="text-secondary fw-normal fs-6 pb-16 pt-98">
          {translations.endOfLife}
        </p>
        <LoginTable />
        <Button
          label={"Logout All Sessions"}
          color="white"
          textColor="text-dark"
          isBold={true}
          padding={"px-12 py-94 border-2"}
          margin="mb-13"
        />
        <h4 className="fs-3 fw-bold text-dark">
          {" "}
          {translations.loginHistory}{" "}
        </h4>
        <p className="text-secondary fw-normal fs-6 pb-16 pt-98">
          {translations.endOfLife}
        </p>
        <LoginTable />
      </div>
    </div>
  );
};

export default LoginHistory;
