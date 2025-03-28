import * as yup from "yup";

const personalInfoSchema = yup.object({
  personal: yup.object({
    fullname: yup.string().required("Adınız ve soyadınızı giriniz"),
    email: yup
      .string()
      .email("Geçerli bir email giriniz")
      .required("Email girmek zorunludur"),
    phone: yup.string().required("Telefon numaranızı giriniz"),
    birthDate: yup.date().required("Doğum tarihinizi giriniz"),
    address: yup.string().required("Adresinizi giriniz"),
  }),
});

const educationSchema = yup.object({
  education: yup.object({
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
});

const experienceSchema = yup.object({
  experience: yup.object({
    years: yup.number().positive("Pozitif değer giriniz"),
    currentCompany: yup.string().max(50, "50 karakterden fazla giremezsiniz"),
    position: yup.string().max(50, "50 karakterden fazla giremezsiniz"),
  }),
});

const skillsSchema = yup.object({
  skills: yup.object({
    languages: yup.object(),
    programmingLanguages: yup.object(),
  }),
});

const additionalSchema = yup.object({
  expectedSalary: yup
    .number()
    .positive("Lütfen pozitif bir değer giriniz")
    .required("Lütfen maaş beklentinizi giriniz"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});

export const stepSchemas = [
  personalInfoSchema,
  educationSchema,
  experienceSchema,
  skillsSchema,
  additionalSchema,
];
