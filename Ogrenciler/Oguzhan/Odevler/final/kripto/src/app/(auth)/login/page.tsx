"use client";

import { Formik, Form, FormikHelpers } from "formik";
import { loginSchema } from "@/lib/schemas";
import { FormikInput } from "@/components/atoms/FormikInput"
import { Button } from "../../../components/atoms/Button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";


interface LoginFormValues {
  email: string;
  password: string;
}

export default function Login() {

  const { login, user, loading } = useAuthStore();
  const router = useRouter();

  if (user && !loading) {
    router.push("/");
    return null;
  }

  const onSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
  ) => {

    try {
      await login(values.email, values.password);
      router.push("/");

    } catch (error: any) {
      alert("Giriş başarısız:" + error.message)

    } finally {
      actions.setSubmitting(false);
      actions.resetForm();
    }


  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
      <div>
        <h2 className="mb-4 fw-medium fs-1">Login To Rockie</h2>

        <p>Welcome back! Log In now to start trading</p>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={loginSchema}
        >
          {({ isSubmitting }) => (<Form>
            <div className="mb-3">
              <FormikInput
                label="Email"
                name="email"
                type="email"
                placeholder="Emailinizi giriniz"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <FormikInput
                label="Şifre"
                name="password"
                type="password"
                placeholder="Şifrenizi giriniz"
                className="form-control"
              />
            </div>
            <Button type="submit" className="btn btn-primary w-100" disabled={isSubmitting} >
              {isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
            </Button>
          </Form>)}
        </Formik>
      </div>
    </div>
  );
}


