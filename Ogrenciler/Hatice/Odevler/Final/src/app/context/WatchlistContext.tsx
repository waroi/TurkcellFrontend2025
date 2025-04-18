'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CryptoData } from '../types/crypto';
import { auth } from '../firebase/firebaseConfig';
import { getWatchlist, addToWatchlist as addToFirestore, removeFromWatchlist as removeFromFirestore } from '../services/firebase';

interface WatchlistContextType {
  watchlist: CryptoData[];
  addToWatchlist: (crypto: CryptoData) => Promise<void>;
  removeFromWatchlist: (cryptoId: string) => Promise<void>;
}

const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined);

export const WatchlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [watchlist, setWatchlist] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (auth.currentUser) {
        try {
          const items = await getWatchlist();
          setWatchlist(items as unknown as CryptoData[]);
        } catch (error) {
          console.error('Error fetching watchlist:', error);
        }
      }
    };

    fetchWatchlist();
  }, []);

  const addToWatchlist = async (crypto: CryptoData) => {
    try {
      await addToFirestore(crypto.id);
      setWatchlist(prev => [...prev, crypto]);
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  const removeFromWatchlist = async (cryptoId: string) => {
    try {
      await removeFromFirestore(cryptoId);
      setWatchlist(prev => prev.filter(c => c.id !== cryptoId));
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error('useCryptoWatchlist must be used within a WatchlistProvider');
  }
  return context;
};
