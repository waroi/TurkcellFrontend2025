import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email zorunludur"),
  firstName: yup
    .string()
    .min(2, "İsim en az 2 karakter olmalı")
    .required("İsim zorunludur"),
  lastName: yup
    .string()
    .min(2, "Soyisim en az 2 karakter olmalı")
    .required("Soyisim zorunludur"),
  phone: yup
    .string()
    .matches(/^[0-9]{10,15}$/, "Geçerli bir telefon numarası giriniz")
    .required("Telefon numarası zorunludur"),
  birthDate: yup.date().required("Doğum tarihi zorunludur"),
  country: yup.string().required("Lütfen ülke seçiniz"),
  city: yup.string().required("Lütfen şehir seçiniz"),
  university: yup.string().required("Lütfen üniversite seçiniz"),
  department: yup.string().required("Lütfen bölüm seçiniz"),
  graduationStatus: yup.boolean(),
  graduationYear: yup.string().when("graduationStatus", {
    is: true,
    then: (schema) => schema.required("Mezuniyet yılınızı giriniz"),
    otherwise: (schema) => schema.notRequired(),
  }),
  gpa: yup
    .number()
    .positive("Geçerli bir ortalama giriniz")
    .max(4.0, "Maksimum 4.0 olabilir"),
  linkedin: yup.string().url("Geçerli bir URL giriniz"),
  summary: yup.string().max(500, "Maksimum 500 karakter girebilirsiniz"),
  skills: yup.array().of(yup.string()).min(1, "En az bir yetenek seçmelisiniz"),
  experience: yup.string().max(1000, "Maksimum 1000 karakter girebilirsiniz"),
  projects: yup.string().max(1000, "Maksimum 1000 karakter girebilirsiniz"),
});
