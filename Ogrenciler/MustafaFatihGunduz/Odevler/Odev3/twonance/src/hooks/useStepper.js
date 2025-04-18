import { useState, useEffect } from 'react';

const useStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Select currency", "Confirm Payment", "Complete Payment"];
  
  useEffect(() => {
    console.log(`Rendering step: ${activeStep}`);
    console.log("Step",steps[activeStep])
  }, [activeStep]);
  
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1); 
    }
  };
  
  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return { activeStep, handleNext, handleBack, steps };
};

export default useStepper;

