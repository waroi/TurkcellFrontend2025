'use client';

import { CryptoCurrency } from '@/types';
import { useStore } from '@/store/useStore';
import { useTranslations } from 'next-intl';

export function MarketTable({ data }: { data: CryptoCurrency[] }) {
  const t = useTranslations('Markets');
  const currentCurrency = useStore((state) => state.currentCurrency);
  const { addToWatchlist, removeFromWatchlist, watchlist } = useStore();

  return (
    <div className="market-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>{t('asset')}</th>
            <th>{t('price')}</th>
            <th>{t('change24h')}</th>
            <th>{t('marketCap')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((crypto) => (
            <tr key={crypto.id}>
              <td>
                <button 
                  onClick={() => watchlist.includes(crypto.id) 
                    ? removeFromWatchlist(crypto.id) 
                    : addToWatchlist(crypto.id)}
                  className="watchlist-btn"
                >
                  {watchlist.includes(crypto.id) ? '★' : '☆'}
                </button>
              </td>
              <td>
                <div className="coin-info">
                  <img src={crypto.image} alt={crypto.name} width={24} height={24} />
                  <span>{crypto.name}</span>
                  <span className="symbol">{crypto.symbol.toUpperCase()}</span>
                </div>
              </td>
              <td>
                {currentCurrency} {crypto.current_price.toLocaleString()}
              </td>
              <td className={crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>
                {crypto.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td>
                {currentCurrency} {crypto.market_cap.toLocaleString()}
              </td>
              <td>
                <button className="trade-btn">{t('trade')}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}