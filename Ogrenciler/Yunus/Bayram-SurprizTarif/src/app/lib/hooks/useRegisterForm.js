import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth/hooks/useAuth';

export const useRegisterForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const { register } = useAuth()
    const router = useRouter()

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            setError('Şifreler eşleşmiyor')
            return;
        }

        try {
            await register(email, password)
            router.push('/dashboard')
        } catch (err) {
            setError(err.message || 'Kayıt olurken bir hata oluştu')
        }
    }

    return {
        email,
        password,
        confirmPassword,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPasswordChange,
        handleSubmit
    }
}