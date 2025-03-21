import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../schemas/sign-up";
import useAuth from "../hooks/useAuth";
import { submitForm } from "../services/firebase";

import Input from "../components/Input";
import Button from "../components/Button";

export default function SignUp() {
  const { register } = useAuth();

  async function onSubmit(values, actions) {
    register(values);
    //actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Ad" name="name" type="text" />
          <Input label="Soyad" name="surname" type="text" />
          <Input label="E-posta" name="email" type="email" />
          <Input label="Şifre" name="password" type="password" />
          <Button disabled={isSubmitting}>Üye Ol</Button>
        </Form>
      )}
    </Formik>
  );
}
