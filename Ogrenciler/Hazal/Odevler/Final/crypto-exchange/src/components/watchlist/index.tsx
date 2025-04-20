'use client';

import { useStore } from '@/store/useStore';
import { fetchMarketData } from '@/lib/api/market';
import { useEffect, useState } from 'react';
import { CryptoCurrency } from '@/types';
import { useTranslations } from 'next-intl';

export function WatchlistManager() {
  const t = useTranslations('Watchlist');
  const watchlist = useStore((state) => state.watchlist);
  const addToWatchlist = useStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useStore((state) => state.removeFromWatchlist);
  const [coins, setCoins] = useState<CryptoCurrency[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const marketData = await fetchMarketData();
      setCoins(marketData);
    };
    loadData();
  }, []);

  const toggleWatchlist = (coinId: string) => {
    if (watchlist.includes(coinId)) {
      removeFromWatchlist(coinId);
    } else {
      addToWatchlist(coinId);
    }
  };

  return (
    <div className="watchlist-manager">
      <h2>{t('title')}</h2>
      <div className="watchlist-items">
        {coins
          .filter((coin) => watchlist.includes(coin.id))
          .map((coin) => (
            <div key={coin.id} className="watchlist-item">
              <img src={coin.image} alt={coin.name} width={24} height={24} />
              <span>{coin.name}</span>
              <span className="price">${coin.current_price}</span>
              <button onClick={() => toggleWatchlist(coin.id)}>
                {t('remove')}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}