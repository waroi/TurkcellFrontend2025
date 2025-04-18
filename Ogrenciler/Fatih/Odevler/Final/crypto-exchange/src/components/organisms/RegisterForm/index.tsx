"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RegisterForm.module.css";
import FormInput from "@/components/atoms/FormInput";
import PasswordInput from "@/components/atoms/PasswordInput";
import CountrySelect from "@/components/atoms/CountrySelect";
import { registerWithEmail } from "@/services/authService";
import { saveUserProfile } from "@/services/userService";
import { useTranslations } from "next-intl";

const RegisterForm = () => {
  const [emailVerified, setEmailVerified] = useState(false);
  const t = useTranslations("RegisterForm");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "South Korea (+82)",
      phone: "",
      uid: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .matches(/[!@#$%^&*(),.?\":{}|<>]/, "Must include special character")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
      nickname: Yup.string()
        .matches(/^[a-zA-Z0-9]+$/, "No special characters allowed")
        .required("Required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Only numbers allowed")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const user = await registerWithEmail(values.email, values.password);
        await saveUserProfile(user.uid, {
          email: values.email,
          nickname: values.nickname,
          country: values.country,
          phone: values.phone,
          uidCode: values.uid,
        });
      } catch (error: any) {
        alert("Registration failed: " + error.message);
      }
    },
  });

  const handleEmailAuth = () => {
    if (formik.values.email) {
      alert("Authentication link sent to " + formik.values.email);
      setEmailVerified(true);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inlineGroupFull}>
        <div className="d-flex align-items-center">
          <label className={styles.label}>{t("emailLabel")}</label>
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>({formik.errors.email})</div>
          )}
        </div>

        <div className={styles.emailGroup}>
          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            disabled={emailVerified}
            className={styles.emailInput}
          />
          <button
            type="button"
            className={styles.authBtn}
            onClick={handleEmailAuth}
          >
            {t("authenticate")}
          </button>
        </div>
      </div>

      <div className={styles.passwordFieldWrapper}>
        <label className={styles.label}>{t("passwordLabel")}</label>
        <PasswordInput
          label=""
          name="password"
          placeholder={t("passwordPlaceholder")}
          formik={formik}
        />
      </div>

      <div className={styles.passwordFieldWrapper}>
        <PasswordInput
          label=""
          name="confirmPassword"
          placeholder={t("confirmPasswordPlaceholder")}
          formik={formik}
        />
      </div>

      <label className={styles.label}>{t("nicknameLabel")}</label>
      <FormInput
        placeholder={t("nicknamePlaceholder")}
        name="nickname"
        type="text"
        formik={formik}
      />

      <label className={styles.label}>{t("countryLabel")}</label>
      <CountrySelect formik={formik} />

      <label className={styles.label}>{t("phoneLabel")}</label>
      <FormInput
        placeholder={t("phonePlaceholder")}
        name="phone"
        type="text"
        formik={formik}
      />

      <label className={styles.label}>{t("uidLabel")}</label>
      <FormInput
        placeholder={t("uidPlaceholder")}
        name="uid"
        type="text"
        formik={formik}
        required={false}
      />

      <button type="submit" className={styles.submitBtn}>
        {t("submit")}
      </button>

      <div className="text-center mt-3">
        <small className={styles.haveAccount}>
          {t("haveAccount")} <a href="/login">{t("login")}</a>
        </small>
      </div>
    </form>
  );
};

export default RegisterForm;
