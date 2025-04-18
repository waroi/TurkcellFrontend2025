"use client";
import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/components/Button";
import { useLanguage } from "../../../context/LanguageContext";
import useAuthStore from "../../../store/useAuthStore";
import useCustomFormik from "../../../hooks/useCustomFormik";
import { changePasswordSchema } from "../../../schema/changePasswordSchema";
const ChangePassword = () => {
  const { translations } = useLanguage();
  const { changePassword, loading, error } = useAuthStore();
  const { values, handleChange, handleSubmit } = useCustomFormik({
    validationSchema: changePasswordSchema,
    onSubmit: async ({ resetForm }) => {
      try {
        await changePassword(values.newPassword);
        alert(
          translations.passwordChanged || "Şifreniz başarıyla değiştirildi."
        );
        resetForm();
      } catch (error) {
        console.error("Şifre değiştirme hatası:", error);
      }
    },
  });
  return (
    <div>
      <div className="container">
        <h2 className="fs-2 text-dark fw-bold pb-16">
          {" "}
          {translations.changePassword}{" "}
        </h2>
        <h6 className="text-dark fw-normal display-1 pb-16">
          {" "}
          {translations.newPassword}{" "}
        </h6>
        <div className="d-flex align-items-center gap-5">
          <div className="input w-100">
            <Input
              id={"oldPassword"}
              label={translations.oldPassword}
              type="password"
              placeholder={translations.oldPassword}
              isBuyPage={true}
            />
          </div>
          <div className="input w-100">
            <Input
              id={"twoFA"}
              label={translations.twoFa}
              type="text"
              placeholder={translations.twoFaCode}
              isBuyPage={true}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-center gap-5">
            <div className="w-100">
              <Input
                id={"newPassword"}
                label={translations.newPassword}
                type="password"
                value={values.newPassword}
                onChange={handleChange}
                placeholder={translations.newPassword}
                isBuyPage={true}
              />
            </div>
            <div className="w-100">
              <Input
                id={"confirmNewPassword"}
                label={translations.confirmPassword}
                type="password"
                value={values.confirmNewPassword}
                onChange={handleChange}
                placeholder={translations.confirmPassword}
                isBuyPage={true}
              />
            </div>
          </div>
          <Button
            type="submit"
            label={translations.changePassword}
            padding={"px-33 py-93"}
            color="primary"
            textColor="text-white"
          />
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
