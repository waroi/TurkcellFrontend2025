'use client'

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useWatchlistStore } from '@/store/watchlistStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const initializeAuth = useAuthStore((s) => s.initializeAuth);
  const user = useAuthStore((s) => s.user);
  const fetchUserWatchlist = useWatchlistStore((s) => s.fetchUserWatchlist);

  useEffect(() => {
    const unsubscribe = initializeAuth();
    return () => unsubscribe();
  }, [initializeAuth]);

  useEffect(() => {
    if (user) {
      fetchUserWatchlist();
    }
  }, [user, fetchUserWatchlist]);

  return <>{children}</>;
}
