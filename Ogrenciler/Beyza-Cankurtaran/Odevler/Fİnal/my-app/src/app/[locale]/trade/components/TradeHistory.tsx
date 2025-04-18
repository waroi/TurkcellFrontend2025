import React from 'react';
import styles from '../styles/Trading.module.css';
import { CryptoCurrency } from '../types/crypto';
import { useTheme } from '../../../context/ThemeContext';
interface TradeHistoryProps {
  cryptocurrencies: CryptoCurrency[];
  loading: boolean;
  onSelectCoin: (coinId: string) => void;
}

const TradeHistory: React.FC<TradeHistoryProps> = ({
  cryptocurrencies,
  loading,
  onSelectCoin
}) => {
  const { theme } = useTheme();
  if (loading) {
    return (
      <div className={`card p-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={`${styles.cryptoPriceCardsContainer} rounded p-1 mb-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3>Trade History</h3>
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="timeframeDropdown" data-bs-toggle="dropdown">
            24h
          </button>
          <ul className="dropdown-menu dropdown-menu-dark">
            <li><a className="dropdown-item" href="#">24h</a></li>
            <li><a className="dropdown-item" href="#">7d</a></li>
            <li><a className="dropdown-item" href="#">30d</a></li>
          </ul>
        </div>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className={`table table-hover mb-0  ${theme === 'dark' ? 'table-dark text-white' : 'table-white text-dark'}`}>
            <thead>
              <tr>
                <th scope="col">Coin Name</th>
                <th scope="col">Coin Price</th>
                <th scope="col">24h %</th>
                <th scope="col">24h High</th>
                <th scope="col">24h Low</th>
                <th scope="col">Chart</th>
              </tr>
            </thead>
            <tbody>
              {cryptocurrencies.map((crypto) => (
                <tr key={crypto.id} onClick={() => onSelectCoin(crypto.id)} style={{ cursor: 'pointer' }}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className={`${styles.cryptoIcon} me-2`}>
                        <img 
                          src={`https://cryptologos.cc/logos/${crypto.id}-${crypto.symbol.toLowerCase()}-logo.png`} 
                          alt={crypto.name}
                          onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null;
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/32';
                          }}
                          width="24"
                          height="24"
                        />
                      </div>
                      <div>
                        <div>{crypto.name}</div>
                        <div className="text-muted small">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td>${crypto.currentPrice.toLocaleString()}</td>
                  <td className={crypto.priceChangePercentage24h >= 0 ? 'text-success' : 'text-danger'}>
                    {crypto.priceChangePercentage24h >= 0 ? '+' : ''}
                    {crypto.priceChangePercentage24h.toFixed(2)}%
                  </td>
                  <td>${crypto.high24h.toLocaleString()}</td>
                  <td>${crypto.low24h.toLocaleString()}</td>
                  <td>
                    <div className={styles.miniChart}>
                      <svg width="100" height="30" viewBox="0 0 100 30" className="sparkline">
                        <path
                          d="M0,15 L10,10 L20,20 L30,5 L40,15 L50,25 L60,10 L70,20 L80,5 L90,15 L100,10"
                          fill="none"
                          stroke={crypto.priceChangePercentage24h >= 0 ? "#26de81" : "#ff5252"}
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TradeHistory;