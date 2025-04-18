import React from 'react';
import styles from '../styles/Trading.module.css';
import Image from 'next/image';

interface CryptoPriceCardsProps {
  theme?: string;
}

const CryptoPriceCards: React.FC<CryptoPriceCardsProps> = ({ theme = 'light' }) => {
  const cryptoData = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', price: 43975.72, change24h: 3, iconColor: '#F7931A' },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', price: 975.72, change24h: 2, iconColor: '#627EEA' },
    { id: 'binance', name: 'Binance', symbol: 'BNB', price: 43.72, change24h: 1.5, iconColor: '#F3BA2F' },
    { id: 'polygon', name: 'Polygon', symbol: 'MATIC', price: 4975.72, change24h: 2, iconColor: '#8247E5' },
    { id: 'usdc', name: 'USD', symbol: 'USDC', price: 75.72, change24h: 1.5, iconColor: '#2775CA' }
  ];

  return (
    <div className={`${styles.cryptoPriceCardsContainer} rounded p-1 mb-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}`}>
      <ul className="nav nav-tabs border-0 mb-3">
        <li className="nav-item">
          <a className={`nav-link ${styles.activeTab}`} href="#">Top Gainers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Top Loser</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">New in market</a>
        </li>
      </ul>

      <div className="mt-4">
        <div className="d-flex justify-content-between ms-1 me-1 mb-3">
          <div className={`${styles.columnHeader}`}>Coin Name <i className="bi bi-arrow-down-up"></i></div>
          <div className={`${styles.columnHeader}`}>Coin Price <i className="bi bi-arrow-down-up"></i></div>
          <div className={`${styles.columnHeader}`}>24% <i className="bi bi-arrow-down-up"></i></div>
        </div>

        {cryptoData.map((crypto) => (
          <div key={crypto.id} className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center">
              <div className={styles.cryptoIcon} style={{ backgroundColor: crypto.iconColor }}>
                {crypto.symbol === 'BTC' && <span>₿</span>}
                {crypto.symbol === 'ETH' && <span>Ξ</span>}
                {crypto.symbol === 'BNB' && <span>Ƀ</span>}
                {crypto.symbol === 'MATIC' && <span>⬡</span>}
                {crypto.symbol === 'USDC' && <span>$</span>}
              </div>
              <div className="ms-2">
                <div className="fw-bold">{crypto.name}</div>
                <span className={`${styles.cryptoSymbol}`}>{crypto.symbol}</span>
              </div>
            </div>
            <div className="text-end">
              <div>${crypto.price.toLocaleString()}</div>
            </div>
            <div className="d-flex align-items-center text-success">
              +{crypto.change24h}% <i className="bi bi-arrow-up-right ms-1"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoPriceCards;