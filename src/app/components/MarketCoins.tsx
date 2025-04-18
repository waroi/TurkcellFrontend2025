'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { CryptoData, TradeInfo } from '../types/crypto';
import CryptoTable from './CryptoTable';
import { useTheme } from '../context/ThemeContext';

interface Props {
  cryptos: CryptoData[];
  onAddToWatchlist: (cryptoId: string) => void;
  onTrade: (tradeInfo: TradeInfo) => void; 
  isAuthenticated: boolean;
}

const MarketCoins: React.FC<Props> = ({ cryptos, onAddToWatchlist, onTrade, isAuthenticated }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { theme } = useTheme();

  const filteredCryptos = cryptos.filter(crypto => {
    const matchesSearch = crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className={`container-fluid px-4 min-vh-100 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="mb-2">Market Overview</h1>
          <p className="text-muted">Track and trade your favorite cryptocurrencies</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className={`p-3 rounded border ${theme === 'dark' ? 'bg-dark border-secondary' : 'bg-light border-light'}`}>
            <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
              <div className="d-flex gap-2">
                <button
                  className={`btn ${selectedCategory === 'all' ? 'btn-primary' : theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All
                </button>
              </div>
              <div className="position-relative">
                <input
                  type="text"
                  className={`form-control pe-4 ${theme === 'dark' ? 'bg-dark text-light border-secondary' : 'bg-light text-dark border-light'}`}
                  placeholder="Search Coin"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="position-absolute top-50 end-0 me-2 translate-middle-y text-muted" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <CryptoTable
            cryptos={filteredCryptos}
            onAddToWatchlist={onAddToWatchlist}
            onTrade={onTrade}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </div>
    </div>
  );
};

export default MarketCoins;