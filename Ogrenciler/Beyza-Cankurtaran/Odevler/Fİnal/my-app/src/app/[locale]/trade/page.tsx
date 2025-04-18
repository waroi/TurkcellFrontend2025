"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { ThemeProvider, useTheme } from '../../context/ThemeContext';
import { useCryptoData } from './hooks/useCryptoData'; 
import CryptoChart from './components/CryptoChart'; 
import TradeHistory from './components/TradeHistory'; 
import TradingTabs from './components/TradingTabs'; 
import SearchBar from './components/SearchBar'; 
import { TimeFrame } from './types/crypto';
import styles from './styles/Trading.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CryptoPriceCards from '@/components/CryptoPriceCards';

const tradingStyles = {
  body: {
    backgroundColor: '#0a0a0e',
    color: '#fff',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  },
  cryptoCard: {
    backgroundColor: '#121218',
    borderRadius: '12px',
    padding: '20px',
    marginBottom: '20px',
  },
  tabBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#6c757d',
    padding: '10px 15px',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
  },
  tabBtnActive: {
    color: '#fff',
    borderBottom: '2px solid #6352ff',
  },
  currencySelect: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1d1d25',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px 0',
  },
  currencySelectActive: {
    border: '1px solid #6352ff',
  },
  currencyLabel: {
    fontSize: '14px',
    color: '#6c757d',
  },
  currencyValue: {
    fontSize: '18px',
    fontWeight: 'bold',
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
    backgroundColor: '#121218',
    borderRadius: '12px',
    padding: '15px',
    marginBottom: '20px',
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
    fontSize: '12px',
    color: '#6c757d',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    padding: '5px 0',
  },
  sellItem: {
    backgroundColor: 'rgba(255, 87, 87, 0.05)',
  },
  buyItem: {
    backgroundColor: 'rgba(63, 219, 151, 0.05)',
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
    textAlign: 'center'as any,
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
    backgroundColor: '#1d1d25',
    borderRadius: '5px',
    padding: '8px 12px',
    marginRight: '5px',
    fontSize: '12px',
  },
  tabContentItemActive: {
    backgroundColor: '#6352ff',
  },
  chartContainer: {
    marginTop: '20px',
    marginBottom: '20px'
  }
};

const TradingPage: React.FC = () => {
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

  return (
    <>
      <Navbar />
      <div className={`${styles.tradingPage} container-fluid bg-dark text-light py-4`}>
        <div className="row mb-3">
          <CryptoPriceCards theme={theme} />
          <div className="col-md-4">
            <h1>{coinName} to USD Chart</h1>
            <p className="text-muted">Real-time cryptocurrency trading data and charts.</p>
          </div>
          <div className="col-md-4 d-flex align-items-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-9">
            <TradingTabs activeTab={activeTab} onTabChange={handleTabChange} />
            <div style={tradingStyles.chartContainer}>
              <CryptoChart 
                data={chartData}
                timeframe={timeframe}
                onTimeframeChange={handleTimeframeChange}
                coinName={coinName}
                loading={loading}
              />
            </div>
            
            <TradeHistory 
              cryptocurrencies={cryptocurrencies}
              loading={loading}
              onSelectCoin={handleCoinSelect}
            />
          </div>
          
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
                <span style={{ fontSize: '14px' }}>Order Book</span>
                <div style={tradingStyles.tabContent}>
                  <div style={{...tradingStyles.tabContentItem, ...tradingStyles.tabContentItemActive}}>0.1%</div>
                  <div style={tradingStyles.tabContentItem}>1%</div>
                  <div style={tradingStyles.tabContentItem}>10%</div>
                </div>
              </div>
            </div>
            <div style={tradingStyles.orderBook}>
              <div style={tradingStyles.orderHeader}>
                <span>Price(USDT)</span>
                <span>{`Amount(${coinSymbol})`}</span>
                <span>Total</span>
              </div>
              <div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,493.15</span>
                  <span>0.015437</span>
                  <span>594.28</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '25%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,491.13</span>
                  <span>0.049320</span>
                  <span>1,898.17</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '50%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,490.41</span>
                  <span>0.200000</span>
                  <span>7,698.08</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '75%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,490.40</span>
                  <span>0.125000</span>
                  <span>4,811.30</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '50%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,490.11</span>
                  <span>0.080000</span>
                  <span>3,079.21</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '40%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.sellItem}}>
                  <span style={tradingStyles.priceRed}>38,490.10</span>
                  <span>0.182020</span>
                  <span>7,006.15</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthRed, width: '60%'}}></div>
                </div>
              </div>
              <div style={tradingStyles.bookDivider}>
                <span>$38,490.10</span>
              </div>
              <div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.12</span>
                  <span>0.082000</span>
                  <span>3,152.91</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '30%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.11</span>
                  <span>0.125000</span>
                  <span>4,806.26</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '50%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.10</span>
                  <span>0.050000</span>
                  <span>1,922.51</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '20%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.09</span>
                  <span>0.061870</span>
                  <span>2,378.73</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '25%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.08</span>
                  <span>0.100000</span>
                  <span>3,845.01</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '40%'}}></div>
                </div>
                <div style={{...tradingStyles.orderItem, ...tradingStyles.buyItem}}>
                  <span style={tradingStyles.priceGreen}>38,450.07</span>
                  <span>0.175000</span>
                  <span>6,728.76</span>
                  <div style={{...tradingStyles.orderDepth, ...tradingStyles.depthGreen, width: '60%'}}></div>
                </div>
              </div>
            </div>
          </div>
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
      <Footer />
    </>
  );
};

export default TradingPage;