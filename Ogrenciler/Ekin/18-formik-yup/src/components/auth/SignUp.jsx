import { Form, Formik } from "formik";
import { initialValues, validationSchema } from "../../schemas/sign-up";
import useAuth from "../../hooks/useAuth";

import Input from "#/atoms/Input";
import Button from "#/atoms/Button";

export default function SignUp() {
  const { register } = useAuth();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => register(values)}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form>
          <Input label="Ad" name="sign-up-name" type="text" />
          <Input label="Soyad" name="sign-up-surname" type="text" />
          <Input label="E-posta" name="sign-up-email" type="email" />
          <Input label="Şifre" name="sign-up-password" type="password" />
          <Button disabled={isSubmitting}>Üye Ol</Button>
        </Form>
      )}
    </Formik>
  );
}
