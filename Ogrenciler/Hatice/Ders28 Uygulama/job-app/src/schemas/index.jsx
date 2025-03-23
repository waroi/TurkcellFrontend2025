import * as yup from "yup";

export const basicSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Ad soyad gerekli"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Şifre zorunludur"),
  phone: yup
    .number()
    .positive("Lütfen pozitif değer giriniz")
    .integer("Lütfen telefon numarasını tam sayı olarak giriniz")
    .required("Telefon numarası zorunludur"),
  linkedin: yup
    .string()
    .url("Geçerli bir URL giriniz")
    .required("LinkedIn gerekli"),
  coverLetter: yup
    .string()
    .required("Ön yazı gerekli"),
});

export const advancedSchema = yup.object().shape({
  position: yup
    .string()
    .oneOf(["Frontend Developer", "Backend Developer", "Full Stack Developer"], "Lütfen bir pozisyon seçiniz")
    .required("Pozisyon seçimi gerekli"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});