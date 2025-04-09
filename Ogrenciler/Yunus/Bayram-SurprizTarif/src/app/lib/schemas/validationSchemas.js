import * as Yup from "yup";

export const recipeFormValidationSchema = Yup.object({
    title: Yup.string()
        .max(50, "Başlık 50 karakterden az olmalıdır")
        .required("Başlık gereklidir"),
    description: Yup.string()
        .min(10, "Açıklama en az 10 karakter olmalıdır")
        .required("Açıklama gereklidir"),
    ingredients: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required("Malzeme adı gereklidir"),
            quantity: Yup.string().required("Miktar gereklidir"),
            unit: Yup.string().required("Birim gereklidir"),
        })
    ).min(1, "En az bir malzeme eklemelisiniz"),
    steps: Yup.array().of(
        Yup.object().shape({
            description: Yup.string().required("Adım açıklaması gereklidir"),
            order: Yup.number().required("Sıra numarası gereklidir"),
        })
    ).min(1, "En az bir adım eklemelisiniz"),
})