'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function AuthWrapper({
  children,
  requiredAuth = true,
}: {
  children: React.ReactNode;
  requiredAuth?: boolean;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (requiredAuth && !user) {
        router.push('/login');
      } else if (!requiredAuth && user) {
        router.push('/dashboard');
      }
    }
  }, [user, loading, requiredAuth, router]);

  if (loading) {
    return <LoadingSpinner fullPage />;
  }

  if ((requiredAuth && user) || (!requiredAuth && !user)) {
    return <>{children}</>;
  }

  return null;
}