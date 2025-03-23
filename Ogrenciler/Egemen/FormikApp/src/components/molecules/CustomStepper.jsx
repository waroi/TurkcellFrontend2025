import React from "react";
import getStepContent from "../../hooks/getFormSection";
import { Step, Stepper } from "react-form-stepper";
import Button from "../atoms/buttons/Button";
const CustomStepper = ({
  handleBack,
  handleNext,
  activeStep,
  isSubmitting,
}) => {
  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Personal Information" />
        <Step label="Education" />
        <Step label="Experience" />
        <Step label="Skills" />
        <Step label="Additional Information" />
      </Stepper>

      <div className="mt-4">{getStepContent(activeStep)}</div>

      <div className="d-flex justify-content-between mt-4">
        {activeStep > 0 && (
          <Button
            className="btn btn-secondary px-4 py-2"
            type="button"
            onClick={handleBack}
          >
            Back
          </Button>
        )}

        {activeStep < 4 ? (
          <Button
            className="btn btn-primary px-4 py-2"
            type="button"
            onClick={handleNext}
          >
            Next
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
