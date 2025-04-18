'use client'

import RegisterPage from '@/pages/RegisterPage'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Register = () => {
    const { user, loading } = useAuthStore()
    const router = useRouter()

    useEffect(() => {
        if (!loading && user) {
            router.push("/dashboard")
        }
    }, [user, loading, router])

    if (loading) {
        return <div>Yükleniyor...</div>
    }

    if (user) return null

    return (
        <>
            <RegisterPage />
        </>

    )
}

export default Register