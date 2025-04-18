import { useState } from 'react';
import { useFormik } from 'formik';
import { reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '@/firebase/firebaseConfig';
import UserService from '@/services/userService';
import * as Yup from 'yup';

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

export function useChangePasswordForm() {
    const [message, setMessage] = useState<string | null>(null)
    const formik = useFormik({
        initialValues: {
            oldPassword: '',
            newPassword: '',
            confirmPassword: '',
        },
        validationSchema: changePasswordSchema,
        onSubmit: async (values) => {
            const user = auth.currentUser
            if (!user || !user.email) {
                setMessage("Kullanıcı girişi yapılmamış veya e-posta bulunamadı")
                return
            }
            try {
                const credential = EmailAuthProvider.credential(user.email, values.oldPassword)
                await reauthenticateWithCredential(user, credential)

                const { success, error } = await UserService.changePassword(values.newPassword)
                if (success) {
                    setMessage("Şifre başarıyla değiştirildi")
                    formik.resetForm()
                    setTimeout(() => setMessage(null), 3000)
                } else {
                    setMessage(error || "Şifre değiştirilirken bir sorun oluştu")
                }
            } catch (error: any) {
                setMessage("Eski şifre yanlış veya işlem başarısız")
            }
        },
    })

    return { formik, message }
}
