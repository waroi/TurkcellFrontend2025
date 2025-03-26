import React from "react";
import getStepContent from "../../../hooks/getFormSection";
import { Step, Stepper } from "react-form-stepper";
import Button from "../../atoms/buttons/Button";
import { useNavigate } from "react-router";
const CustomStepper = ({
  handleBack,
  handleNext,
  activeStep,
  isSubmitting,
}) => {
  const navigate = useNavigate();
  return (
    <div>
      <Stepper className="flex-wrap" activeStep={activeStep}>
        <Step label="Kişisel Bilgiler" />
        <Step label="Eğitim" />
        <Step label="Deneyim" />
        <Step label="Beceriler" />
        <Step label="Ek Bilgiler" />
      </Stepper>

      <div className="mt-4">{getStepContent(activeStep)}</div>

      <div className="d-flex justify-content-between mt-4">
        {activeStep > 0 && (
          <Button
            className="btn btn-secondary px-4 py-2"
            type="button"
            onClick={handleBack}
          >
            Geri dön
          </Button>
        )}

        {activeStep < 4 ? (
          <Button
            className="btn btn-primary px-4 py-2"
            type="button"
            onClick={handleNext}
          >
            Devam et
          </Button>
        ) : (
          <Button
            className="btn btn-success px-5 py-2"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomStepper;
