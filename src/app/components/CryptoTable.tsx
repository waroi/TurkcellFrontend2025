'use client';
import React, { useState, useEffect } from 'react';
import { CryptoData, TradeInfo } from '../types/crypto';
import { fetchCryptoPrice } from '../services/api';
import { useTheme } from '../context/ThemeContext'; 

interface Props {
  cryptos: CryptoData[];
  onAddToWatchlist: (cryptoId: string) => void;
  onTrade: (tradeInfo: TradeInfo) => void;
  isAuthenticated: boolean;
}

const TradingViewWidget: React.FC<{ symbol: string }> = ({ symbol }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ''; 
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        symbol: `BINANCE:${symbol}USDT`,
        width: 150,
        height: 100,
        locale: 'en',
        dateRange: '12M',
        isTransparent: true,
        autosize: false,
        largeChartUrl: '',
        chartOnly: true,
        noTimeScale: true,
      });
      containerRef.current.appendChild(script);
    }
  }, [symbol]);

  return <div ref={containerRef} style={{ width: '150px', height: '100px' }} />;
};

const CryptoTable: React.FC<Props> = ({ cryptos, onAddToWatchlist, onTrade, isAuthenticated }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPrices, setCurrentPrices] = useState<{ [key: string]: number }>({});
  const { theme } = useTheme();
  const itemsPerPage = 10;

  const totalPages = Math.ceil(cryptos.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCryptos = cryptos.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getCryptoLogo = (symbol: string) => {
    const lowerSymbol = symbol.toLowerCase();
    return `https://cryptoicon-api.pages.dev/api/icon/${lowerSymbol}`;
  };

  useEffect(() => {
    const updatePrices = async () => {
      const updates = await Promise.all(
        cryptos.map(async (crypto) => {
          const price = await fetchCryptoPrice(crypto.id);
          return [crypto.id, price];
        })
      );
      setCurrentPrices(Object.fromEntries(updates));
    };

    updatePrices();
    const interval = setInterval(updatePrices, 5000);
    return () => clearInterval(interval);
  }, [cryptos]);

  return (
    <div className={`table-responsive crypto-table ${theme}`}>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h %</th>
            <th>Market Cap</th>
            <th>Chart</th>
            <th>Action</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {currentCryptos.map((crypto, index) => (
            <tr key={crypto.id}>
              <td>{startIndex + index + 1}</td>
              <td>
                <img
                  src={getCryptoLogo(crypto.symbol.replace('USDT', ''))}
                  alt={crypto.name}
                  width={32}
                  height={32}
                />
              </td>
              <td>{crypto.name}</td>
              <td>${(currentPrices[crypto.id] || crypto.current_price).toFixed(2)}</td>
              <td className={crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}>
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td>
                <TradingViewWidget symbol={crypto.symbol.replace('USDT', '')} />
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => {
                    if (!isAuthenticated) {
                      alert('Please log in to add to your watchlist.');
                      return;
                    }
                    onAddToWatchlist(crypto.id);
                  }}
                >
                  Add to Watchlist
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={() => {
                    if (!isAuthenticated) {
                      alert('Please log in to trade.');
                      return;
                    }
                    onTrade({
                      id: crypto.id,
                      name: crypto.name,
                      logo: getCryptoLogo(crypto.symbol.replace('USDT', '')),
                      price: currentPrices[crypto.id] || crypto.current_price, 
                      symbol: crypto.symbol,
                    });
                  }}
                >
                  Trade
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {totalPages > 1 && (
        <nav className="d-flex justify-content-center">
          <ul className="pagination pagination-sm">
            {Array.from({ length: totalPages }, (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <button className="page-link" onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default CryptoTable;