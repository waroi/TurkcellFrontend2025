"use client";
import React from "react";
import Overlay from "../../../components/components/Overlay";
import Input from "../../../components/Input/Input";
import Button from "../../../components/components/Button";
import { useLanguage } from "../../../context/LanguageContext";
const TwoFA = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="container">
        <h2 className="text-dark fs-2 fw-bold pb-93">
          {translations.twoFa}{" "}
          <span className="text-success">{translations.enable}</span>
        </h2>
        <h6 className="fw-normal fs-6 text-secondary pb-91">
          {translations.ifYouWant}
          click{" "}
          <span className="text-dark fw-bold">"{translations.disable2Fa}"</span>
        </h6>
        <div className="container-fluid bg-secondary position-relative authContainer">
          <Overlay />
          <div className="container position-relative z-1 px-12">
            <h5 className="text-dark fs-3 fw-bold pt-96 pb-98">
              {translations.disable2Fa}
            </h5>
            <p className="text-secondary fs-6 fw-normal pb-16">
              {translations.enterYourPasswordFA}
            </p>
            <div className="d-flex align-items-center gap-5">
              <div className="w-100">
                <Input
                  id={"yourPassword"}
                  label={translations.yourPassword}
                  type="text"
                  placeholder={translations.yourPassword}
                  isBuyPage={true}
                  padding="mt-0"
                />
              </div>
              <div className="w-100">
                <Input
                  id={"twoFA"}
                  label={translations.twoFaCode}
                  type="text"
                  placeholder={translations.twoFaCode}
                  isBuyPage={true}
                  padding="mt-0"
                />
              </div>
            </div>
            <Button
              label={translations.disableTwoFa}
              padding={"px-33 py-93"}
              color="danger"
              textColor="text-white"
              margin="mt-96 mb-12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoFA;
