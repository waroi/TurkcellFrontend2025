'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface GuestRouteProps {
  children: React.ReactNode;
}

export default function GuestRoute({ children }: GuestRouteProps) {
  const { isLoggedIn, initialLoading } = useAuth();
  const router = useRouter();

  if (!initialLoading && isLoggedIn) {
    router.replace('/');
    return null;
  }

  if (initialLoading) return null;

  return <>{children}</>;
}
