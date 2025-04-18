'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useTheme } from '../../context/ThemeContext';
import MiniSparkline from './components/MiniSparkline';
import "bootstrap/dist/css/bootstrap.min.css";

import { 
  getCryptocurrencies, 
  getGlobalMarketData,
  getTopGainers,
  getTopLosers,
  getTopByTradingVolume,
  CryptoCurrency,
  MarketData 
} from './services/cryptoApi';
import CryptoCard from '@/components/CryptoCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Market = () => {
  const { t } = useTranslation('common');
  const { theme } = useTheme();
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [globalMarketData, setGlobalMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [topCryptos, setTopCryptos] = useState<CryptoCurrency[]>([]);
  const [activeTab, setActiveTab] = useState('topGainers');
  const [tabData, setTabData] = useState<CryptoCurrency[]>([]);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [cryptoData, marketData] = await Promise.all([
          getCryptocurrencies(),
          getGlobalMarketData()
        ]);
        
        setCryptocurrencies(cryptoData);
        setGlobalMarketData(marketData);
        setTopCryptos(cryptoData.slice(0, 4));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching initial data:', error);
        setLoading(false);
      }
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const fetchTabData = async () => {
      setLoading(true);
      try {
        let data: CryptoCurrency[] = [];
        
        switch (activeTab) {
          case 'topGainers':
            data = await getTopGainers(20);
            break;
          case 'topLosers':
            data = await getTopLosers(20);
            break;
          case 'topTrading':
            data = await getTopByTradingVolume(20);
            break;
          case 'newToMarket':
            // For demo purposes, we'll just use regular crypto data
            // In a real app, you'd have an API endpoint for new listings
            data = cryptocurrencies.slice(10, 30);
            break;
          case 'topTrending':
            // For demo purposes, we'll just use top market cap cryptos
            data = cryptocurrencies.slice(0, 20);
            break;
          default:
            data = cryptocurrencies.slice(0, 20);
        }
        
        setTabData(data);
      } catch (error) {
        console.error(`Error fetching ${activeTab} data:`, error);
      } finally {
        setLoading(false);
      }
    };

    if (cryptocurrencies.length > 0) {
      fetchTabData();
    }
  }, [activeTab, cryptocurrencies]);

  // Helper function to format currency amounts
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: value < 1 ? 6 : 2
    }).format(value);
  };

  // Helper function to format large numbers with abbreviations
  const formatLargeNumber = (value: number) => {
    if (value >= 1e12) return (value / 1e12).toFixed(2) + 'T';
    if (value >= 1e9) return (value / 1e9).toFixed(2) + 'B';
    if (value >= 1e6) return (value / 1e6).toFixed(2) + 'M';
    if (value >= 1e3) return (value / 1e3).toFixed(2) + 'K';
    return value.toString();
  };

  return (<>
    <Navbar/>
    <div className={`container-fluid py-4 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
      <CryptoCard topCryptos={topCryptos} theme={theme}/>
      {/* Tab Navigation */}
      <div className="d-flex mb-3 overflow-auto">
        <button 
          className={`btn btn-sm me-2 ${activeTab === 'topGainers' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setActiveTab('topGainers')}
        >
          Top Gainers
        </button>
        <button 
          className={`btn btn-sm me-2 ${activeTab === 'topLosers' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setActiveTab('topLosers')}
        >
          Top Losers
        </button>
        <button 
          className={`btn btn-sm me-2 ${activeTab === 'newToMarket' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setActiveTab('newToMarket')}
        >
          New to market
        </button>
        <button 
          className={`btn btn-sm me-2 ${activeTab === 'topTrading' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setActiveTab('topTrading')}
        >
          Top in trading
        </button>
        <button 
          className={`btn btn-sm ${activeTab === 'topTrending' ? 'btn-primary' : 'btn-outline-secondary'}`}
          onClick={() => setActiveTab('topTrending')}
        >
          Top in trending
        </button>
      </div>
      
      {/* Search and Filter */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
        <div className="d-flex flex-wrap mb-2 mb-md-0">
          <div className="dropdown me-2 mb-2 mb-md-0">
            <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle btn-sm`}>
              Category <i className="bi bi-chevron-down"></i>
            </button>
          </div>
          <div className="dropdown me-2 mb-2 mb-md-0">
            <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle btn-sm`}>
              Algorithm <i className="bi bi-chevron-down"></i>
            </button>
          </div>
          <div className="dropdown me-2 mb-2 mb-md-0">
            <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle btn-sm`}>
              Platform <i className="bi bi-chevron-down"></i>
            </button>
          </div>
          <div className="dropdown mb-2 mb-md-0">
            <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle btn-sm`}>
              Industry <i className="bi bi-chevron-down"></i>
            </button>
          </div>
        </div>
        
        <div className="d-flex align-items-center">
          <span className="me-2">Show: 50</span>
          <div className="btn-group me-2">
            <button className={`btn btn-sm ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}>
              <i className="bi bi-list"></i>
            </button>
            <button className={`btn btn-sm ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}>
              <i className="bi bi-grid"></i>
            </button>
          </div>
          <button className={`btn btn-sm ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}>
            Customize <i className="bi bi-gear"></i>
          </button>
        </div>
      </div>
      
      {/* Search Bar */}
      <div className="mb-4">
        <div className="input-group">
          <span className="input-group-text bg-transparent">
            <i className="bi bi-search"></i>
          </span>
          <input type="text" className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : ''}`} placeholder="Search Coin Name" />
        </div>
      </div>
      
      {/* Cryptocurrency Table */}
      <div className={`card ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className={`table table-hover ${theme === 'dark' ? 'table-dark' : ''}`}>
              <thead>
                <tr className="text-muted small">
                  <th scope="col">#</th>
                  <th scope="col">Coin Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">24h %</th>
                  <th scope="col">7d Price</th>
                  <th scope="col">Market Cap</th>
                  <th scope="col">24h Volume</th>
                  <th scope="col">Circulating Supply</th>
                  <th scope="col">Last 7 Days</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={9} className="text-center py-4">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ) : (
                  tabData.map((crypto, index) => (
                    <tr key={crypto.id} className="cursor-pointer">
                      <td className="align-middle">
                        <button className="btn btn-sm btn-link text-muted p-0">
                          <i className="bi bi-star"></i>
                        </button>
                        {" "}
                        {index + 1}
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img src={crypto.image} alt={crypto.name} width="24" height="24" className="me-2" />
                          <div>
                            <div className="fw-bold">{crypto.name}</div>
                            <div className="text-muted small">{crypto.symbol.toUpperCase()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">{formatCurrency(crypto.current_price)}</td>
                      <td className={`align-middle ${crypto.price_change_percentage_24h >= 0 ? 'text-success' : 'text-danger'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="align-middle">{formatCurrency(crypto.current_price * (1 + crypto.price_change_percentage_24h / 100))}</td>
                      <td className="align-middle">{formatCurrency(crypto.market_cap)}</td>
                      <td className="align-middle">{formatCurrency(crypto.total_volume)}</td>
                      <td className="align-middle">
                        {formatLargeNumber(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
                      </td>
                      <td className="align-middle">
                        <MiniSparkline 
                          data={crypto.sparkline_in_7d.price} 
                          priceChange={crypto.price_change_percentage_24h} 
                        />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item active"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">4</a></li>
            <li className="page-item"><a className="page-link" href="#">5</a></li>
            <li className="page-item">
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Market;