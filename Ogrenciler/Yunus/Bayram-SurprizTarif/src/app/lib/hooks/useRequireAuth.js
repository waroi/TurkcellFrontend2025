'use client'
import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/auth/hooks/useAuth';

export const useRequireAuth = (path = '/login') => {
    const { user, loading } = useAuth()
    const router = useRouter()
    const pathname = usePathname()

    console.log(pathname)
    useEffect(() => {
        if (!loading && !user && pathname !== "/recipes") {
            router.push(path)
        }
    }, [user, loading, router, path])

    return { user, loading }
}