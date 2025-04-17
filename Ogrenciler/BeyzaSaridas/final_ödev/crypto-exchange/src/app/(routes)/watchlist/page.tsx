'use client'

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../../components/layout/Layout';
import CryptoIcon from '../../../components/common/CryptoIcon';
import Button from '../../../components/ui/Button';
import { formatCurrency } from '../../../lib/utils';
import { Search, List, Star, ExternalLink, ChevronDown, Trash2 } from 'lucide-react';
import Link from 'next/link';
import './watchlist.scss';

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image: string;
}

interface WatchlistItem {
  id: string;
  name: string;
  symbol: string;
  date_added: string;
}

const WatchlistPage: React.FC = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'change'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([]);
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [filteredWatchlist, setFilteredWatchlist] = useState<(WatchlistItem & { price?: number, change?: number })[]>([]);

  useEffect(() => {

    const mockWatchlist: WatchlistItem[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc', date_added: '2023-01-15' },
      { id: 'ethereum', name: 'Ethereum', symbol: 'eth', date_added: '2023-01-20' },
      { id: 'ripple', name: 'XRP', symbol: 'xrp', date_added: '2023-02-05' }
    ];
    
    const mockCryptos: CryptoCurrency[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc', current_price: 54321.23, price_change_percentage_24h: 2.45, image: 'https://example.com/btc.png' },
      { id: 'ethereum', name: 'Ethereum', symbol: 'eth', current_price: 2456.78, price_change_percentage_24h: -1.23, image: 'https://example.com/eth.png' },
      { id: 'ripple', name: 'XRP', symbol: 'xrp', current_price: 0.98, price_change_percentage_24h: -2.56, image: 'https://example.com/xrp.png' },
      { id: 'litecoin', name: 'Litecoin', symbol: 'ltc', current_price: 187.25, price_change_percentage_24h: 0.87, image: 'https://example.com/ltc.png' },
    ];
    
    setWatchlist(mockWatchlist);
    setCryptocurrencies(mockCryptos);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (watchlist.length > 0 && cryptocurrencies.length > 0) {

      const watchlistWithPrices = watchlist.map(item => {
        const cryptoData = cryptocurrencies.find(c => 
          c.id === item.id || 
          c.symbol.toLowerCase() === item.symbol.toLowerCase()
        );
        
        return {
          ...item,
          price: cryptoData?.current_price || 0,
          change: cryptoData?.price_change_percentage_24h || 0
        };
      });

      const filtered = watchlistWithPrices.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );

      const sorted = [...filtered].sort((a, b) => {
        if (sortBy === 'name') {
          return sortDirection === 'asc' 
            ? a.name.localeCompare(b.name) 
            : b.name.localeCompare(a.name);
        } else if (sortBy === 'price') {
          return sortDirection === 'asc' 
            ? a.price - b.price 
            : b.price - a.price;
        } else { // change
          return sortDirection === 'asc' 
            ? a.change - b.change 
            : b.change - a.change;
        }
      });

      setFilteredWatchlist(sorted);
    } else {
      setFilteredWatchlist([]);
    }
  }, [watchlist, cryptocurrencies, searchQuery, sortBy, sortDirection]);

  const toggleSort = (column: 'name' | 'price' | 'change') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const handleRemoveFromWatchlist = (id: string) => {
    setWatchlist(prev => prev.filter(item => item.id !== id));
  };

  if (loading) {
    return (
      <Layout>
        <div className="watchlist-page">
          <div className="container">
            <div className="watchlist-page__loading">
              <div className="watchlist-page__loading-spinner"></div>
              <p>İzleme listeniz yükleniyor...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="watchlist-page">
        <div className="container">
          <div className="watchlist-page__header">
            <h1 className="watchlist-page__title">{t('watchlist.title')}</h1>
            <p className="watchlist-page__subtitle">
              Favori kripto paralarınızı tek bir yerden takip edin
            </p>
          </div>

          <div className="watchlist-page__content">
            <div className="watchlist-page__toolbar">
              <div className="watchlist-page__search">
                <Search className="watchlist-page__search-icon" />
                <input
                  type="text"
                  className="watchlist-page__search-input"
                  placeholder="İzleme listenizde arayın..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="watchlist-page__actions">
                <Link href="/market">
                  <Button size="sm" className="watchlist-page__market-button">
                    <List className="watchlist-page__market-icon" />
                    Piyasa
                  </Button>
                </Link>
              </div>
            </div>

            {watchlist.length === 0 ? (
              <div className="watchlist-page__empty">
                <div className="watchlist-page__empty-icon">
                  <Star />
                </div>
                <h3 className="watchlist-page__empty-title">İzleme listeniz boş</h3>
                <p className="watchlist-page__empty-text">
                  Kripto paraları izleme listenize ekleyin ve performanslarını kolayca takip edin.
                </p>
                <Link href="/market">
                  <Button>
                    Piyasaya Göz At
                    <ExternalLink className="watchlist-page__empty-link-icon" />
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="watchlist-page__table-container">
                <table className="watchlist-page__table">
                  <thead>
                    <tr>
                      <th 
                        onClick={() => toggleSort('name')}
                        className="watchlist-page__th watchlist-page__th--sortable"
                      >
                        <div className="watchlist-page__th-content">
                          Kripto Para
                          <ChevronDown 
                            className={`watchlist-page__sort-icon ${sortBy === 'name' && (sortDirection === 'asc' ? 'watchlist-page__sort-icon--asc' : '')}`} 
                          />
                        </div>
                      </th>
                      <th 
                        onClick={() => toggleSort('price')}
                        className="watchlist-page__th watchlist-page__th--sortable"
                      >
                        <div className="watchlist-page__th-content">
                          Fiyat
                          <ChevronDown 
                            className={`watchlist-page__sort-icon ${sortBy === 'price' && (sortDirection === 'asc' ? 'watchlist-page__sort-icon--asc' : '')}`} 
                          />
                        </div>
                      </th>
                      <th 
                        onClick={() => toggleSort('change')}
                        className="watchlist-page__th watchlist-page__th--sortable"
                      >
                        <div className="watchlist-page__th-content">
                          24s Değişim
                          <ChevronDown 
                            className={`watchlist-page__sort-icon ${sortBy === 'change' && (sortDirection === 'asc' ? 'watchlist-page__sort-icon--asc' : '')}`} 
                          />
                        </div>
                      </th>
                      <th className="watchlist-page__th">
                        Eklenme Tarihi
                      </th>
                      <th className="watchlist-page__th">
                        İşlemler
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredWatchlist.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="watchlist-page__no-results">
                          Aramanızla eşleşen kripto para bulunamadı.
                        </td>
                      </tr>
                    ) : (
                      filteredWatchlist.map((item) => {
                        const cryptoData = cryptocurrencies.find(c => 
                          c.id === item.id || 
                          c.symbol.toLowerCase() === item.symbol.toLowerCase()
                        );
                        
                        return (
                          <tr key={item.id} className="watchlist-page__tr">
                            <td className="watchlist-page__td">
                              <div className="watchlist-page__crypto">
                                <div className="watchlist-page__crypto-icon">
                                  <CryptoIcon symbol={item.symbol} size={32} />
                                </div>
                                <div className="watchlist-page__crypto-info">
                                  <div className="watchlist-page__crypto-name">{item.name}</div>
                                  <div className="watchlist-page__crypto-symbol">{item.symbol.toUpperCase()}</div>
                                </div>
                              </div>
                            </td>
                            <td className="watchlist-page__td">
                              <div className="watchlist-page__price">
                                {cryptoData ? formatCurrency(cryptoData.current_price) : 'N/A'}
                              </div>
                            </td>
                            <td className="watchlist-page__td">
                              {cryptoData?.price_change_percentage_24h !== undefined && (
                                <div className={`watchlist-page__change ${cryptoData.price_change_percentage_24h >= 0 ? 'watchlist-page__change--positive' : 'watchlist-page__change--negative'}`}>
                                  {cryptoData.price_change_percentage_24h >= 0 ? '+' : ''}
                                  {cryptoData.price_change_percentage_24h.toFixed(2)}%
                                </div>
                              )}
                            </td>
                            <td className="watchlist-page__td">
                              <div className="watchlist-page__date">
                                {new Date(item.date_added).toLocaleDateString()}
                              </div>
                            </td>
                            <td className="watchlist-page__td">
                              <div className="watchlist-page__actions-cell">
                                <button
                                  onClick={() => handleRemoveFromWatchlist(item.id)}
                                  className="watchlist-page__remove-button"
                                  title="İzleme listesinden çıkar"
                                >
                                  <Trash2 className="watchlist-page__remove-icon" />
                                </button>
                                <Link href={`/buy-crypto?symbol=${item.symbol}`}>
                                  <Button size="sm" variant="outline">Satın Al</Button>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WatchlistPage;