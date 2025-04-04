"use client";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link"; 
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Ad zorunludur"),
    lastName: Yup.string().required("Soyad zorunludur"),
    email: Yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta zorunludur"),
    password: Yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre zorunludur"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Şifreler eşleşmelidir")
      .required("Şifre onayı zorunludur"),
  });

  const handleSubmit = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      router.push("/login"); // Yönlendirmeyi değiştirdik
    } catch (error) {
      setError("Kayıt işlemi başarısız: " + error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ width: '450px' }}>
        <h2 className="text-center mb-4">Kayıt Ol</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="firstName">Ad:</label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                />
                <ErrorMessage name="firstName" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Soyad:</label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                />
                <ErrorMessage name="lastName" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">E-posta:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Şifre:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="div" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword">Şifreyi Onayla:</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
              </div>
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary w-100">Kayıt Ol</button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-3">
          <p>Zaten hesabın var mı? <Link href="/login">Giriş Yap</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;



