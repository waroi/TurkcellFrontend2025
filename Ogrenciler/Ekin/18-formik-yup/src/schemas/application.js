import * as yup from "yup";
import { mapOneOf } from "@/util/map";

export const initialValues = {
  name: "",
  surname: "",
  email: "",
  "email-again": "",
  phone: "",
  id: "",
  university: "",
  major: "",
  grade: "",
  "preference-first": "",
  "preference-second": "",
  "preference-third": "",
  "terms-and-conditions": false,
  kvkk: false,
};

export const universities = [
  "Boğaziçi Üniversitesi",
  "Orta Doğu Teknik Üniversitesi",
  "İstanbul Teknik Üniversitesi",
  "Koç Üniversitesi",
  "Sabancı Üniversitesi",
  "Hacettepe Üniversitesi",
  "Ankara Üniversitesi",
  "İstanbul Üniversitesi",
  "Yıldız Teknik Üniversitesi",
  "Ege Üniversitesi",
  "İzmir Yüksek Teknoloji Enstitüsü",
  "Bilkent Üniversitesi",
  "Gazi Üniversitesi",
  "Selçuk Üniversitesi",
  "Çankaya Üniversitesi",
  "Marmara Üniversitesi",
  "Bozok Üniversitesi",
  "Akdeniz Üniversitesi",
  "Kadir Has Üniversitesi",
];

export const majors = [
  "Bilgisayar Mühendisliği",
  "Elektrik-Elektronik Mühendisliği",
  "Makine Mühendisliği",
  "İnşaat Mühendisliği",
  "Endüstri Mühendisliği",
  "İşletme",
  "Ekonomi",
  "Psikoloji",
  "Tıp",
  "Eczacılık",
  "Hukuk",
  "Mimarlık",
  "Sosyoloji",
  "Kimya Mühendisliği",
  "Gıda Mühendisliği",
  "İletişim Fakültesi",
  "Siyaset Bilimi ve Kamu Yönetimi",
  "İngilizce Öğretmenliği",
  "İstatistik",
  "Matematik",
];

export const grades = [
  "Hazırlık",
  "1. Sınıf",
  "2. Sınıf",
  "3. Sınıf",
  "4. Sınıf",
  "Mezun",
];

export const preferences = [
  "Teknoloji & Bilgi Sistemleri",
  "İnsan Kaynakları",
  "İş Geliştirme & Strateji",
  "Risk & Süreç Yönetimi",
  "Müşteri & Pazarlama Yönetimi",
];

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
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Lütfen e-posta adresinizi giriniz."),
  "email-again": yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Lütfen e-posta adresinizi giriniz.")
    .oneOf([yup.ref("email"), null], "E-posta adresleri eşleşmelidir."),
  phone: yup
    .string()
    .required("Lütfen telefon numaranızı giriniz.")
    .matches(/^\d+$/, "Telefon numarası sadece sayılardan oluşmalıdır.")
    .length(11, "Telefon numarası 11 haneli olmalıdır."),
  id: yup
    .string()
    .required("Lütfen TC kimlik numaranızı giriniz.")
    .matches(/^\d+$/, "Kimlik numarası sadece sayılardan oluşmalıdır.")
    .length(11, "Kimlik numarası 11 haneli olmalıdır."),
  university: yup
    .string()
    .oneOf(mapOneOf(universities), "Lütfen üniversitenizi seçiniz.")
    .required("Lütfen üniversitenizi seçiniz."),
  major: yup
    .string()
    .oneOf(mapOneOf(majors), "Lütfen bölümünüzü seçiniz.")
    .required("Lütfen bölümünüzü seçiniz."),
  grade: yup
    .string()
    .oneOf(mapOneOf(grades), "Lütfen sınıfınızı seçiniz.")
    .required("Lütfen sınıfınızı seçiniz."),
  "preference-first": yup
    .string()
    .oneOf(mapOneOf(preferences), "Lütfen 1. tercihinizi seçiniz.")
    .required("Lütfen 1. tercihinizi seçiniz."),
  "preference-second": yup
    .string()
    .oneOf(mapOneOf(preferences), "Lütfen 2. tercihinizi seçiniz.")
    .required("Lütfen 2. tercihinizi seçiniz."),
  "preference-third": yup
    .string()
    .oneOf(mapOneOf(preferences), "Lütfen 3. tercihinizi seçiniz.")
    .required("Lütfen 3. tercihinizi seçiniz."),
  "terms-and-conditions": yup
    .boolean()
    .oneOf([true], "Aydınlatma metnini kabul ediniz."),
  kvkk: yup.boolean().oneOf([true], "KVKK metnini kabul ediniz."),
});
