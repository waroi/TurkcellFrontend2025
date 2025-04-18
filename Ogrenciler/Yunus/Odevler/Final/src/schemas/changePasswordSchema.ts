import * as Yup from "yup";

const changePasswordSchema = Yup.object({
    oldPassword: Yup.string()
        .required("Eski şifre zorunlu")
        .min(8, "Eski şifre en az 8 karakter olmalı"),
    newPassword: Yup.string()
        .required("Yeni şifre zorunlu")
        .min(8, "Yeni şifre en az 8 karakter olmalı")
        .matches(/[A-Z]/, "Yeni şifre en az bir büyük harf içermeli")
        .matches(/[0-9]/, "Yeni şifre en az bir rakam içermeli")
        .matches(/[!@#$%^&*]/, "Yeni şifre en az bir özel karakter içermeli"),
    confirmPassword: Yup.string()
        .required("Şifre onayı zorunlu")
        .oneOf([Yup.ref("newPassword")], "Şifreler eşleşmiyor"),
})

export default changePasswordSchema