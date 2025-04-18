'use client'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import UserService from '@/services/userService';
import { useAuthStore } from '@/stores/authStore';
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

export const useUserProfile = () => {
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState<string | null>(null)
    const { user } = useAuthStore()

    const formik = useFormik({
        initialValues: {
            name: '',
            surName: '',
            email: '',
            phoneNumber: '',
            countryCode: '+1',
            country: 'United States (+1)',
            gender: 'male',
            date: '',
        },
        validationSchema: profileSchema,
        onSubmit: async (values) => {
            if (!user) {
                setMessage("Kullanıcı girişi yapılmamış");
                return
            }

            const updateData = {
                nickname: `${values.name} ${values.surName}`.trim(),
                email: values.email,
                phone: values.phoneNumber,
                uidCode: values.countryCode,
                country: values.country,
                gender: values.gender,
                dateOfBirth: values.date,
            }

            const { success, error } = await UserService.updateUserProfile(user.uid, updateData)
            if (success) {
                setMessage("Profil başarıyla güncellendi")
                setTimeout(() => setMessage(null), 3000)
            } else {
                setMessage(error || "Profil güncellenirken bir sorun oluştu")
            }
        },
    })

    useEffect(() => {
        const loadUserData = async () => {
            if (user) {
                const { userData } = await UserService.getUserData(user.uid)
                if (userData) {
                    formik.setValues({
                        name: userData.nickname?.split(' ')[0] || '',
                        surName: userData.nickname?.split(' ')[1] || '',
                        email: userData.email || '',
                        phoneNumber: userData.phone || '',
                        countryCode: userData.uidCode || '+1',
                        country: userData.country || 'United States (+1)',
                        gender: userData.gender || 'male',
                        date: userData.dateOfBirth || '',
                    })
                } else {
                    setMessage("Böyle bir kullanıcı verisi yok")
                }
            } else {
                setMessage("Kullanıcı girişi yapılmamış")
            }
            setLoading(false)
        }

        loadUserData()
    }, [user])

    return {
        formik,
        loading,
        message,
        setMessage
    }
}