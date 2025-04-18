'use client';
import React from 'react';
interface CryptoPriceCardsProps {
  theme?: 'light' | 'dark';
}

const CryptoPriceCards: React.FC<CryptoPriceCardsProps> = ({ theme = 'light' }) => {
  const cryptos = [
    { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', current_price: 38447.54, price_change_percentage_24h: 2 },
    { id: 'binance', name: 'Binance', symbol: 'BNB', current_price: 38447.54, price_change_percentage_24h: 2 },
    { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', current_price: 38447.54, price_change_percentage_24h: 2 },
    { id: 'ripple', name: 'XRP', symbol: 'XRP', current_price: 38447.54, price_change_percentage_24h: 2 }
  ];

  const getIconBgColor = (id: string) => {
    switch (id) {
      case 'bitcoin': return '#F7931A';
      case 'binance': return '#F0B90B';
      case 'ethereum': return '#627EEA';
      case 'ripple': return '#0066CC';
      default: return '#333333';
    }
  };

  const renderSparkline = (id: string, isPositive: boolean = true) => {
    const color = id === 'ethereum' ? '#e74c3c' : '#3498db';
    
    return (
      <svg width="100" height="30" viewBox="0 0 100 30">
        <path 
          d="M0,15 C10,10 20,20 30,15 C40,10 50,5 60,15 C70,25 80,5 90,10 L100,15" 
          stroke={color} 
          strokeWidth="2" 
          fill="none" 
        />
      </svg>
    );
  };

  return (
    <div className={`crypto-container ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <div className="top-label">Top Market</div>
      <h2 className="title">Get Various Crypto Coin</h2>
      
      <div className="crypto-cards-container">
        {cryptos.map((crypto) => (
          <div key={crypto.id} className="crypto-card">
            <div className="crypto-header">
              <div className="crypto-icon-container">
                <div className="crypto-icon" style={{ backgroundColor: getIconBgColor(crypto.id) }}>
                  {crypto.id === 'bitcoin' && <span>₿</span>}
                  {crypto.id === 'binance' && <span>B</span>}
                  {crypto.id === 'ethereum' && <span>Ξ</span>}
                  {crypto.id === 'ripple' && <span>X</span>}
                </div>
                <span className="crypto-name">{crypto.name}</span>
                <span className="crypto-symbol">{crypto.symbol}</span>
              </div>
            </div>
            
            <div className="crypto-price">
              ${crypto.current_price.toLocaleString()}
              <span className={`price-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}`}>
                {crypto.price_change_percentage_24h >= 0 ? '+' : ''}{crypto.price_change_percentage_24h}%
                {crypto.price_change_percentage_24h >= 0 ? ' ↗' : ' ↘'}
              </span>
            </div>
            
            <div className="sparkline">
              {renderSparkline(crypto.id, crypto.price_change_percentage_24h >= 0)}
            </div>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .crypto-container {
          font-family: 'Inter', sans-serif;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .top-label {
          color: #0066FF;
          font-size: 14px;
          text-align: center;
          margin-bottom: 8px;
        }
        
        .title {
          color: #333;
          font-size: 28px;
          font-weight: 600;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .crypto-cards-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: space-between;
        }
        
        .crypto-card {
          background-color: white;
          border-radius: 12px;
          padding: 20px;
          width: calc(25% - 15px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
        }
        
        .crypto-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .crypto-icon-container {
          display: flex;
          align-items: center;
        }
        
        .crypto-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 8px;
        }
        
        .crypto-name {
          font-weight: 500;
          margin-right: 8px;
        }
        
        .crypto-symbol {
          background-color: #E8F0FE;
          color: #0066FF;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .crypto-price {
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 10px;
        }
        
        .price-change {
          font-size: 14px;
          margin-left: 8px;
        }
        
        .positive {
          color: #2ecc71;
        }
        
        .negative {
          color: #e74c3c;
        }
        
        .sparkline {
          height: 30px;
        }
        
        .dark-theme {
          background-color: #1a1a2e;
          color: white;
        }
        
        .dark-theme .title {
          color: white;
        }
        
        .dark-theme .crypto-card {
          background-color: #242442;
          color: white;
        }
        
        @media (max-width: 992px) {
          .crypto-card {
            width: calc(50% - 10px);
          }
        }
        
        @media (max-width: 576px) {
          .crypto-card {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CryptoPriceCards;