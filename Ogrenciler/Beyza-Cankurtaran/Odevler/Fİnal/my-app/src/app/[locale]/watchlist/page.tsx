"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '../../context/ThemeContext';
import { useCryptoData } from '../trade/hooks/useCryptoData'
import TradeHistory from './TradeHistory';
import { TimeFrame } from '../trade/types/crypto';
import styles from '../trade/styles/Trading.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CryptoPriceCards from '../trade/components/CryptoPriceCards';
import "../trade/styles/CryptoPriceCards.module.css";

const WatchListPage: React.FC = () => {
  const [selectedCoin, setSelectedCoin] = useState<string>('bitcoin');
  const { theme } = useTheme();
  const [timeframe, setTimeframe] = useState<TimeFrame>('24h');
  const [activeTab, setActiveTab] = useState<string>('price');
  const [tradeType, setTradeType] = useState<string>('buy');
  const [orderType, setOrderType] = useState<string>('limit');

  const { cryptocurrencies, chartData, loading, error } = useCryptoData(selectedCoin, timeframe);

  const handleCoinSelect = (coinId: string) => {
    setSelectedCoin(coinId);
  };

  const handleTimeframeChange = (newTimeframe: TimeFrame) => {
    setTimeframe(newTimeframe);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleTradeType = (type: string) => {
    setTradeType(type);
  };

  const handleOrderType = (type: string) => {
    setOrderType(type);
  };

  const handleSearch = (query: string) => {
    const foundCoin = cryptocurrencies.find(
      crypto => crypto.name.toLowerCase().includes(query.toLowerCase()) || 
                crypto.symbol.toLowerCase().includes(query.toLowerCase())
    );
    
    if (foundCoin) {
      setSelectedCoin(foundCoin.id);
    }
  };
  
  const selectedCoinData = cryptocurrencies.find(crypto => crypto.id === selectedCoin);
  const coinName = selectedCoinData?.name || 'Bitcoin';
  const coinSymbol = selectedCoinData?.symbol?.toUpperCase() || 'BTC';

  // Dynamic styles based on theme
  const tradingStyles = {
    body: {
      backgroundColor: theme === 'dark' ? '#0a0a0e' : '#f5f5f7',
      color: theme === 'dark' ? '#fff' : '#333',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    },
    cryptoCard: {
      backgroundColor: theme === 'dark' ? '#121218' : '#ffffff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
      boxShadow: theme === 'dark' ? 'none' : '0 4px 12px rgba(0,0,0,0.1)',
    },
    tabBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      color: theme === 'dark' ? '#6c757d' : '#757575',
      padding: '10px 15px',
      borderBottom: '2px solid transparent',
      cursor: 'pointer',
    },
    tabBtnActive: {
      color: theme === 'dark' ? '#fff' : '#000',
      borderBottom: '2px solid #6352ff',
    },
    currencySelect: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#1d1d25' : '#f0f0f5',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px 0',
    },
    currencySelectActive: {
      border: '1px solid #6352ff',
    },
    currencyLabel: {
      fontSize: '14px',
      color: theme === 'dark' ? '#6c757d' : '#757575',
    },
    currencyValue: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: theme === 'dark' ? '#fff' : '#333',
    },
    circleIcon: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '8px',
    },
    btcIcon: {
      backgroundColor: '#f7931a',
    },
    usdtIcon: {
      backgroundColor: '#26a17b',
    },
    buyBtn: {
      backgroundColor: '#6352ff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 0',
      width: '100%',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    orderBook: {
      backgroundColor: theme === 'dark' ? '#121218' : '#ffffff',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '20px',
    },
    orderHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontSize: '12px',
      color: theme === 'dark' ? '#6c757d' : '#757575',
    },
    orderItem: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      padding: '5px 0',
    },
    sellItem: {
      backgroundColor: theme === 'dark' ? 'rgba(255, 87, 87, 0.05)' : 'rgba(255, 87, 87, 0.1)',
    },
    buyItem: {
      backgroundColor: theme === 'dark' ? 'rgba(63, 219, 151, 0.05)' : 'rgba(63, 219, 151, 0.1)',
    },
    priceRed: {
      color: '#ff5757',
    },
    priceGreen: {
      color: '#3fdb97',
    },
    orderDepth: {
      height: '4px',
      marginTop: '4px',
    },
    depthRed: {
      backgroundColor: 'rgba(255, 87, 87, 0.3)',
      borderRadius: '0 2px 2px 0',
    },
    depthGreen: {
      backgroundColor: 'rgba(63, 219, 151, 0.3)',
      borderRadius: '2px 0 0 2px',
    },
    bookDivider: {
      backgroundColor: '#6352ff',
      color: 'white',
      textAlign: 'center' as any,
      fontSize: '12px',
      padding: '5px 0',
      borderRadius: '4px',
      margin: '6px 0',
    },
    tabContent: {
      display: 'flex',
      marginTop: '10px',
    },
    tabContentItem: {
      backgroundColor: theme === 'dark' ? '#1d1d25' : '#f0f0f5',
      borderRadius: '5px',
      padding: '8px 12px',
      marginRight: '5px',
      fontSize: '12px',
      color: theme === 'dark' ? '#fff' : '#333',
    },
    tabContentItemActive: {
      backgroundColor: '#6352ff',
      color: 'white',
    },
    chartContainer: {
      marginTop: '20px',
      marginBottom: '20px'
    }
  };

  return (
    <>
      <Navbar />
      <div className={`${styles.tradingPage} py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
        <div className="container-fluid">
          <div className="row mb-3">
            <div className="col-md-9">
              <div style={tradingStyles.chartContainer}>
                <TradeHistory 
                  cryptocurrencies={cryptocurrencies}
                  loading={loading}
                  onSelectCoin={handleCoinSelect}
                />
              </div>
            </div>
            
            {error && (
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                </div>
              </div>
            )}
            
            <div className="col-md-3">
              <div style={tradingStyles.cryptoCard}>
                <div className="d-flex justify-content-between mb-3">
                  <button 
                    style={{...tradingStyles.tabBtn, ...(tradeType === 'buy' ? tradingStyles.tabBtnActive : {})}} 
                    onClick={() => handleTradeType('buy')}>
                    Buy {coinSymbol}
                  </button>
                  <button 
                    style={{...tradingStyles.tabBtn, ...(tradeType === 'sell' ? tradingStyles.tabBtnActive : {})}} 
                    onClick={() => handleTradeType('sell')}>
                    Sell {coinSymbol}
                  </button>
                </div>
                
                <div style={{...tradingStyles.currencySelect, ...(orderType === 'limit' ? tradingStyles.currencySelectActive : {})}}>
                  <div className="form-check me-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="cryptoOption" 
                      id="limitOption" 
                      checked={orderType === 'limit'} 
                      onChange={() => handleOrderType('limit')}
                    />
                    <label className="form-check-label" htmlFor="limitOption">Limit</label>
                  </div>
                </div>
                
                <div style={{...tradingStyles.currencySelect, ...(orderType === 'market' ? tradingStyles.currencySelectActive : {})}}>
                  <div className="form-check me-2">
                    <input 
                      className="form-check-input" 
                      type="radio" 
                      name="cryptoOption" 
                      id="marketOption" 
                      checked={orderType === 'market'}
                      onChange={() => handleOrderType('market')}
                    />
                    <label className="form-check-label" htmlFor="marketOption">Market</label>
                  </div>
                </div>
                
                <div style={tradingStyles.currencySelect}>
                  <div className="flex-grow-1">
                    <div style={tradingStyles.currencyLabel}>Price</div>
                    <div style={tradingStyles.currencyValue}>$38,447.24</div>
                  </div>
                  <div>
                    <span style={{...tradingStyles.circleIcon, ...tradingStyles.usdtIcon}}></span>
                    <span>USDT</span>
                  </div>
                </div>
                
                <div style={tradingStyles.currencySelect}>
                  <div className="flex-grow-1">
                    <div style={tradingStyles.currencyLabel}>{`Amount(${coinSymbol})`}</div>
                    <div style={tradingStyles.currencyValue}>$38,447.24</div>
                  </div>
                  <div>
                    <span style={{...tradingStyles.circleIcon, ...tradingStyles.btcIcon}}></span>
                    <span>{coinSymbol}</span>
                  </div>
                </div>
                
                <div style={tradingStyles.currencySelect}>
                  <div className="flex-grow-1">
                    <div style={tradingStyles.currencyLabel}>Total(USDT)</div>
                    <div style={tradingStyles.currencyValue}>$0</div>
                  </div>
                  <div>
                    <span style={{...tradingStyles.circleIcon, ...tradingStyles.usdtIcon}}></span>
                    <span>USDT</span>
                  </div>
                </div>
                
                <button style={tradingStyles.buyBtn}>
                  {tradeType === 'buy' ? `Buy ${coinSymbol}` : `Sell ${coinSymbol}`}
                </button>
                
                <div className="d-flex justify-content-between mt-4 mb-2">
                  <span style={{ fontSize: '14px', color: theme === 'dark' ? '#fff' : '#333' }}>Order Book</span>
                  <div style={tradingStyles.tabContent}>
                    <div style={{...tradingStyles.tabContentItem, ...tradingStyles.tabContentItemActive}}>0.1%</div>
                    <div style={tradingStyles.tabContentItem}>1%</div>
                    <div style={tradingStyles.tabContentItem}>10%</div>
                  </div>
                </div>
              </div>
              <CryptoPriceCards theme={theme} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WatchListPage;