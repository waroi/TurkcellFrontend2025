import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("Bu alan zorunludur"),
  lastName: yup.string().required("Bu alan zorunludur"),
  addressFirst: yup
    .string()
    .min(10, "Lütfen minumun 10 karakter giriniz")
    .required("Bu alan zorunludurr"),
  adressSecond: yup
    .string()
    .min(10, "Lütfen minumun 10 karakter giriniz")
    .required("Bu alan zorunludurr"),
  city: yup.string().required("Bu alan zorunludur"),
  province: yup.string().required("Bu alan zorunludur"),
  postCode: yup.number().required("Bu alan zorunludur"),
  country: yup.string().required("Bu alan zorunludur"),
  phoneNumber: yup.number().required("Bu alan zorunludur"),
  email: yup.string().required("Bu alan zorunludur"),
  birthday: yup
    .date()
    .min(new Date(1995, 1, 1))
    .max(new Date(2007, 1, 1))
    .required("Bu alan zorunludur"),
  isTurkish: yup.string().required("Bu alan zorunludur"),
  university: yup.string().required("Bu alan zorunludur"),
  isGraduate: yup.string().required("Bu alan zorunludur"),
});
