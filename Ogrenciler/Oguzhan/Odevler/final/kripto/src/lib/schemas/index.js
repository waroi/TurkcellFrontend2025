import * as yup from "yup"

export const registerSchema = yup.object().shape({

    name: yup
        .string()
        .min(3, "Lütfen minumun 3 karakter giriniz")
        .required("Lütfen adınızı giriniz."),

    surname: yup
        .string()
        .required("Lütfen adınızı giriniz."),

    email: yup
        .string()
        .email('Geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),

    password: yup
        .string()
        .min(6, 'Şifre en az 6 karakter olmalıdır')
        .required('Şifre zorunludur'),
});

export const loginSchema = yup.object().shape({

    email: yup
        .string()
        .email('Geçerli bir email adresi giriniz')
        .required('Email adresi zorunludur'),

    password: yup
        .string()
        .min(6, 'Şifre en az 6 karakter olmalıdır')
        .required('Şifre zorunludur'),
});