'use client'

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import { useWatchlistStore } from '@/store/watchlistStore';
import { useTradeStore } from '@/store/tradeStore';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const initializeAuth = useAuthStore((s) => s.initializeAuth);
  const user = useAuthStore((s) => s.user);
  const fetchUserWatchlist = useWatchlistStore((s) => s.fetchUserWatchlist);
  const fetchTradesAndBalance = useTradeStore((s) => s.fetchTradesAndBalance);

  useEffect(() => {
    const unsubscribe = initializeAuth();
    return () => unsubscribe();
  }, [initializeAuth]);

  useEffect(() => {
    if (user) {
      fetchUserWatchlist();
      fetchTradesAndBalance();
    }
  }, [user, fetchUserWatchlist, fetchTradesAndBalance]);

  return <>{children}</>;
}
