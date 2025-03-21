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
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalı")
    .max(20, "Kullanıcı adı en fazla 20 karakter olmalı")
    .matches(/^[a-zA-Z0-9]+$/, "Kullanıcı adı sadece harf ve rakam içerebilir")
    .required("Kullanıcı adı zorunludur"),

  university: yup.string().required("Üniversite seçmek zorunludur"),

  dateofBirth: yup
    .date()
    .max(new Date(), "Doğum tarihi bugünden ileri bir tarih olamaz")
    .required("Doğum tarihi zorunludur"),

  gender: yup.string().required("Cinsiyet seçmek zorunludur"),

  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Telefon numarası tam olarak 10 haneli olmalıdır")
    .required("Telefon numarası zorunludur"),

  language: yup.string().required("Dil seçmek zorunludur"),

  level: yup
    .string()
    .required("Seviye seçmek zorunludur"),

  isAccepted: yup
    .boolean()
    .oneOf([true], "Devam etmek için kuralları kabul etmelisiniz"),
});
