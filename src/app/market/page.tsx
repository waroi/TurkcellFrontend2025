'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CryptoData, TradeInfo } from '../types/crypto';
import { fetchTopCryptos } from '../services/api';
import { auth } from '../firebase/firebaseConfig';
import { getWatchlist, addToWatchlist } from '../services/firebase';
import MarketCoins from '../components/MarketCoins';
import { Footer } from '../components/Footer';
import TradeForm from '../components/TradeForm';
import Watchlist from '../components/Watchlist';
import Navbar from '../components/Navbar';
import { useTheme } from '../context/ThemeContext';

export default function MarketPage() {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [watchlist, setWatchlist] = useState<CryptoData[]>([]);
  const [selectedTradeInfo, setSelectedTradeInfo] = useState<TradeInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchTopCryptos();
        setCryptos(data);
      } catch (err) {
        setError('Failed to fetch crypto data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWatchlist = async () => {
      if (auth.currentUser) {
        const watchlistItems = await getWatchlist();
        const updatedWatchlist = cryptos.filter((crypto) =>
          watchlistItems.some((item) => item.cryptoId === crypto.id)
        );
        setWatchlist(updatedWatchlist);
      }
    };

    fetchWatchlist();
  }, [cryptos]);

  const handleAddToWatchlist = async (cryptoId: string) => {
    if (!auth.currentUser) {
      alert('Please log in to add to your watchlist.');
      return;
    }

    try {
      await addToWatchlist(cryptoId);
      const updatedWatchlist = await getWatchlist();
      setWatchlist(
        cryptos.filter((crypto) =>
          updatedWatchlist.some((item) => item.cryptoId === crypto.id)
        )
      );
    } catch (error) {
      console.error('Error adding to watchlist:', error);
    }
  };

  const handleTrade = (tradeInfo: TradeInfo) => {
    setSelectedTradeInfo(tradeInfo);
  };

  return (
    <div className={theme === 'dark' ? 'bg-dark text-light' : 'bg-light'}>
      <Navbar />
      <div className="container-fluid p-4">
        <div className="row g-4">
          <div className="col-lg-8">
            {isLoading && (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            {!isLoading && !error && (
              <div className="card h-100">
                <div className="card-body">
                  <MarketCoins
                    cryptos={cryptos}
                    onAddToWatchlist={handleAddToWatchlist}
                    onTrade={handleTrade}
                    isAuthenticated={!!auth.currentUser}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-4">
            <div className="row g-4">
              <div className='col-12'>
                <div className='card'>
                  <div className='card-body'>
                    <h2>Trade</h2>
                    {selectedTradeInfo ? (
                      <TradeForm tradeInfo={selectedTradeInfo} />
                    ) : (
                      <div className="alert alert-info">
                        Select a cryptocurrency to trade.
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h5 className="card-title mb-0">Watchlist</h5>
                      <Link href="/watchlist" className="btn btn-link text-decoration-none">View All</Link>
                    </div>
                    <Watchlist watchlist={watchlist} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}