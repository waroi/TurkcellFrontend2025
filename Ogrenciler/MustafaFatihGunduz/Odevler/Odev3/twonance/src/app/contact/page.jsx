"use client";
import React from "react";
import AuthContainer from "../../components/components/AuthContainer";
import Input from "../../components/Input/Input";
import Select from "../../components/Select/Select";
import TextArea from "../../components/TextArea/TextArea";
import Button from "../../components/components/Button";
import { useLanguage } from "@/context/LanguageContext";
const ContactPage = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <AuthContainer authType={translations.contact} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-21 pe-28">
              <div className="contactImage h-100 bg-secondary border-rounded border-1"></div>
            </div>
            <div className="col-md-6 py-21">
              <h2 className="fs-1 text-center fw-bold text-dark">
                {translations.leaveAMessage}
              </h2>
              <p className="fs-4 text-center fw-normal text-secondary">
                {translations.getInTouch}
              </p>
              <Input
                id={"name"}
                label={translations.yourName}
                type="text"
                placeholder={translations.pleaseEnterYourName}
              />
              <Input
                id={"email"}
                label={"Email"}
                type="email"
                placeholder={translations.pleaseEnterEmail}
              />
              <Select
                id={"subject"}
                label={translations.subject}
                value={"NFT Items"}
              />
              <TextArea
                id={"message"}
                label={translations.message}
                rows={5}
                cols={3}
                placeholder={translations.enterYourMessage}
              />
              <Button
                label={translations.sendMessage}
                padding={"py-22 w-100"}
                color="primary"
                textColor="white"
                isBold={true}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
