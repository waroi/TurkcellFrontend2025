import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import { useTheme } from '../../../context/ThemeContext';
import TradingTabs from './TradingTabs';
import CryptoChart from './CryptoChart';
import TradeHistory from './TradeHistory';

const CryptoChartSection: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    chartData, 
    timeframe, 
    setTimeframe, 
    coinName, 
    loading, 
    cryptocurrencies, 
    setSelectedCoin 
  } = useTradingPage();
  const { theme } = useTheme();

  const chartContainerStyle = {
    marginTop: '20px',
    marginBottom: '20px'
  };

  return (
    <div className="col-md-9">
      <TradingTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div style={chartContainerStyle}>
        <CryptoChart 
          data={chartData}
          timeframe={timeframe}
          onTimeframeChange={setTimeframe}
          coinName={coinName}
          loading={loading}
        />
      </div>
      
      <TradeHistory 
        cryptocurrencies={cryptocurrencies}
        loading={loading}
        onSelectCoin={setSelectedCoin}
      />
    </div>
  );
};

export default CryptoChartSection;