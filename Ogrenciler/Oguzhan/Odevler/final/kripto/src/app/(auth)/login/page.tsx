"use client";

import { Formik, Form, FormikHelpers } from "formik";
import { loginSchema } from "../schemas";
import CustomInput from "../components/CustomInput";
import { Button } from "../../../components/atoms/Button";

interface LoginFormValues {
    email: string;
    password: string;
}

const onSubmit = async (
    values: LoginFormValues,
    actions: FormikHelpers<LoginFormValues>
) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export default function Login() {
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
                    <Form>
                        <div className="mb-3">
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Emailinizi giriniz"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <CustomInput
                                label="Şifre"
                                name="password"
                                type="password"
                                placeholder="Şifrenizi giriniz"
                                className="form-control"
                            />
                        </div>
                        <Button type="submit" className="btn btn-primary w-100" onClick={undefined}>
                            Giriş Yap
                        </Button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}
