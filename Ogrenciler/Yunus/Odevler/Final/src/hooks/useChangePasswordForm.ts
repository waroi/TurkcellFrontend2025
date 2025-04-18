import { useState } from 'react';
import { useFormik } from 'formik';
import { reauthenticateWithCredential, EmailAuthProvider } from 'firebase/auth';
import { auth } from '@/services/firebase';
import UserService from '@/services/userService';
import changePasswordSchema from '@/schemas/changePasswordSchema';

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
