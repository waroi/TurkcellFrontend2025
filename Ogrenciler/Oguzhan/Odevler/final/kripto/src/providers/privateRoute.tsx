"use client"
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { user, loading } = useAuthStore();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); 
    }
  }, [user, loading]);

  if (loading || !user) {
    return <div>Yükleniyor...</div>; 
  }

  return <>{children}</>;
};