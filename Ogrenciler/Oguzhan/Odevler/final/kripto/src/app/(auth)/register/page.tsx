"use client";

import { Formik, Form, FormikHelpers } from "formik";
import { registerSchema } from "../schemas";
import CustomInput from "../components/CustomInput";
import { Button } from "../../../components/atoms/Button";

interface RegisterFormValues {
    email: string;
    password: string;
}

const onSubmit = async (
    values: RegisterFormValues,
    actions: FormikHelpers<RegisterFormValues>
) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export default function Register() {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
            <div>
                <h2 className="text-center mb-4 fw-medium fs-1">Register To Rockie</h2>
                <p>Register in advance and enjoy the event benefits</p>

                <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={onSubmit}
                    validationSchema={registerSchema}
                >
                    <Form>
                        <div className="mb-3">
                            <CustomInput
                                label="Ad"
                                name="name"
                                type="text"
                                placeholder="İsminizi giriniz"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <CustomInput
                                label="Soyad"
                                name="surname"
                                type="text"
                                placeholder="Soyadınızı giriniz"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Emailinizi giriniz "
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
