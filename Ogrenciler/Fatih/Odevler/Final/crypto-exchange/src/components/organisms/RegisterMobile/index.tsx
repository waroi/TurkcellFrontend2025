"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./RegisterMobile.module.css";
import FormInput from "@/components/atoms/FormInput";
import PasswordInput from "@/components/atoms/PasswordInput";
import CountrySelect from "@/components/atoms/CountrySelect";

const RegisterMobile = () => {
  const [mobileVerified, setMobileVerified] = useState(false);

  const formik = useFormik({
    initialValues: {
      mobile: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "South Korea (+82)",
      phone: "",
      uid: "",
    },
    validationSchema: Yup.object({
      mobile: Yup.string()
        .matches(/^\d+$/, "Only numbers allowed")
        .required("Required"),
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
    onSubmit: (values) => {
      console.log("Registering:", values);
    },
  });

  const handleMobileAuth = () => {
    if (formik.values.mobile) {
      alert("Authentication code sent to " + formik.values.mobile);
      setMobileVerified(true);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.inlineGroupFull}>
        <div className="d-flex align-items-center justify-content-between">
          <label className={styles.label}>Mobile Phone</label>
          {formik.touched.mobile && formik.errors.mobile && (
            <div className={styles.error}>({formik.errors.mobile})</div>
          )}
        </div>

        <div className={styles.emailGroup}>
          <input
            type="tel"
            name="mobile"
            placeholder="Your phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            disabled={mobileVerified}
            className={styles.emailInput}
          />
          <button
            type="button"
            className={styles.authBtn}
            onClick={handleMobileAuth}
          >
            Authenticate
          </button>
        </div>
      </div>

      <div className={styles.passwordFieldWrapper}>
        <label className={styles.label}>Password</label>
        <PasswordInput
          label=""
          name="password"
          placeholder="Please enter a password."
          formik={formik}
        />
      </div>

      <div className={styles.passwordFieldWrapper}>
        <PasswordInput
          label=""
          name="confirmPassword"
          placeholder="Please re-enter your password."
          formik={formik}
        />
      </div>

      <label className={styles.label}>NickName</label>
      <FormInput
        placeholder="Enter Email"
        name="nickname"
        type="text"
        formik={formik}
      />

      <label className={styles.label}>Country</label>
      <CountrySelect formik={formik} />

      <label className={styles.label}>Phone</label>
      <FormInput
        placeholder="ex) 012345678 (without '-')"
        name="phone"
        type="text"
        formik={formik}
      />

      <label className={styles.label}>UID Code</label>
      <FormInput
        placeholder="Please enter your invitation code."
        name="uid"
        type="text"
        formik={formik}
        required={false}
      />

      <button type="submit" className={styles.submitBtn}>
        Pre-Registration
      </button>

      <div className="text-center mt-3">
        <small className={styles.haveAccount}>
          Already have an account? <a href="/login">Login</a>
        </small>
      </div>
    </form>
  );
};

export default RegisterMobile;
