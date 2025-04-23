import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir email adresi giriniz.")
    .required("Email alanı zorunludur."),
  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalıdır.")
    .required("Şifre alanı zorunludur."),
});