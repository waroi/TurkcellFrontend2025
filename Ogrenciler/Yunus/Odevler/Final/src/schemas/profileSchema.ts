import * as Yup from "yup";

const profileSchema = Yup.object({
    name: Yup.string()
        .required("İsim zorunlu")
        .matches(/^[a-zA-Z\s]+$/, "İsim sadece harf içermeli"),
    surName: Yup.string()
        .required("Soyisim zorunlu")
        .matches(/^[a-zA-Z\s]+$/, "Soyisim sadece harf içermeli"),
    email: Yup.string()
        .email("Geçersiz e-posta formatı")
        .required("E-posta zorunlu"),
    phoneNumber: Yup.string()
        .required("Telefon numarası zorunlu")
        .matches(/^[0-9]+$/, "Telefon numarası sadece rakam içermeli")
        .min(10, "Telefon numarası en az 10 haneli olmalı"),
    countryCode: Yup.string()
        .required("Ülke kodu zorunlu")
        .oneOf(["+1", "+2", "+3", "+4"], "Geçersiz ülke kodu"),
    country: Yup.string()
        .required("Ülke seçimi zorunlu")
        .oneOf(
            ["South Korea (+82)", "United States (+1)", "Japan (+81)", "China (+86)"],
            "Geçersiz ülke seçimi"
        ),
    gender: Yup.string()
        .required("Cinsiyet seçimi zorunlu")
        .oneOf(["male", "female"], "Geçersiz cinsiyet seçimi"),
    date: Yup.string()
        .required("Doğum tarihi zorunlu")
        .matches(
            /^\d{4}-\d{2}-\d{2}$/,
            "Doğum tarihi YYYY-MM-DD formatında olmalı"
        ),
})

export default profileSchema