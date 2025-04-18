import React from 'react';
import { CryptoData } from '../types/crypto';
import { useTheme } from '../context/ThemeContext';

interface Props {
  watchlist: CryptoData[];
  onRemoveFromWatchlist?: (cryptoId: string) => void;
}

const Watchlist: React.FC<Props> = ({ watchlist, onRemoveFromWatchlist }) => {
  const { theme } = useTheme();

  const getCryptoLogo = (symbol: string) => {
    const lowerSymbol = symbol.toLowerCase();
    return `https://cryptoicon-api.pages.dev/api/icon/${lowerSymbol}`;
  };

  if (watchlist.length === 0) {
    return (
      <div className="alert alert-info">
        Your watchlist is empty. Add some cryptocurrencies to track them!
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className={`table table-hover ${theme === 'dark' ? 'table-dark' : ''}`}>
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            {onRemoveFromWatchlist && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {watchlist.map((crypto) => (
            <tr key={crypto.id}>
              <td>
                <img
                  src={getCryptoLogo(crypto.symbol.replace('USDT', ''))}
                  alt={crypto.name}
                  width={32}
                  height={32}
                  onError={(e) => (e.currentTarget.src = '/fallback.png')}
                />
              </td>
              <td>{crypto.name}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td className={crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              {onRemoveFromWatchlist && (
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onRemoveFromWatchlist(crypto.id)}
                  >
                    Remove
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;