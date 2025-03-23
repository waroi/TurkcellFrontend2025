import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useUser } from '../../context/UserContext';
import AuthService from '../../services/AuthService';

export const useAdminLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const { user } = useUser()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const loginResponse = await AuthService.signIn(email, password)

            if (loginResponse.success) {
                alert("Giriş başarılı!")
                navigate('/')
            }
        } catch (err) {
            setError("Giriş başarısız! Lütfen bilgilerinizi kontrol edin.")
        }
    }

    useEffect(() => {
        if (user) {
            navigate('/admin/applications')
        }
    }, [user, navigate])

    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleLogin
    }
}