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
  firstName: yup
    .string()
    .required("İsim zorunludur")
    .min(2, "En az 2 karakter olmalı"),
  lastName: yup
    .string()
    .required("Soyisim zorunludur")
    .min(2, "En az 2 karakter olmalı"),
  address: yup
    .string()
    .required("Adres zorunludur")
    .min(5, "En az 5 karakter olmalı"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Geçerli bir telefon numarası girin")
    .required("Telefon numarası zorunludur"),
  city: yup
    .string()
    .required("Şehir zorunludur")
    .min(2, "En az 2 karakter olmalı"),
  dateOfBirth: yup
    .date()
    .required("Doğum tarihi zorunludur")
    .max(new Date(), "Doğum tarihi bugünden ileri olamaz"),
  gender: yup.string().required("Cinsiyet seçimi zorunludur"),
  university: yup.string().required("Üniversite seçimi zorunludur"),
  department: yup.string().required("Bölüm seçimi zorunludur"),
  graduationYear: yup
    .number()
    .required("Mezuniyet yılı zorunludur")
    .min(new Date().getFullYear() - 60, "Geçerli bir yıl giriniz")
    .max(new Date().getFullYear(), "Gelecek yıl olamaz"),
  language: yup.string().required("Yabancı dil seçimi zorunludur"),
  level: yup.string().required("Seviye seçimi zorunludur"),
  referenceName: yup
    .string()
    .required("İsim Soyisim zorunludur")
    .min(3, "En az 3 karakter olmalı"),
  referencePhone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Geçerli bir telefon numarası girin")
    .required("Telefon numarası zorunludur"),
  referenceEmail: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("E-posta zorunludur"),
  workPlace: yup
    .string()
    .required("Çalıştığınız yer zorunludur")
    .min(2, "En az 2 karakter olmalı"),
  startDate: yup
    .date()
    .required("Başlama tarihi zorunludur")
    .max(new Date(), "Başlama tarihi bugünün ileri olamaz"),
  endDate: yup
    .date()
    .nullable()
    .min(yup.ref("startDate"), "Bitiş tarihi başlama tarihinden önce olamaz"),
  position: yup
    .string()
    .required("Pozisyon zorunludur")
    .min(2, "En az 2 karakter olmalı"),
  coverLetter: yup
    .string()
    .required("Cover letter zorunludur")
    .min(20, "En az 20 karakter içermelidir"),
});
