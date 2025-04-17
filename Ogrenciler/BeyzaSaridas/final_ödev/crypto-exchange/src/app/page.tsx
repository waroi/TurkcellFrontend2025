import React from "react";
import Layout from "../components/layout/Layout";
import "./(auth)/register/register.scss";
import "./trading-market.scss"; // Make sure to create this file

// SVG for the small graph icon in the table
const MarketGraphIcon: React.FC = () => (
  <svg
    width="139"
    height="31"
    viewBox="0 0 139 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="trading-market__graph"
  >
    <path
      d="M137.5 30H133.837C133.132 30 132.479 29.629 132.118 29.0235L124.482 16.2029C124.121 15.5974 123.468 15.2264 122.763 15.2264H117.934C117.648 15.2264 117.365 15.2879 117.105 15.4067L104.127 21.3241C103.49 21.6148 102.747 21.5507 102.168 21.1552L97.6827 18.0872C97.0771 17.673 96.2935 17.6236 95.6407 17.9585L91.2431 20.2144C90.6532 20.5169 89.9518 20.5076 89.3702 20.1893L82.481 16.4198C82.3606 16.3539 82.2339 16.3006 82.1026 16.2608L75.8884 14.3717C75.3834 14.2182 74.9595 13.8713 74.7092 13.4066L69.8718 4.42609C69.6328 3.98237 69.2351 3.64524 68.7582 3.48216L62.9662 1.50143C62.1031 1.20626 61.1496 1.5325 60.6483 2.29455L54.6761 11.3717C54.4323 11.7423 54.0722 12.0213 53.6525 12.1648L41.9485 16.1674C41.6536 16.2682 41.3392 16.2988 41.0303 16.2565L34.372 15.3457C33.8164 15.2697 33.3182 14.9639 32.9989 14.5029L27.7397 6.90897C27.0048 5.84782 25.4721 5.7504 24.6087 6.70996L20.3787 11.4114C20.0692 11.7554 19.6499 11.9814 19.1924 12.0509L13.632 12.8961C13.0418 12.9858 12.5225 13.3344 12.2161 13.8468L6.0822 24.1021C5.72108 24.7058 5.0693 25.0755 4.36579 25.0755H1.5"
      stroke="#D33535"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Candlestick Chart Component
const CandlestickChart: React.FC = () => {
  // These values define positions for the candlesticks in the chart
  const candlestickData = [
    { date: "05 Feb", open: 38.3, close: 38.4, high: 38.5, low: 38.2, color: "green" },
    { date: "06 Feb", open: 38.4, close: 38.3, high: 38.5, low: 38.2, color: "red" },
    { date: "07 Feb", open: 38.3, close: 38.5, high: 38.6, low: 38.3, color: "green" },
    { date: "08 Feb", open: 38.4, close: 38.3, high: 38.4, low: 38.2, color: "red" },
    { date: "09 Feb", open: 38.3, close: 38.4, high: 38.5, low: 38.3, color: "green" },
    { date: "10 Feb", open: 38.4, close: 38.5, high: 38.6, low: 38.4, color: "green" },
    { date: "11 Feb", open: 38.5, close: 38.4, high: 38.5, low: 38.3, color: "red" },
    { date: "12 Feb", open: 38.4, close: 38.2, high: 38.4, low: 38.1, color: "red" },
    { date: "13 Feb", open: 38.2, close: 38.3, high: 38.4, low: 38.2, color: "green" },
    { date: "14 Feb", open: 38.3, close: 38.6, high: 38.7, low: 38.3, color: "green" },
    { date: "15 Feb", open: 38.5, close: 38.4, high: 38.5, low: 38.3, color: "red" },
  ];

  return (
    <div className="trading-market__chart-container">
      <div className="trading-market__chart-header">
        <div className="trading-market__chart-tabs">
          <button className="trading-market__tab trading-market__tab--active">Price</button>
          <button className="trading-market__tab">Market Cap</button>
          <button className="trading-market__tab">Trade View</button>
        </div>
        <div className="trading-market__chart-controls">
          <div className="trading-market__time-selector">
            <span className="trading-market__time-text">24h</span>
            <svg className="trading-market__dropdown-icon" width="12" height="12" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 10l5 5 5-5z" />
            </svg>
          </div>
          <button className="trading-market__chart-button">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
          </button>
          <button className="trading-market__chart-button">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
            </svg>
          </button>
          <button className="trading-market__chart-button">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="trading-market__chart-body">
        <div className="trading-market__price-indicator">
          <div className="trading-market__current-price">$38.40k</div>
        </div>
        <div className="trading-market__chart-grid">
          <div className="trading-market__y-axis">
            <span>38.70k</span>
            <span>38.60k</span>
            <span>38.50k</span>
            <span>38.40k</span>
            <span>38.30k</span>
            <span>38.20k</span>
            <span>38.10k</span>
          </div>
          <div className="trading-market__candlestick-chart">
            {/* Visual representation of the chart using CSS */}
            <div className="trading-market__candlesticks">
              {/* Candlesticks will be rendered via CSS */}
            </div>
            {/* Highlighted day indicator */}
            <div className="trading-market__highlight-day">
              <div className="trading-market__highlight-badge">08 Feb</div>
            </div>
          </div>
        </div>
        <div className="trading-market__x-axis">
          <span>05 Feb</span>
          <span>06 Feb</span>
          <span>07 Feb</span>
          <span>08 Feb</span>
          <span>09 Feb</span>
          <span>10 Feb</span>
          <span>11 Feb</span>
          <span>12 Feb</span>
          <span>13 Feb</span>
          <span>14 Feb</span>
          <span>15 Feb</span>
          <span>BTC</span>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="hero">
          <h1 className="hero__title">
            Modern <span className="hero__title--highlight">Kripto Para</span>{" "}
            Borsası
          </h1>
          <p className="hero__subtitle">
            Güvenli, hızlı ve kullanıcı dostu bir platformda kripto para alım
            satımı yapın. En güncel fiyatları takip edin, portföyünüzü yönetin
            ve piyasaları analiz edin.
          </p>
          <div className="hero__buttons">
            <a href="/market" className="hero__button hero__button--primary">
              Piyasayı Görüntüle
            </a>
            <a
              href="/register"
              className="hero__button hero__button--secondary"
            >
              Hesap Oluştur
            </a>
          </div>
        </div>

        {/* Trading Market Section */}
        <div className="trading-market">
          <h2 className="trading-market__title">Trading Market</h2>
          
          {/* Candlestick Chart Component */}
          <CandlestickChart />
          <h2 className="trading-market__title">Update Market</h2>
          <div className="trading-market__table">
            <div className="trading-market__header">
              <span>#</span>
              <span>Name</span>
              <span>Last Price</span>
              <span>24h %</span>
              <span>Market Cap</span>
              <span>Last 7 Days</span>
              <span>Action</span>
            </div>
            <div className="trading-market__row">
              <span>1</span>
              <span>Bitcoin</span>
              <span>$56,623.54</span>
              <span className="positive">+1.45%</span>
              <span>$880,423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
            <div className="trading-market__row">
              <span>2</span>
              <span>Ethereum</span>
              <span>$4,123.54</span>
              <span className="negative">-5.12%</span>
              <span>$423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
            <div className="trading-market__row">
              <span>3</span>
              <span>Binance Coin</span>
              <span>$623.54</span>
              <span className="positive">+2.34%</span>
              <span>$104,423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
            <div className="trading-market__row">
              <span>4</span>
              <span>Cardano</span>
              <span>$2.14</span>
              <span className="negative">-1.23%</span>
              <span>$67,423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
            <div className="trading-market__row">
              <span>5</span>
              <span>Solana</span>
              <span>$145.23</span>
              <span className="positive">+3.67%</span>
              <span>$43,423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
            <div className="trading-market__row">
              <span>6</span>
              <span>XRP</span>
              <span>$1.12</span>
              <span className="negative">-0.89%</span>
              <span>$21,423,640,582</span>
              <span>
                <MarketGraphIcon />
              </span>
              <button className="trading-market__trade-button">Trade</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}