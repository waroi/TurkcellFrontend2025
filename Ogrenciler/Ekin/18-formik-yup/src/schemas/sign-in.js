import * as yup from "yup";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .required("Lütfen e-posta adresinizi giriniz.")
    .email("Lütfen geçerli bir e-posta adresi giriniz."),
  password: yup.string().required("Lütfen şifrenizi giriniz."),
});
