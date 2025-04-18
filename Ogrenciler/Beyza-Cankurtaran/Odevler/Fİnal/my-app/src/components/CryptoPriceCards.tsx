'use client';
import React from 'react';
import { useTheme } from '../app/context/ThemeContext';

const CryptoPriceCards: React.FC = () => {
  const { theme } = useTheme(); // context'ten theme değerini alıyoruz

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
    <div className={`crypto-container ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
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


      {/* Use style jsx for component-specific styles */}
      <style jsx>{`
        /* Base Styles */
        .crypto-container {
          font-family: 'Inter', sans-serif;
          max-width: 1200px;
          margin: 40px auto; /* Added top/bottom margin */
          padding: 20px;
          border-radius: 16px; /* Added rounding to container */
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .top-label {
          font-size: 14px;
          font-weight: 500; /* Slightly bolder */
          text-align: center;
          margin-bottom: 8px;
          color: #0066FF; /* Keep brand color consistent */
        }

        .title {
          font-size: 32px; /* Slightly larger */
          font-weight: 700; /* Bolder */
          text-align: center;
          margin-bottom: 40px; /* More space */
          transition: color 0.3s ease;
        }

        .crypto-cards-container {
          display: grid; /* Use grid for better responsive control */
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); /* Responsive columns */
          gap: 20px;
        }

        .crypto-card {
          border-radius: 12px;
          padding: 20px;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          display: flex; /* Use flex for vertical layout */
          flex-direction: column;
          justify-content: space-between; /* Pushes sparkline down */
        }

        .crypto-header {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .crypto-icon-container {
          display: flex;
          align-items: center;
          flex-grow: 1; /* Allow container to take space */
        }

        .crypto-icon {
          width: 32px;  /* Slightly larger icon */
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          margin-right: 12px; /* More spacing */
          font-size: 16px; /* Adjust icon symbol size */
          flex-shrink: 0; /* Prevent icon shrinking */
        }

        .crypto-name {
          font-weight: 600; /* Bolder name */
          margin-right: 8px;
          font-size: 16px; /* Slightly larger name */
          white-space: nowrap; /* Prevent wrapping */
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .crypto-symbol {
          padding: 3px 8px; /* More padding */
          border-radius: 6px; /* More rounded */
          font-size: 12px;
          font-weight: 500;
          flex-shrink: 0; /* Prevent symbol shrinking */
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .crypto-price {
          font-size: 20px; /* Adjusted size */
          font-weight: 600;
          margin-bottom: 15px; /* More space before sparkline */
          display: flex; /* Align price and change */
          align-items: baseline; /* Align text baselines */
          flex-wrap: wrap; /* Allow wrapping if needed */
          gap: 8px; /* Space between price and change */
        }

        .price-change {
          font-size: 14px;
          font-weight: 500; /* Medium weight */
          /* Removed margin-left, using gap now */
        }

        .positive { color: #16a34a; } /* Updated green */
        .negative { color: #dc2626; } /* Updated red */

        .sparkline {
          height: 30px;
          margin-top: auto; /* Push to bottom with flex */
          width: 100%; /* Ensure SVG takes full width */
        }

        /* Light Theme Specifics */
        .theme-light {
          background-color: #F7F9FC; /* Softer light background */
          color: #1A202C; /* Dark gray text */
        }
        .theme-light .title {
          color: #1A202C;
        }
        .theme-light .crypto-card {
          background-color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); /* Softer shadow */
          border: 1px solid #E2E8F0; /* Subtle border */
        }
         .theme-light .crypto-card:hover {
           box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08); /* Slightly raise on hover */
         }
        .theme-light .crypto-symbol {
          background-color: #E8F0FE;
          color: #0066FF;
        }
        .theme-light .positive { color: #16a34a; }
        .theme-light .negative { color: #dc2626; }


        /* Dark Theme Specifics */
        .theme-dark {
          background-color: #121212; /* Darker background */
          color: #E2E8F0; /* Light gray text */
        }
        .theme-dark .title {
          color: #FFFFFF;
        }
        .theme-dark .crypto-card {
          background-color: #1A202C; /* Card background */
          border: 1px solid #2D3748; /* Darker border */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Dark theme shadow */
        }
         .theme-dark .crypto-card:hover {
           background-color: #2D3748; /* Slightly lighter on hover */
         }
        .theme-dark .crypto-symbol {
          background-color: #2D3748; /* Darker badge bg */
          color: #90CDF4; /* Lighter blue text */
        }
        .theme-dark .positive { color: #2ecc71; } /* Brighter green */
        .theme-dark .negative { color: #e74c3c; } /* Brighter red */


        /* Responsive Adjustments (using grid handles this better now) */
        /* @media (max-width: 992px) { ... } */
        /* @media (max-width: 576px) { ... } */

      `}</style>
    </div>
  );
};

export default CryptoPriceCards;