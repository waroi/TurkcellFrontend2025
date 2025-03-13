"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { doCreateUserWithEmailAndPassword } from "../../../api/firebaseSign";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    publisher: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    publisher: "",
    agreeTerms: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const user = await doCreateUserWithEmailAndPassword(
        formData.email,
        formData.password,
        formData.publisher
      );
      if (user) {
        console.log("Hesap başarıyla oluşturuldu:", user);
        setFormSubmitted(true);
        console.log("Yönlendirme yapılıyor...");
        router.push("/sign/signIn");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          publisher: "",
        });
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className=" min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-6 bg-dark d-none d-lg-block">
                  <div className="d-flex flex-column h-100 p-5 text-white justify-content-center">
                    <div className="text-center mb-5">
                      <h1 className="display-6 fw-bold mb-3">
                        Melam'a Hoşgeldin...
                      </h1>
                      <p className="lead">
                      Geliştiriciler, tasarımcılar ve dijital meraklılardan oluşan topluluğumuza katılın.
                      </p>
                    </div>
                    <Image
                      src="https://cdn3.vectorstock.com/i/1000x1000/71/92/sign-up-icon-registration-symbol-vector-10637192.jpg"
                      alt="Sign up illustration"
                      width={300}
                      height={300}
                      className="img-fluid mt-auto mx-auto"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 p-lg-5">
                    <div className="text-center mb-4">
                      <h2 className="h3 fw-bold">Bir hesap oluşturun</h2>
                      <p className="text-muted">
                      Özel içeriklere ve özelliklere erişin
                      </p>
                    </div>

                    {formSubmitted && (
                      <div className="alert alert-success mb-4">
                        Hesabınız başarıyla oluşturuldu!{" "}
                        <Link href="/sign/signIn" className="alert-link">
                        Şimdi giriş yap
                        </Link>
                      </div>
                    )}

                    {errorMessage && (
                      <div className="alert alert-danger mb-4">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            Adınız
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.firstName ? "is-invalid" : ""
                            }`}
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Soyadınız
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.lastName ? "is-invalid" : ""
                            }`}
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email Adresiniz
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Parola
                          </label>
                          <input
                            type="password"
                            className={`form-control ${
                              formErrors.password ? "is-invalid" : ""
                            }`}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="publisher" className="form-label">
                            Yazar
                          </label>
                          <input
                            type="publisher"
                            className={`form-control ${
                              formErrors.publisher ? "is-invalid" : ""
                            }`}
                            id="publisher"
                            name="publisher"
                            value={formData.publisher}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-dark w-100 py-2"
                          >
                            Hesap Oluştur
                          </button>
                        </div>
                      </div>
                    </form>
                    <div className="text-center mt-4">
                      <p className="text-muted mb-4">Yada şununla giriş yap:</p>
                      <div className="d-flex justify-content-center gap-2 mb-4">
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-google me-2"></i>Google
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-facebook me-2"></i>Facebook
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-github me-2"></i>GitHub
                        </button>
                      </div>
                      <p className="mb-0">
                        Zaten hesabın var mı?{" "}
                        <Link
                          href="/sign/signIn"
                          className="text-decoration-none fw-medium"
                        >
                          Giriş Yap
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
