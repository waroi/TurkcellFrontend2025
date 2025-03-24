import { useCallback } from "react";
import { saveApplication } from "../../firebase/dbController";
const useSubmitApplication = (setActiveStep) => {
  return useCallback(
    async (values, actions) => {
      try {
        await saveApplication(values);
        console.log("Application saved successfully");
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        actions.setSubmitting(false);
        actions.resetForm();
        setActiveStep(0);
      }
    },
    [setActiveStep]
  );
};
export default useSubmitApplication;
