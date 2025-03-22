import * as yup from "yup";

export const initialValues = {
  "sign-in-email": "",
  "sign-in-password": "",
};

export const validationSchema = yup.object().shape({
  "sign-in-email": yup
    .string()
    .required("Lütfen e-posta adresinizi giriniz.")
    .email("Lütfen geçerli bir e-posta adresi giriniz."),
  "sign-in-password": yup.string().required("Lütfen şifrenizi giriniz."),
});
