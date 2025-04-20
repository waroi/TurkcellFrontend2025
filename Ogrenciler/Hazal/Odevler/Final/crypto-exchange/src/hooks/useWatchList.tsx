import { useEffect, useState } from 'react';
import { useStore } from '@/store/useStore';
import { fetchMarketData } from '@/lib/api/market';
import { CryptoCurrency } from '@/types';

export function useWatchlist() {
  const watchlist = useStore((state) => state.watchlist);
  const addToWatchlist = useStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useStore((state) => state.removeFromWatchlist);
  const [watchlistData, setWatchlistData] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);

  const toggleWatchlist = (coinId: string) => {
    if (watchlist.includes(coinId)) {
      removeFromWatchlist(coinId);
    } else {
      addToWatchlist(coinId);
    }
  };

  const loadWatchlistData = async () => {
    if (watchlist.length === 0) {
      setWatchlistData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const marketData = await fetchMarketData();
      const filteredData = marketData.filter((coin) =>
        watchlist.includes(coin.id)
      );
      setWatchlistData(filteredData);
    } catch (error) {
      console.error('Error loading watchlist data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWatchlistData();
  }, [watchlist]);

  return {
    watchlist,
    watchlistData,
    loading,
    toggleWatchlist,
    refresh: loadWatchlistData,
    isInWatchlist: (coinId: string) => watchlist.includes(coinId),
  };
}