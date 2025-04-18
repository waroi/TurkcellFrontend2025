'use client'
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import UserService from '@/services/userService';
import profileSchema from '@/schemas/profileSchema';
import { useAuthStore } from '@/stores/authStore';

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