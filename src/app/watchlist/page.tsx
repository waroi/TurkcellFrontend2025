'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useWatchlist } from '../context/WatchlistContext';
import { getWatchlist } from '../services/firebase';
import { fetchTopCryptos } from '../services/api';
import Watchlist from '../components/Watchlist';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { CryptoData } from '../types/crypto';

export default function WatchlistPage() {
  const { isAuthenticated } = useAuth();
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [removeStatus, setRemoveStatus] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        try {
          setIsLoading(true);
          setError(null);
          const watchlistItems = await getWatchlist();
          const allCryptos = await fetchTopCryptos();
          const watchlistCryptos = allCryptos.filter(crypto =>
            watchlistItems.some(item => item.cryptoId === crypto.id)
          );
          setCryptoData(watchlistCryptos);
        } catch (err) {
          console.error('Error fetching watchlist:', err);
          setError('Failed to load watchlist data. Please try again later.');
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [isAuthenticated, removeStatus]);

  const handleRemoveFromWatchlist = async (cryptoId: string) => {
    try {
      setRemoveStatus('removing');
      await removeFromWatchlist(cryptoId);
      const updatedCryptoData = cryptoData.filter(crypto => crypto.id !== cryptoId);
      setCryptoData(updatedCryptoData);
      setRemoveStatus('success');
    } catch (err) {
      console.error('Error removing from watchlist:', err);
      setError('Failed to remove item from watchlist. Please try again.');
      setRemoveStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <div className={`min-vh-100 d-flex justify-content-center watchlist-page ${theme}`}>
        <div className="container py-5">
          <h1 className="text-center mb-4">Your Watchlist</h1>
          {error && <div className="alert alert-danger">{error}</div>}
          {isLoading ? (
            <div className="text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : isAuthenticated ? (
            <div className="table-responsive">
              <Watchlist
                watchlist={cryptoData}
                onRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </div>
          ) : (
            <div className="alert alert-warning text-center">
              Please login to view your watchlist.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
