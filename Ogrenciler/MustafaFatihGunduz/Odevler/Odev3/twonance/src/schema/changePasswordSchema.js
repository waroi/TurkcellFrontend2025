import * as yup from "yup";
export const changePasswordSchema = yup.object({
    newPassword: yup.string()
      .min(6,"Şifre en az 6 karakter olmalı.")
      .required( "Bu alan zorunludur."),
    confirmNewPassword: yup.string()
      .oneOf([yup.ref("newPassword"), null], "Şifreler uyuşmuyor.")
      .required("Bu alan zorunludur."),
  });