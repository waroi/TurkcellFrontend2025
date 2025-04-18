import React from "react";
import Overlay from "../components/Overlay";
import Image from "next/image";
import ReferenceCode from "../../app/buy/components/ReferenceCode";
import FormComponent from "@/app/buy/components/FormComponent";
import { Button } from "@mui/material";
import { useLanguage } from "@/context/LanguageContext";

const PaymentDetails = ({ activeStep, steps, handleNext, handleBack }) => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="bg-secondary position-relative mt-12 mb-12">
        <Overlay />
        <div className=" position-relative z-1 px-12">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex pt-12">
              <h4 className="text-success fw-bold display-1 pe-98 pb-98">
                {translations.success}
              </h4>
              <Image
                src={"/assets/success.svg"}
                width={30}
                height={30}
                alt="success"
              />
            </div>
            <p className="text-dark fw-normal fs-6">
              {translations.youSuccesfullyBought}
              <span className="text-success fs-6 fw-bold">BTC</span>
              {translations.twonance}!
            </p>
            <div className="d-flex flex-column bg-white rounded w-100 mt-12 mb-96 px-97">
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-secondary fs-6 fw-normal pt-97 pb-93">
                  {translations.status}
                </h6>
                <p className="text-success fs-6 fw-normal">
                  {translations.completed}
                </p>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-secondary fs-6 fw-normal  pt-96 pb-93">
                  Transaction ID
                </h6>
                <p className="text-dark fs-6 fw-normal">
                  0msx836930...87r398 ID
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary position-relative mt-12 mb-12">
        <Overlay />
        <div className=" position-relative z-1 px-12">
          <div className="d-flex flex-column">
            <h6 className="text-dark fw-bold fs-4 pt-96">
              {translations.paymentDetails}
            </h6>
            <p className="text-dark fw-normal fs-6 pt-12 pb-97">
              {translations.bankAccount}
            </p>
            <div className="form">
              <FormComponent
                label={translations.accountName}
                text={"Mustafa Fatih GÜndüz"}
              />
              <FormComponent
                label={translations.accountNumber}
                text={"548422222221"}
              />
              <FormComponent
                label={translations.adress}
                text={"079 Dariana Knoll, CA"}
              />
              <FormComponent label={translations.swiftCode} text={"UI8"} />
              <FormComponent
                label={translations.bankAdress}
                text={"55416 Powlowski Spring, CA"}
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
                    {translations.trade}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className="rounded-pill py-94 px-29  me-12 w-100"
                  >
                    {translations.wallet}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
