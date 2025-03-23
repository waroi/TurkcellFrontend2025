import { Formik, Form } from "formik";
import { initialValues, validationSchema } from "../../schemas/application";
import { submitForm } from "../../services/firebase";
import PersonalInfoSection from "./atoms/PersonalInfoSection";
import EducationSection from "./atoms/EducationSection";
import InternshipSection from "./atoms/InternshipSection";
import Checkbox from "../inputs/Checkbox";
import Button from "../inputs/Button";

export default function ApplicationForm({ user }) {
  const formInitial = user
    ? {
        ...initialValues,
        name: user.name,
        surname: user.surname,
        email: user.email,
        "email-again": user.email,
      }
    : initialValues;

  async function onSubmit(values, actions) {
    await submitForm(values);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={formInitial}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <PersonalInfoSection />
          <EducationSection />
          <InternshipSection />

          <Checkbox name="terms-and-conditions">
            <a href="#">Aydınlatma Metni</a>'ni okudum.
          </Checkbox>
          <Checkbox name="kvkk">
            <a href="#">KVKK Metni</a>'ni okudum.
          </Checkbox>

          <Button disabled={isSubmitting}>Başvur</Button>
        </Form>
      )}
    </Formik>
  );
}
