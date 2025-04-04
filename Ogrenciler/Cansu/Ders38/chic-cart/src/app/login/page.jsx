"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Geçerli bir e-posta adresi girin").required("E-posta zorunludur"),
    password: Yup.string().min(6, "Şifre en az 6 karakter olmalıdır").required("Şifre zorunludur"),
  });

  const handleSubmit = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      router.push("/"); 
    } catch (error) {
      setError("Giriş işlemi başarısız: " + error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Giriş Yap</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
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
              {error && <p className="text-danger">{error}</p>}
              <button type="submit" className="btn btn-primary w-100">Giriş Yap</button>
            </Form>
          )}
        </Formik>
        <div className="text-center mt-3">
          <p>Hesabın yok mu? <Link href="/register">Kayıt ol</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;


