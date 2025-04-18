import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email("Geçerli bir e-posta adresi giriniz")
    .required("E-posta zorunludur"),

  password: Yup.string()
    .min(6, "Şifre en az 6 karakter olmalı")
    .required("Şifre zorunludur"),

  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarı zorunludur"),

  nickName: Yup.string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalı")
    .max(20, "Kullanıcı adı en fazla 20 karakter olabilir")
    .required("Kullanıcı adı zorunludur"),

  phone: Yup.string()
    .matches(/^\+?[0-9]{10,15}$/, "Telefon numarası geçersiz")
    .required("Telefon numarası zorunludur"),

  uidCode: Yup.string()
    .length(6, "Kod tam olarak 6 karakter olmalı")
    .required("UID kodu zorunludur"),
});
