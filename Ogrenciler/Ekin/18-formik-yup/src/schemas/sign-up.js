import * as yup from "yup";

export const initialValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Lütfen adınızı giriniz.")
    .min(3, "Lütfen minimum 3 karakter giriniz."),
  surname: yup
    .string()
    .required("Lütfen soyadınızı giriniz.")
    .min(3, "Lütfen minimum 3 karakter giriniz."),
  email: yup
    .string()
    .required("Lütfen e-posta adresinizi giriniz.")
    .email("Lütfen geçerli bir e-posta adresi giriniz."),
  password: yup
    .string()
    .required("Lütfen şifrenizi giriniz.")
    .min(6, "Lütfen minimum 6 karakter giriniz.")
    .matches(/(?=.*[a-z])/, "Lütfen en az bir küçük harf giriniz.")
    .matches(/(?=.*[A-Z])/, "Lütfen en az bir büyük harf giriniz.")
    .matches(/(?=.*\d)/, "Lütfen en az bir sayı giriniz."),
});
