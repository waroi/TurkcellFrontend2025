'use client'

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../../components/layout/Layout';
import CryptoCard from '../../../components/common/CryptoCard';
import { Search, SlidersHorizontal } from 'lucide-react';
import './market.scss';

const dummyCryptos = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc', price: 54321.23, change: 2.45, image: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'eth', price: 2456.78, change: -1.23, image: 'https://assets.coingecko.com/coins/images/279/thumb/ethereum.png' },
  { id: 'litecoin', name: 'Litecoin', symbol: 'ltc', price: 187.25, change: 0.87, image: 'https://assets.coingecko.com/coins/images/2/thumb/litecoin.png' },
  { id: 'ripple', name: 'XRP', symbol: 'xrp', price: 0.98, change: -2.56, image: 'https://assets.coingecko.com/coins/images/44/thumb/xrp-symbol-white-128.png' },
  { id: 'dogecoin', name: 'Dogecoin', symbol: 'doge', price: 0.32, change: 5.67, image: 'https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png' },
  { id: 'cardano', name: 'Cardano', symbol: 'ada', price: 1.23, change: 3.21, image: 'https://assets.coingecko.com/coins/images/975/thumb/cardano.png' },
  { id: 'polkadot', name: 'Polkadot', symbol: 'dot', price: 28.91, change: -0.56, image: 'https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png' },
  { id: 'solana', name: 'Solana', symbol: 'sol', price: 153.87, change: 7.23, image: 'https://assets.coingecko.com/coins/images/4128/thumb/solana.png' },
];

export default function MarketPage() {
  const { t } = useTranslation();
  const [cryptos, setCryptos] = useState(dummyCryptos);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'change'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [watchlist, setWatchlist] = useState<string[]>([]);

  useEffect(() => {
    let filteredCryptos = [...dummyCryptos];
 
    if (searchTerm) {
      filteredCryptos = filteredCryptos.filter(
        crypto => 
          crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
 
    filteredCryptos.sort((a, b) => {
      if (sortBy === 'name') {
        return sortDirection === 'asc' 
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else if (sortBy === 'price') {
        return sortDirection === 'asc' 
          ? a.price - b.price
          : b.price - a.price;
      } else {
        return sortDirection === 'asc' 
          ? a.change - b.change
          : b.change - a.change;
      }
    });
    
    setCryptos(filteredCryptos);
  }, [searchTerm, sortBy, sortDirection]);
  
  const toggleWatchlist = (id: string) => {
    setWatchlist(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleSortChange = (field: 'name' | 'price' | 'change') => {
    if (sortBy === field) {
      setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };

  return (
    <Layout>
      <div className="market-page">
        <div className="container">
          <div className="market-page__header">
            <h1 className="market-page__title">{t('market.title')}</h1>
            <p className="market-page__subtitle">
              En popüler kripto para birimlerini keşfedin ve takip edin.
            </p>
          </div>
          
          <div className="market-page__filters">
            <div className="market-page__search">
              <Search className="market-page__search-icon" />
              <input 
                type="text" 
                className="market-page__search-input" 
                placeholder={t('market.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="market-page__filter-button">
              <SlidersHorizontal className="market-page__filter-icon" />
              <span>Filtrele</span>
            </button>
          </div>
          
          <div className="market-page__sort">
            <div className="market-page__sort-label">Sırala:</div>
            <div className="market-page__sort-buttons">
              <button 
                className={`market-page__sort-button ${sortBy === 'name' ? 'market-page__sort-button--active' : ''}`}
                onClick={() => handleSortChange('name')}
              >
                İsim {sortBy === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                className={`market-page__sort-button ${sortBy === 'price' ? 'market-page__sort-button--active' : ''}`}
                onClick={() => handleSortChange('price')}
              >
                Fiyat {sortBy === 'price' && (sortDirection === 'asc' ? '↑' : '↓')}
              </button>
              <button 
                className={`market-page__sort-button ${sortBy === 'change' ? 'market-page__sort-button--active' : ''}`}
                onClick={() => handleSortChange('change')}
              >
                Değişim {sortBy === 'change' && (sortDirection === 'asc' ? '↑' : '↓')}
              </button>
            </div>
          </div>
          
          <div className="market-page__grid">
            {cryptos.length > 0 ? (
              cryptos.map(crypto => (
                <CryptoCard
                  key={crypto.id}
                  id={crypto.id}
                  name={crypto.name}
                  symbol={crypto.symbol}
                  price={crypto.price}
                  change={crypto.change}
                  image={crypto.image}
                  inWatchlist={watchlist.includes(crypto.id)}
                  onAddToWatchlist={() => toggleWatchlist(crypto.id)}
                  onRemoveFromWatchlist={() => toggleWatchlist(crypto.id)}
                  onClick={() => console.log(`View details for ${crypto.name}`)}
                />
              ))
            ) : (
              <div className="market-page__empty">
                <p>Arama kriterlerine uygun sonuç bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}