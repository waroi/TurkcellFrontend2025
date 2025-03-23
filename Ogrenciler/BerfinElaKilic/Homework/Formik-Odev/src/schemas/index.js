import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  firstName: yup.string().required("İsim girmek zorunludur"),
  lastName: yup.string().required("Soyisim girmek zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre girmek zorunludur"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor")
    .required("Şifre tekrarını girmek zorunludur"),
  role: yup
    .string()
    .oneOf(["user", "admin"], "Geçerli bir rol seçiniz")
    .required("Rol seçmek zorunludur"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .required("Şifre girmek zorunludur"),
  role: yup
    .string()
    .oneOf(["user", "admin"], "Geçerli bir rol seçiniz")
    .required("Rol seçmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
  // firstName: yup
  //   .string()
  //   .required("İsim zorunludur")
  //   .min(2, "En az 2 karakter olmalı"),
  // lastName: yup
  //   .string()
  //   .required("Soyisim zorunludur")
  //   .min(2, "En az 2 karakter olmalı"),
  // address: yup
  //   .string()
  //   .required("Adres zorunludur")
  //   .min(5, "En az 5 karakter olmalı"),
  // phone: yup
  //   .string()
  //   .matches(/^\+?[0-9]{10,15}$/, "Geçerli bir telefon numarası girin")
  //   .required("Telefon numarası zorunludur"),
  // city: yup
  //   .string()
  //   .required("Şehir zorunludur")
  //   .min(2, "En az 2 karakter olmalı"),
  // dateOfBirth: yup
  //   .date()
  //   .required("Doğum tarihi zorunludur")
  //   .max(new Date(), "Doğum tarihi bugünden ileri olamaz"),
  // gender: yup.string().required("Cinsiyet seçimi zorunludur"),
  // university: yup.string().required("Üniversite seçimi zorunludur"),
  // department: yup.string().required("Bölüm seçimi zorunludur"),
  // graduationYear: yup
  //   .number()
  //   .required("Mezuniyet yılı zorunludur")
  //   .min(new Date().getFullYear() - 60, "Geçerli bir yıl giriniz")
  //   .max(new Date().getFullYear(), "Gelecek yıl olamaz"),
  // language: yup.string().required("Yabancı dil seçimi zorunludur"),
  // level: yup.string().required("Seviye seçimi zorunludur"),
  // referenceName: yup
  //   .string()
  //   .required("\u0130sim Soyisim zorunludur")
  //   .min(3, "En az 3 karakter olmal\u0131"),
  // referencePhone: yup
  //   .string()
  //   .matches(
  //     /^\+?[0-9]{10,15}$/,
  //     "Ge\u00e7erli bir telefon numaras\u0131 girin"
  //   )
  //   .required("Telefon numaras\u0131 zorunludur"),
  // referenceEmail: yup
  //   .string()
  //   .email("Ge\u00e7erli bir e-posta adresi girin")
  //   .required("E-posta zorunludur"),
  // workPlace: yup
  //   .string()
  //   .required("\u00c7al\u0131\u015ft\u0131\u011f\u0131n\u0131z yer zorunludur")
  //   .min(2, "En az 2 karakter olmal\u0131"),
  // startDate: yup
  //   .date()
  //   .required("Ba\u015flama tarihi zorunludur")
  //   .max(new Date(), "Ba\u015flama tarihi bug\u00fcn\u00fcn ileri olamaz"),
  // endDate: yup
  //   .date()
  //   .nullable()
  //   .min(
  //     yup.ref("startDate"),
  //     "Biti\u015f tarihi ba\u015flama tarihinden \u00f6nce olamaz"
  //   ),
  // position: yup
  //   .string()
  //   .required("Pozisyon zorunludur")
  //   .min(2, "En az 2 karakter olmal\u0131"),
  coverLetter: yup
    .string()
    .required("Cover letter zorunludur")
    .min(20, "En az 20 karakter i\u00e7ermelidir"),
});
