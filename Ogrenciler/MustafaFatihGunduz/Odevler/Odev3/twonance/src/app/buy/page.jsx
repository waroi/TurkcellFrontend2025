"use client";
import { useState, useEffect } from "react";
import AuthContainer from "../../components/components/AuthContainer";
import CustomButton from "../../components/components/Button";
import { Stepper, Step, StepLabel, Typography } from "@mui/material";
import useGetCryptos from "../../hooks/useGetCryptos";
import SelectCurrenyStep from "../../components/Steps/SelectCurrencyStep";
import ConfirmPayments from "../../components/Steps/ConfirmPayments";
import PaymentDetails from "../../components/Steps/PaymentDetails";
import { useLanguage } from "@/context/LanguageContext";
const BuyPage = () => {
  const { translations } = useLanguage();
  const steps = [
    `${translations.selectCurrency}`,
    `${translations.paymentDetails}`,
    `${translations.confirmPayment}`,
  ];
  const { cryptos } = useGetCryptos();
  const [coin, setCoin] = useState("BTC/USDT");
  const handleCoinChange = (symbol) => {
    setCoin(symbol);
  };
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
    if (cryptos.length > 0) {
      setCoin(cryptos[0].symbol);
    }
  }, [cryptos]);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <SelectCurrenyStep
            coin={coin}
            cryptos={cryptos}
            handleCoinChange={handleCoinChange}
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <ConfirmPayments
            label={translations.buy}
            activeStep={activeStep}
            steps={steps}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
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
      <AuthContainer authType={translations.buyCyrpto} />
      <section className="mt-21">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="d-flex flex-column">
                <CustomButton
                  label={translations.overview}
                  textColor="text-dark"
                  color="white"
                  padding={"py-11 ps-16 pe-27"}
                  isBold={true}
                />
                <CustomButton
                  label={translations.buyCyrpto}
                  textColor="text-white"
                  color="primary"
                  padding={"py-11 ps-16 pe-27"}
                  isBold={true}
                />
                <CustomButton
                  label={translations.sellCyrpto}
                  textColor="text-dark"
                  color="white"
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
                      <StepLabel className="fs-6 text-dark fw-normal">
                        {label}
                      </StepLabel>
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

export default BuyPage;
