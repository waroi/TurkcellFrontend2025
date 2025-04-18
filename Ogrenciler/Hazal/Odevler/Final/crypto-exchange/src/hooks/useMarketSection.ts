import { useState, useEffect, ChangeEvent } from 'react';
import { CoinMarketCapService } from '@/services/api/coins/route';
import { useTranslations } from 'next-intl';

export interface CoinType {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
    };
  };
}

export const useMarketSection = () => {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const t = useTranslations('HomePage');
  const marketCap = t.raw('MarketCap');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await CoinMarketCapService.getLatestCoins(20);
        setCoins(data);
      } catch (err) {
        setError('CoinMarketCap API\'den veri alınamadı.');
        console.error('CoinMarketCap API hatası:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCoins();
  }, []);

  const handleToggleFavorite = (coinId: number) => {
    setFavorites((prev) =>
      prev.includes(coinId)
        ? prev.filter((id) => id !== coinId) // Favoriden çıkar
        : [...prev, coinId] // Favoriye ekle
    );
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return {
    marketCap,
    filteredCoins,
    favorites,
    searchTerm,
    isLoading,
    error,
    handleSearch,
    handleToggleFavorite,
  };
};