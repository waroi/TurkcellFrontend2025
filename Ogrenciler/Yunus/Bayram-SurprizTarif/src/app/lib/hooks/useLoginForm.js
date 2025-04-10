import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth/hooks/useAuth';

export const useLoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { login } = useAuth()
    const router = useRouter()

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')

        try {
            await login(email, password)
            router.push('/dashboard')
        } catch (err) {
            setError(err.message || 'Giriş yaparken bir hata olluştu')
        }
    }

    return {
        email,
        password,
        error,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    }
}