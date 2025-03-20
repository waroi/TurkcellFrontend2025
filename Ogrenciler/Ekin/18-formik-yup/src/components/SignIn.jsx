import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../schemas/sign-in";
import useAuth from "../hooks/useAuth";
// import { submitForm } from "../services/firebase";

import Input from "../components/Input";
import Button from "../components/Button";

export default function SignIn() {
  const { login } = useAuth();

  async function onSubmit(values, actions) {
    console.log("values", values);

    login(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="E-posta" name="email" type="email" />
          <Input label="Şifre" name="password" type="password" />
          <Button disabled={isSubmitting}>Giriş Yap</Button>
        </Form>
      )}
    </Formik>
  );
}
