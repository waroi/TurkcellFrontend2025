'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';
import { useTranslations } from 'next-intl';
import './ProtectedRoute.scss'

interface ProtectedRouteProps {
    children: React.ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user, loading } = useAuthStore()
    const messages = useTranslations("messages")
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
        }
    }, [user, loading, router])

    if (loading) {
        return <div className='protected-loading'>
            {messages.raw("loading")}
        </div>
    }

    if (!user) {
        return null
    }

    return <>{children}</>
}

export default ProtectedRoute