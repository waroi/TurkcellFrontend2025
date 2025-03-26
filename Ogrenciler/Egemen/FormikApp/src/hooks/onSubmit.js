import { useCallback } from "react";
import { saveApplication } from "../../firebase/dbController";
import { useNavigate } from "react-router";

const useSubmitApplication = (setActiveStep) => {
  const navigate = useNavigate();
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
        navigate("/applicationCompleted");
      }
    },
    [setActiveStep]
  );
};
export default useSubmitApplication;
