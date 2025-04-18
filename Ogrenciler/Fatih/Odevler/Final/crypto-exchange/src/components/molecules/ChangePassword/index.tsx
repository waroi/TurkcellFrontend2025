"use client";

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";
import Button from "@/components/atoms/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./ChangePassword.module.css";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const ChangePassword = () => {
  const t = useTranslations("ChangePassword");
  const theme = useSelector((state: RootState) => state.theme.mode);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [visibility, setVisibility] = useState({
    current: false,
    twofa: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (key: keyof typeof visibility) => {
    setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      twoFACode: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(t("required")),
      newPassword: Yup.string().min(6, t("minLength")).required(t("required")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], t("passwordsMustMatch"))
        .required(t("required")),
    }),
    onSubmit: async (values) => {
      setError("");
      setSuccess("");

      const user = auth.currentUser;
      if (!user || !user.email) {
        setError(t("userNotFound"));
        return;
      }

      try {
        const credential = EmailAuthProvider.credential(
          user.email,
          values.currentPassword
        );
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, values.newPassword);
        setSuccess(t("successMessage"));
        formik.resetForm();
      } catch (err: any) {
        setError(err.message);
      }
    },
  });

  const inputClass =
    theme === "dark" ? "form-control bg-dark text-white" : "form-control";

  return (
    <form onSubmit={formik.handleSubmit}>
      <h4 className={`${styles.title} fw-bold mb-4`}>{t("title")}</h4>
      <p className={`${styles.title} fw-semibold`}>{t("subtitle")}</p>

      <div className="row g-3">
        {[
          {
            label: t("currentPassword"),
            name: "currentPassword",
            type: visibility.current ? "text" : "password",
            toggle: () => toggleVisibility("current"),
            icon: visibility.current,
          },
          {
            label: t("twoFA"),
            name: "twoFACode",
            type: visibility.twofa ? "text" : "password",
            toggle: () => toggleVisibility("twofa"),
            icon: visibility.twofa,
          },
          {
            label: t("newPassword"),
            name: "newPassword",
            type: visibility.new ? "text" : "password",
            toggle: () => toggleVisibility("new"),
            icon: visibility.new,
          },
          {
            label: t("confirmPassword"),
            name: "confirmPassword",
            type: visibility.confirm ? "text" : "password",
            toggle: () => toggleVisibility("confirm"),
            icon: visibility.confirm,
          },
        ].map((field, i) => (
          <div key={field.name} className="col-md-6">
            <label className={`${styles.text} form-label`}>
              {field.label}*
            </label>
            <div className="input-group">
              <input
                type={field.type}
                name={field.name}
                className={inputClass}
                placeholder={field.label}
                value={formik.values[field.name as keyof typeof formik.values]}
                onChange={formik.handleChange}
              />
              <span
                className="input-group-text"
                style={{ cursor: "pointer" }}
                onClick={field.toggle}
              >
                {field.icon ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        ))}
      </div>

      {error && <p className="text-danger mt-3">{error}</p>}
      {success && <p className="text-success mt-3">{success}</p>}

      <div className="mt-4 w-25">
        <Button type="submit" variant="primary">
          {t("submit")}
        </Button>
      </div>
    </form>
  );
};

export default ChangePassword;
