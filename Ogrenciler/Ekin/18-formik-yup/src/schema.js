import * as yup from "yup";

export const initialValues = {
  name: "",
  surname: "",
  email: "",
  emailAgain: "",
  phone: "",
  id: "",
  university: "",
  major: "",
  grade: "",
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
    .min(3, "Lütfen minumun 3 karakter giriniz."),
  surname: yup
    .string()
    .required("Lütfen soyadınızı giriniz.")
    .min(3, "Lütfen minumun 3 karakter giriniz."),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz.")
    .required("Lütfen e-posta adresinizi giriniz."),
  emailAgain: yup
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
    .oneOf(
      universities.map((university) =>
        university.toLowerCase().replaceAll(" ", "-")
      ),
      "Lütfen üniversitenizi seçiniz."
    )
    .required("Lütfen üniversitenizi seçiniz."),
  major: yup
    .string()
    .oneOf(
      majors.map((major) => major.toLowerCase().replaceAll(" ", "-")),
      "Lütfen bölümünüzü seçiniz."
    )
    .required("Lütfen bölümünüzü seçiniz."),
  major: yup
    .string()
    .oneOf(["P", "1", "2", "3", "4", "G"], "Lütfen sınıfınızı seçiniz.")
    .required("Lütfen sınıfınızı seçiniz."),
});
