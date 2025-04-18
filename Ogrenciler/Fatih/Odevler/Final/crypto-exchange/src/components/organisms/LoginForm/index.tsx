"use client";

import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";
import FormInput from "@/components/atoms/FormInput";
import PasswordInput from "@/components/atoms/PasswordInput";
import { loginWithEmail } from "@/services/authService";
import QrLogin from "@/components/molecules/QrLogin";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice";
import { useTranslations } from "next-intl";

const LoginForm = () => {
  const t = useTranslations("LoginForm");
  const [method, setMethod] = useState<"email" | "mobile">("email");
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      formik.setFieldValue("email", savedEmail);
      setRemember(true);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().when("method", {
        is: "email",
        then: Yup.string().email("Invalid email").required("Required"),
      }),
      mobile: Yup.string().when("method", {
        is: "mobile",
        then: Yup.string().required("Required"),
      }),
      password: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const credentials =
          method === "email"
            ? { email: values.email, password: values.password }
            : {
                email: `${values.mobile}@mobile.fake`,
                password: values.password,
              };

        const user = await loginWithEmail(
          credentials.email,
          credentials.password
        );

        document.cookie = `userToken=${user.uid}; path=/;`;

        if (remember && method === "email") {
          localStorage.setItem("rememberedEmail", values.email);
        } else {
          localStorage.removeItem("rememberedEmail");
        }

        dispatch(setUser(user));
        router.push("/dashboard");
      } catch (error: any) {
        alert("Login failed: " + error.message);
      }
    },
  });

  return (
    <div className={styles.loginLayoutWrapper}>
      <div className={styles.switchTabs}>
        <button
          type="button"
          className={`${styles.switchButton} ${
            method === "email" ? styles.active : ""
          }`}
          onClick={() => setMethod("email")}
        >
          {t("email")}
        </button>
        <button
          type="button"
          className={`${styles.switchButton} ${
            method === "mobile" ? styles.active : ""
          }`}
          onClick={() => setMethod("mobile")}
        >
          {t("mobile")}
        </button>
      </div>

      <div className={styles.loginLayout}>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          {method === "email" ? (
            <FormInput
              label={t("email")}
              name="email"
              type="email"
              placeholder={t("placeholderEmail")}
              formik={formik}
            />
          ) : (
            <FormInput
              label={t("mobile")}
              name="mobile"
              type="text"
              placeholder={t("placeholderMobile")}
              formik={formik}
            />
          )}

          <PasswordInput
            label={t("password")}
            name="password"
            placeholder={t("placeholderPassword")}
            formik={formik}
          />

          <div className="d-flex justify-content-between align-items-center mb-3 px-1">
            <label
              className={`${styles.label} d-flex gap-2 align-items-center`}
            >
              <input
                type="checkbox"
                name="remember"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              {t("remember")}
            </label>
            <a href="/forgot-password" className={styles.forgotPassword}>
              {t("forgot")}
            </a>
          </div>

          <button type="submit" className={styles.submitBtn}>
            {t("loginBtn")}
          </button>

          <div className="text-center mt-3">
            <small className={styles.haveAccount}>
              {t("noAccount")} <a href="/register">{t("register")}</a>
            </small>
          </div>
        </form>

        <div className={styles.qrSection}>
          <QrLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
