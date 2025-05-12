"use client"

import { Formik, Form, FormikHelpers } from "formik";
import { registerSchema } from "@/lib/schemas";
import { FormikInput } from "@/components/atoms/FormikInput"
import { Button } from "../../../components/atoms/Button";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";



interface RegisterFormValues {
    email: string;
    password: string;
    name: string;
    surname: string;
}

export default function Register() {
    const { register } = useAuthStore();
    const router = useRouter();

    const onSubmit = async (
        values: RegisterFormValues,
        actions: FormikHelpers<RegisterFormValues>
    ) => {
        try {
            await register(
                values.email,
                values.password,
                values.name,
                values.surname
            );
            router.push("/login");
        } catch (error: any) {
            alert("Kayıt olma başarısız: " + error.message);
        } finally {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            actions.resetForm();
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100 ">
            <div>
                <h2 className="text-center mb-4 fw-medium fs-1">Register To Rockie</h2>
                <p>Register in advance and enjoy the event benefits</p>

                <Formik
                    initialValues={{ email: "", password: "", name: "", surname: "" }}
                    onSubmit={onSubmit}
                    validationSchema={registerSchema}
                >
                    {({ isSubmitting }) => (<Form>
                        <div className="mb-3">
                            <FormikInput
                                label="Ad"
                                name="name"
                                type="text"
                                placeholder="İsminizi giriniz"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <FormikInput
                                label="Soyad"
                                name="surname"
                                type="text"
                                placeholder="Soyadınızı giriniz"
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <FormikInput
                                label="Email"
                                name="email"
                                type="email"
                                placeholder="Emailinizi giriniz "
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
                        <Button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                            {isSubmitting ? "Kayıt Olunuyor..." : "Kayıt Ol"}
                        </Button>
                    </Form>)}
                </Formik>
            </div>
        </div>
    );
}
