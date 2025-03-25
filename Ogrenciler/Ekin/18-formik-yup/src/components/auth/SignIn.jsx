import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../../schemas/sign-in";
import useAuth from "../../hooks/useAuth";

import Input from "#/atoms/Input";
import Button from "#/atoms/Button";

export default function SignIn() {
  const { login } = useAuth();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => login(values)}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="E-posta" name="sign-in-email" type="email" />
          <Input label="Şifre" name="sign-in-password" type="password" />
          <Button disabled={isSubmitting}>Giriş Yap</Button>
        </Form>
      )}
    </Formik>
  );
}
