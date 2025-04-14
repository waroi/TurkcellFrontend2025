import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth/hooks/useAuth';

export const useRedirectIfAuthenticated = (path = '/dashboard') => {
    const { user, loading } = useAuth()
    const router = useRouter()


    useEffect(() => {
        if (!loading && user) {
            router.push(path)
        }
    }, [user, loading, router, path])

    return { user, loading }
}