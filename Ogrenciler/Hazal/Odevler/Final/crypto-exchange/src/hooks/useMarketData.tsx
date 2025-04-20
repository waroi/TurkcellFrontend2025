import { useEffect, useState } from 'react';
import { fetchMarketData, fetchCoinData } from '@/lib/api/market';
import { CryptoCurrency } from '@/types';
import { useStore } from '@/store/useStore';

export function useMarketData() {
  const [marketData, setMarketData] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const currentCurrency = useStore((state) => state.currentCurrency);

  const refreshData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchMarketData();
      setMarketData(data);
    } catch (err) {
      setError('Failed to fetch market data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCoinData = async (coinId: string) => {
    try {
      const data = await fetchCoinData(coinId);
      return data;
    } catch (err) {
      console.error(`Failed to fetch data for coin ${coinId}:`, err);
      return null;
    }
  };

  useEffect(() => {
    refreshData();
    
    // Her 60 saniyede bir veriyi güncelle
    const interval = setInterval(refreshData, 60000);
    return () => clearInterval(interval);
  }, [currentCurrency]);

  return {
    marketData,
    loading,
    error,
    refreshData,
    getCoinData,
  };
}