import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import CryptoChartSection from '../components/CryptoChartSection';
import TradingPanel from './TradingPanel';
import { useTheme } from '../../../context/ThemeContext';
import styles from '../styles/Trading.module.css';
import CryptoPriceCards from '@/components/CryptoPriceCards';
import SearchBar from "../components/SearchBar";
const TradingPageLayout: React.FC = () => {
  const { coinName, error, handleSearch } = useTradingPage();
  const { theme } = useTheme();

  return (
    <div className={`${styles.tradingPage} container-fluid py-5`}>
      <div className="row mb-3">
        <CryptoPriceCards />
        <div className="col-md-4">
          <h1>{coinName} to USD Chart</h1>
          <p className={theme === 'dark' ? 'text-muted' : 'text-secondary'}>
            Real-time cryptocurrency trading data and charts.
          </p>
        </div>
        <div className="col-md-4 d-flex align-items-center">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <div className="row mb-3">
        <CryptoChartSection />
        <TradingPanel />
      </div>
      
      {error && (
        <div className="row mt-4">
          <div className="col-md-9">
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradingPageLayout;