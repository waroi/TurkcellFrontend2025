import React from "react";
import Image from "next/image";
import Overlay from "../../../components/components/Overlay";
import Input from "../../../components/Input/Input";
import Button from "../../../components/components/Button";
import { useLanguage } from "../../../context/LanguageContext";
const APIKeys = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="cotaniner">
        <h4 className="text-dark fs-3 fw-bold pb-93">
          {translations.enableApi}
        </h4>
        <p className="fs-2 fw-bold text-dark">
          {translations.apiAccess}{" "}
          <span className="text-danger ps-96">{translations.disable}</span>
        </p>
        <div className="d-flex mb-91 align-items-center">
          <Image src={"/assets/email.svg"} width={24} height={24} alt="email" />
          <p className="text-dark fs-6 fw-bold ps-98">
            mustafatihgunduz@gmail.com
          </p>
        </div>
        <div className="container-fluid bg-secondary position-relative authContainer">
          <Overlay />
          <div className="container position-relative z-1 px-12 pt-96">
            <h4 className="fs-3 text-dark fw-bold">
              {translations.enableApiKeys}
            </h4>
            <p className="fs-6 text-secondary fw-normal pt-98 pb-16">
              {translations.enterYourPassword}
            </p>
            <div className="d-flex gap-5">
              <div className="input w-100">
                <Input
                  id={"yourPassowrd"}
                  label={translations.yourPassword}
                  type="password"
                  placeholder="Your Password"
                  isBuyPage={true}
                  padding="mt-0"
                />
              </div>
              <div className="input w-100">
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
              label={translations.activeSessions}
              padding={"px-12 py-94"}
              color="primary"
              textColor="text-white"
              margin="mb-12 mt-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIKeys;
