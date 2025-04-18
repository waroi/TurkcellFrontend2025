"use client";
import { useState, useEffect } from "react";
import AuthContainer from "../../components/components/AuthContainer";
import CustomButton from "../../components/components/Button";
import { Stepper, Step, StepLabel, Typography, Button } from "@mui/material";
import useGetCryptos from "../../hooks/useGetCryptos";
import SelectCrypto from "../../components/Steps/SelectCrypto";
import SelectCurrenyStep from "../../components/Steps/SelectCurrencyStep";
import PaymentDetails from "../../components/Steps/PaymentDetails";
import ConfirmPayments from "../../components/Steps/ConfirmPayments";
import { useLanguage } from "../../context/LanguageContext";
const SellPage = () => {
  const { translations } = useLanguage();
  const steps = [
    `${translations.selectCrypto}`,
    `${translations.selectCurrency}`,
    `${translations.paymentDetails}`,
    `${translations.confirmPayment}`,
  ];
  const { onlyTenCrypto } = useGetCryptos();
  const [coin, setCoin] = useState("BTC/USDT");
  const handleCoinChange = (symbol) => {
    setCoin(symbol);
  };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (onlyTenCrypto.length > 0) {
      setCoin(onlyTenCrypto[0].symbol);
    }
  }, [onlyTenCrypto]);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <SelectCrypto
            cryptos={onlyTenCrypto}
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <SelectCurrenyStep
            coin={coin}
            cryptos={onlyTenCrypto}
            handleCoinChange={handleCoinChange}
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            label="Sell"
          />
        );
      case 2:
        return (
          <ConfirmPayments
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleBack={handleBack}
            label="Sell"
          />
        );
      case 3:
        return (
          <PaymentDetails
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div>
      <AuthContainer authType={"Sell Crypto"} />
      <section className="mt-21">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-column">
                <CustomButton
                  label={"Overview"}
                  textColor="text-dark"
                  color="white"
                  padding={"py-11 ps-16 pe-27"}
                  isBold={true}
                />
                <CustomButton
                  label={"Buy Crypto"}
                  textColor="text-dark"
                  color="white"
                  padding={"py-11 ps-16 pe-27"}
                  isBold={true}
                />
                <CustomButton
                  label={"Sell Crypto"}
                  textColor="text-white"
                  color="primary"
                  padding={"py-11 ps-16 pe-27"}
                  isBold={true}
                />
              </div>
            </div>
            <div className="col-md-9 border-start border-1 ps-15">
              <div>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label, index) => (
                    <Step key={index}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length ? (
                  <Typography variant="h6">İşlem Tamamlandı!</Typography>
                ) : (
                  renderStepContent(activeStep)
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellPage;
