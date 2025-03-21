import { saveApplication } from "../../firebase/dbController";
const onSubmit = async (values, actions) => {
  try {
    await saveApplication(values);
    console.log("Application saved successfully");
  } catch (error) {
    console.error("Error submitting form:", error);
  } finally {
    actions.setSubmitting(false);
    actions.resetForm();
  }
};
export default onSubmit;
