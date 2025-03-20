import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("İsim girmek zorunludur"),
  surname: yup.string().required("Soyisim girmek zorunludur"),
  birthyear: yup
    .date()
    .max(new Date(), "Doğum tarihi bugünden büyük olamaz")
    .required("Doğum yılı zorunludur"),
  gender: yup.string().required("Cinsiyet girmek zorunludur"),
  phonenumber: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Lütfen geçerli bir telefon numarası giriniz")
    .required("Telefon numarası girmek zorunludur"),
  address: yup.string().required("Adres girmek zorunludur"),
  education: yup
    .array()
    .of(yup.string().required("Eğitim bilgisi boş olamaz"))
    .min(1, "En az bir eğitim bilgisi girmelisiniz")
    .required("Eğitim bilgisi girmek zorunludur"),
  foreignlanguage: yup
    .array()
    .of(yup.string().required("Yabancı dil bilgisi boş olamaz"))
    .min(1, "En az bir yabancı dil girmelisiniz")
    .required("Yabancı dil bilgisi girmek zorunludur"),
  experience: yup
    .array()
    .of(yup.string().required("Deneyim bilgisi boş olamaz"))
    .min(1, "En az bir deneyim bilgisi girmelisiniz")
    .required("Deneyim bilgisi girmek zorunludur"),
  technologies: yup
    .array()
    .of(yup.string().required("Teknoloji bilgisi boş olamaz"))
    .min(1, "En az bir teknoloji bilgisi girmelisiniz")
    .required("Teknoloji bilgisi girmek zorunludur"),
  salary: yup
    .number()
    .positive("Lütfen geçerli bir maaş giriniz")
    .integer("Lütfen tam sayı olarak giriniz")
    .required("Maaş bilgisi girmek zorunludur"),
  projects: yup
    .array()
    .of(yup.string().required("Proje bilgisi boş olamaz"))
    .min(1, "En az bir proje bilgisi girmelisiniz")
    .required("Proje bilgisi girmek zorunludur"),
  certificates: yup
    .array()
    .of(yup.string().required("Sertifika bilgisi boş olamaz"))
    .min(1, "En az bir sertifika bilgisi girmelisiniz")
    .required("Sertifika bilgisi girmek zorunludur"),
  volunteerwork: yup
    .array()
    .of(yup.string().required("Gönüllü çalışma bilgisi boş olamaz"))
    .min(1, "En az bir gönüllü çalışma bilgisi girmelisiniz")
    .required("Gönüllü çalışma bilgisi girmek zorunludur"),
  socialmedia: yup
    .array()
    .of(yup.string().url("Lütfen geçerli bir URL giriniz"))
    .min(1, "En az bir sosyal medya bağlantısı girmelisiniz")
    .required("Sosyal medya bilgisi girmek zorunludur"),
  references: yup
    .array()
    .of(yup.string().required("Referans bilgisi boş olamaz"))
    .min(1, "En az bir referans bilgisi girmelisiniz")
    .required("Referans bilgisi girmek zorunludur"),
  motivation: yup.string().required("Motivasyon bilgisi girmek zorunludur"),
  email: yup
    .string()
    .email("Lütfen geçerli bir e-posta adresi giriniz")
    .required("E-posta girmek zorunludur"),
});
