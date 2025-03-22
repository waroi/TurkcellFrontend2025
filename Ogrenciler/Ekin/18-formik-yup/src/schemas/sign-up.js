import * as yup from "yup";

export const initialValues = {
  "sign-up-name": "",
  "sign-up-surname": "",
  "sign-up-email": "",
  "sign-up-password": "",
};

export const validationSchema = yup.object().shape({
  "sign-up-name": yup
    .string()
    .required("Lütfen adınızı giriniz.")
    .min(3, "Lütfen minimum 3 karakter giriniz."),
  "sign-up-surname": yup
    .string()
    .required("Lütfen soyadınızı giriniz.")
    .min(3, "Lütfen minimum 3 karakter giriniz."),
  "sign-up-email": yup
    .string()
    .required("Lütfen e-posta adresinizi giriniz.")
    .email("Lütfen geçerli bir e-posta adresi giriniz."),
  "sign-up-password": yup
    .string()
    .required("Lütfen şifrenizi giriniz.")
    .min(6, "Lütfen minimum 6 karakter giriniz.")
    .matches(/(?=.*[a-z])/, "Lütfen en az bir küçük harf giriniz.")
    .matches(/(?=.*[A-Z])/, "Lütfen en az bir büyük harf giriniz.")
    .matches(/(?=.*\d)/, "Lütfen en az bir sayı giriniz."),
});
