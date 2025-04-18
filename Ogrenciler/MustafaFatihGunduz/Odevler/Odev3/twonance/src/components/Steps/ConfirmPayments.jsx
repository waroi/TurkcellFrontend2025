import React from "react";
import Overlay from "../components/Overlay";
import Image from "next/image";
import Input from "../Input/Input";
import ReferenceCode from "../../app/buy/components/ReferenceCode";
import { Button } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";
const ConfirmPayments = ({
  activeStep,
  steps,
  handleNext,
  handleBack,
  label = "Pay",
}) => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="bg-secondary position-relative mt-12 mb-12">
        <Overlay />
        <div className=" position-relative z-1 ps-12">
          <div className="d-flex flex-column">
            <h4 className="text-dark fw-bold fs-4 pt-96 pb-98">
              {translations.confirmInfomation}
            </h4>
            <p className="text-secondary fw-normal fs-6 pb-16">
              {translations.youAreAboutToReceive}
            </p>
            <div className="d-flex align-items-center justify-content-between mb-96">
              <div className="payContainer d-flex">
                <Image
                  src={"/assets/pay.svg"}
                  height={40}
                  width={40}
                  alt="pay"
                />
                <div className="d-flex flex-column ps-98">
                  <h6 className="text-secondary fw-bold display-2">{label}</h6>
                  <p className="text-dark fw-bold display-2">3.000.000 TRY</p>
                </div>
              </div>
              <div className="getContainer d-flex">
                <Image
                  src={"/assets/get.svg"}
                  height={40}
                  width={40}
                  alt="get"
                />
                <div className="d-flex flex-column ps-98">
                  <h6 className="text-secondary fw-bold display-2">
                    {translations.get}
                  </h6>
                  <p className="text-dark fw-bold display-2">0.00207026 BTC</p>
                </div>
              </div>
              <div className="forContainer d-flex">
                <Image
                  src={"/assets/for.svg"}
                  height={40}
                  width={40}
                  unoptimized
                  alt="for"
                />
                <div className="d-flex flex-column ps-98 pe-12">
                  <h6 className="text-secondary fw-bold display-2">
                    {translations.for}
                  </h6>
                  <p className="text-dark fw-bold display-2">
                    {translations.twonance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary position-relative mb-21">
        <Overlay />
        <div className=" position-relative z-1 px-12 ">
          <h6 className="text-dark fw-bold fs-3 pt-96 pb-12">
            {translations.paymentDetails}
          </h6>
          <p className="text-dark fw-normal fs-6 mb-93">
            {translations.bankAccount}
          </p>
          <div className="inputGroup">
            <Input
              padding="py-93"
              isBuyPage={true}
              label={translations.accountName}
              id={"accountName"}
              type="text"
              placeholder="Mustafa Fatih Gündüz"
            />
            <Input
              padding="py-93"
              isBuyPage={true}
              label={translations.accountNumber}
              id={"accountNumber"}
              type="number"
              placeholder="3310-XXXXXX"
            />
            <Input
              padding="py-93"
              isBuyPage={true}
              label={translations.adress}
              id={"adress"}
              type="text"
              placeholder="Konevi Mahallesi"
            />
            <Input
              padding={"py-93"}
              isBuyPage={true}
              label={translations.swiftCode}
              id={"code"}
              type="text"
              placeholder="UI8"
            />
            <Input
              padding="py-93"
              isBuyPage={true}
              label={translations.backAdress}
              id={"bankAdress"}
              type="text"
              placeholder="Sarraflar Mahallesi Yeni Cadde"
            />
            <ReferenceCode />
          </div>
        </div>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography variant="h6">İşlem Tamamlandı!</Typography>
            </div>
          ) : (
            <div>
              <div className="d-flex mt-12 pb-12">
                <Button
                  variant="contained"
                  color="white"
                  onClick={handleBack}
                  className="rounded-pill text-primary bg-white py-94 px-29 mx-12 w-100"
                  disabled={activeStep === steps.length - 1}
                >
                  {translations.cancel}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className="rounded-pill py-94 px-29  me-12 w-100"
                  disabled={activeStep === steps.length - 1}
                >
                  {translations.letsMoveOn}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayments;
