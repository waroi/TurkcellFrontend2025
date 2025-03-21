import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  firstName: yup.string().required("İsim girmek zorunludur"),
  lastName: yup.string().required("Soyisim girmek zorunludur"),
  coverLetter: yup
    .string()
    .min(3, "Ön yazı en az 3 karakter olmalı")
    .max(200, "Ön yazı en fazla 200 karakter olmalı")
    .required("Ön Yazı yazmak zorunludur."),
});
export const advancedSchema = yup.object().shape
