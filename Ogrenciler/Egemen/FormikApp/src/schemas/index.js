import * as yup from "yup";

export const basicSchema = yup.object().shape({
  fullname: yup.string().required("Adınız ve soyadınızı giriniz"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  phone: yup.string().required("Telefon numaranızı giriniz"),
  birthDate: yup.date().required("Doğum tarihinizi giriniz"),
  address: yup.string().required("Adresinizi giriniz"),
  education: yup.object().shape({
    university: yup
      .string()
      .oneOf(
        ["bogazici", "gsu", "odtu", "itu", "hacettepe", "bilkent"],
        "Lütfen üniversitenizi seçiniz"
      )
      .required("Lütfen üniversitenizi seçiniz"),
    department: yup.string().required("Bölümünüzü giriniz"),
    graduationYear: yup.number().required("Mezuniyet yılınızı giriniz"),

    gpa: yup
      .number()
      .positive("Lütfen pozitif bir değer giriniz")
      .max(4, "GPA 0-4 arasında olmalıdır")
      .required("Lütfen GPA puanınızı giriniz"),
  }),
  experience: yup.object().shape({
    years: yup.number().positive("Pozitif değer giriniz"),
    currentCompany: yup.string().max(50, "50 karakterden fazla giremezsiniz"),
    position: yup.string().max(50, "50 karakterden fazla giremezsiniz"),
  }),
  skills: yup.object().shape({
    languages: yup.object(),
    programmingLanguages: yup.object(),
  }),
  expectedSalary: yup
    .number()
    .positive("Litfen pozitif bir değer giriniz")
    .required("Lüften maaş beklentinizi giriniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
