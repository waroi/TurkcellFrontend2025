import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  nickname: yup
    .string()
    .min(3, "Nickname must be at least 3 characters")
    .required("Nickname is required"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
    .required("Phone number is required"),
  country: yup
    .string()
    .required("Country selection is required"),
  uid: yup
    .string()
    .required("UID code is required"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required"),
});

export const profileSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  nickname: yup.string().required("Required"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number")
    .required("Required"),
  country: yup.string().required("Required"),
});

export const passwordSchema = yup.object().shape({
  oldPassword: yup.string().required("Required"),
  newPassword: yup
    .string()
    .min(6, "At least 6 characters")
    .required("Required"),
});