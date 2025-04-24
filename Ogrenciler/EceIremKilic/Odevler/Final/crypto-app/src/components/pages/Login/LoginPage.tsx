"use client";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import { useTheme } from "@/contexts/ThemeContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Col, Container, Image } from "react-bootstrap";
import CreateAccount from "@/components/organisms/CreateAccount/CreateAccount";
import Footer from "@/components/organisms/Footer/Footer";
import { auth } from "../../../../firebase_config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme();
  const t = useTranslations();
  const [loginError, setLoginError] = useState("");
  const router = useRouter();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("validation.email.invalid"))
        .required(t("validation.email.required")),
      password: Yup.string()
        .min(6, t("validation.pass.must"))
        .required(t("validation.pass.required")),
    }),
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("Giriş Başarılı:", user);
        loginForm.resetForm();
        router.push("/en/home");
      } catch (error) {
        if (error instanceof Error) {
          setLoginError(error.message);
        } else {
          setLoginError("Bilinmeyen bir hata oluştu.");
        }
        console.error("Giriş Hatası:", error);
      }
    },
  });

  return (
    <div className={`bg-white`}>
      <NavbarComponent />
      <div className={`bg-${theme}`}>
        <Container className="d-flex justify-content-between py-5">
          <h1>{t("login.title")}</h1>
          <p className="text-secondary">
            {t("login.home")} / {t("login.title")}
          </p>
        </Container>
        <Container className="py-5 d-flex flex-column align-items-center">
          <h1>{t("login.l")}</h1>
          <p className="text-secondary mb-4">{t("login.l2")}</p>
          <Image src="/https.png" alt="https" />
        </Container>
        <Container className="d-flex justify-content-center pb-5">
          <Col lg={6}>
            <div className="d-flex justify-content-center mb-3">
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4 text-white btn-sm me-2"
              >
                {t("loginForm.email")}
              </button>
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill text-secondary btn-sm px-4 border-0"
              >
                {t("loginForm.mobile")}
              </button>
            </div>

            <form onSubmit={loginForm.handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label text-secondary fw-bold"
                >
                  {t("loginForm.emailOrId")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`form-control ${
                    loginForm.touched.email && loginForm.errors.email
                      ? "is-invalid"
                      : ""
                  }`}
                  placeholder={t("loginForm.emailPlaceholder")}
                  onChange={loginForm.handleChange}
                  onBlur={loginForm.handleBlur}
                  value={loginForm.values.email}
                />
                {loginForm.touched.email && loginForm.errors.email && (
                  <div className="invalid-feedback">
                    {loginForm.errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="form-label text-secondary fw-bold"
                >
                  {t("loginForm.password")}
                </label>
                <div className="input-group">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className={`form-control ${
                      loginForm.touched.password && loginForm.errors.password
                        ? "is-invalid"
                        : ""
                    }`}
                    placeholder={t("loginForm.passwordPlaceholder")}
                    onChange={loginForm.handleChange}
                    onBlur={loginForm.handleBlur}
                    value={loginForm.values.password}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {loginForm.touched.password && loginForm.errors.password && (
                  <div className="invalid-feedback d-block">
                    {loginForm.errors.password}
                  </div>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    id="remember"
                    name="remember"
                    type="checkbox"
                    className="form-check-input"
                    onChange={loginForm.handleChange}
                    checked={loginForm.values.remember}
                  />
                  <label htmlFor="remember" className="form-check-label">
                    {t("loginForm.rememberMe")}
                  </label>
                </div>
                <a href="#" className="text-danger small text-decoration-none">
                  {t("loginForm.forgotPassword")}
                </a>
              </div>
              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary text-white">
                  {t("loginForm.loginButton")}
                </button>
              </div>

              {loginError && (
                <div className="alert alert-danger">{loginError}</div>
              )}

              <p className="text-center small">
                {t("loginForm.registerPrompt.r1")}{" "}
                <a href="#" className="text-primary fw-bold">
                  {t("loginForm.registerPrompt.r2")}
                </a>
              </p>
            </form>
          </Col>
        </Container>
      </div>
      <CreateAccount />
      <Footer />
    </div>
  );
};

export default LoginPage;
