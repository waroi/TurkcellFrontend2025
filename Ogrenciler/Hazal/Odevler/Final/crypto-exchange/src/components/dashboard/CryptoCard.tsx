'use client';

import { CryptoCurrency } from '@/types';
import { useStore } from '@/store/useStore';
import { useTranslations } from 'next-intl';

export function CryptoCard({ crypto }: { crypto: CryptoCurrency }) {
  const t = useTranslations('Dashboard');
  const currentCurrency = useStore((state) => state.currentCurrency);
  const { addToWatchlist, removeFromWatchlist, watchlist } = useStore();

  return (
    <div className="crypto-card">
      <div className="card-header">
        <img src={crypto.image} alt={crypto.name} width={40} height={40} />
        <div className="coin-name">
          <h4>{crypto.name}</h4>
          <span>{crypto.symbol.toUpperCase()}</span>
        </div>
        <button
          onClick={() => watchlist.includes(crypto.id) 
            ? removeFromWatchlist(crypto.id) 
            : addToWatchlist(crypto.id)}
          className="watchlist-btn"
        >
          {watchlist.includes(crypto.id) ? '★' : '☆'}
        </button>
      </div>
      
      <div className="price-info">
        <div className="current-price">
          {currentCurrency} {crypto.current_price.toLocaleString()}
        </div>
        <div className={`price-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
          {crypto.price_change_percentage_24h?.toFixed(2)}%
        </div>
      </div>
      
      <button className="trade-btn">{t('trade')}</button>
    </div>
  );
}