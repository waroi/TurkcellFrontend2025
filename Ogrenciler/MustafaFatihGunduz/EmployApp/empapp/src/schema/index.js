import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Bu alan zorunludur"),
  lastName: yup.string().required("Bu alan zorunludur"),
  adressFirst: yup
    .string()
    .min(10, "Lütfen minimum 10 karakter giriniz")
    .required("Bu alan zorunludur"),
  adressSecond: yup
    .string()
    .min(10, "Lütfen minimum 10 karakter giriniz")
    .required("Bu alan zorunludur"),
  city: yup.string().required("Bu alan zorunludur"),
  province: yup.string().required("Bu alan zorunludur"),
  postCode: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Bu alan zorunludur"),
  country: yup.string().required("Bu alan zorunludur"),
  phoneNumber: yup
    .number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .required("Bu alan zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Bu alan zorunludur"),
  birthday: yup
    .date()
    .min(new Date(1995, 0, 1))
    .max(new Date(2007, 0, 1))
    .required("Bu alan zorunludur"),
  isTurkish: yup.boolean().required("Bu alan zorunludur"),
  university: yup.string().required("Bu alan zorunludur"),
  isGraduate: yup.boolean().required("Bu alan zorunludur"),
});
