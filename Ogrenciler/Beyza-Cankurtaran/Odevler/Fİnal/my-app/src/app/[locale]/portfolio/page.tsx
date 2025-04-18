"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useCryptoData } from '../trade/hooks/useCryptoData';
import { TimeFrame } from '../trade/types/crypto';
import styles from '../trade/styles/Trading.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CryptoPriceCards from '../trade/components/CryptoPriceCards';
import PortfolioSummary from './components/PortfolioSummary';
import CryptoAssetsTable from './components/CryptoAssetsTable';

const Portfolio: React.FC = () => {
    const [selectedCoin, setSelectedCoin] = useState<string>('bitcoin');
    const { theme } = useTheme();
    const [timeframe, setTimeframe] = useState<TimeFrame>('24h');
    const [tradeType, setTradeType] = useState<string>('buy');
    const [orderType, setOrderType] = useState<string>('limit');

    const { cryptocurrencies, loading, error } = useCryptoData(selectedCoin, timeframe);

    const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
    const textClass = theme === 'dark' ? 'text-white' : 'text-dark';

    const cryptoCardStyle = {
        backgroundColor: theme === 'dark' ? '#121218' : '#f8f9fa',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
        color: theme === 'dark' ? '#fff' : '#212529'
    };
    
    const tabBtnStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: theme === 'dark' ? '#6c757d' : '#6c757d',
        padding: '10px 15px',
        borderBottom: '2px solid transparent',
        cursor: 'pointer',
    };
    
    const tabBtnActiveStyle = {
        color: theme === 'dark' ? '#fff' : '#212529',
        borderBottom: '2px solid #6352ff',
    };
    
    const currencySelectStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme === 'dark' ? '#1d1d25' : '#e9ecef',
        borderRadius: '8px',
        padding: '10px',
        margin: '10px 0',
    };
    
    const buyBtnStyle = {
        backgroundColor: '#6352ff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 0',
        width: '100%',
        fontWeight: 'bold',
        marginTop: '10px',
    };

    const handleTradeType = (type: string) => {
        setTradeType(type);
    };

    const handleOrderType = (type: string) => {
        setOrderType(type);
    };

    const selectedCoinData = cryptocurrencies.find(crypto => crypto.id === selectedCoin);
    const coinSymbol = selectedCoinData?.symbol?.toUpperCase() || 'BTC';

    return (
        <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
            <Navbar />
            <div className={`${styles.tradingPage} container-fluid py-4`}>
                <div className="row mb-3">
                    <div className="col-md-9">
                        <div className={`${bgClass} ${textClass} min-vh-75`}>
                            <div className="container-fluid py-4">
                                <PortfolioSummary />
                                <CryptoAssetsTable />
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
                    <div className="col-md-3">
                        <div style={cryptoCardStyle}>
                            <div className="d-flex justify-content-between mb-3">
                                <button
                                    style={{ ...tabBtnStyle, ...(tradeType === 'buy' ? tabBtnActiveStyle : {}) }}
                                    onClick={() => handleTradeType('buy')}>
                                    Buy {coinSymbol}
                                </button>
                                <button
                                    style={{ ...tabBtnStyle, ...(tradeType === 'sell' ? tabBtnActiveStyle : {}) }}
                                    onClick={() => handleTradeType('sell')}>
                                    Sell {coinSymbol}
                                </button>
                            </div>

                            <div style={{ ...currencySelectStyle, ...(orderType === 'limit' ? { border: '1px solid #6352ff' } : {}) }}>
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

                            <div style={{ ...currencySelectStyle, ...(orderType === 'market' ? { border: '1px solid #6352ff' } : {}) }}>
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

                            <div style={currencySelectStyle}>
                                <div className="flex-grow-1">
                                    <div style={{ fontSize: '14px', color: theme === 'dark' ? '#6c757d' : '#6c757d' }}>Price</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$38,447.24</div>
                                </div>
                                <div>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', marginRight: '8px', backgroundColor: '#26a17b' }}></span>
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div style={currencySelectStyle}>
                                <div className="flex-grow-1">
                                    <div style={{ fontSize: '14px', color: theme === 'dark' ? '#6c757d' : '#6c757d' }}>{`Amount(${coinSymbol})`}</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$38,447.24</div>
                                </div>
                                <div>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', marginRight: '8px', backgroundColor: '#f7931a' }}></span>
                                    <span>{coinSymbol}</span>
                                </div>
                            </div>

                            <div style={currencySelectStyle}>
                                <div className="flex-grow-1">
                                    <div style={{ fontSize: '14px', color: theme === 'dark' ? '#6c757d' : '#6c757d' }}>Total(USDT)</div>
                                    <div style={{ fontSize: '18px', fontWeight: 'bold' }}>$0</div>
                                </div>
                                <div>
                                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', marginRight: '8px', backgroundColor: '#26a17b' }}></span>
                                    <span>USDT</span>
                                </div>
                            </div>

                            <button style={buyBtnStyle}>
                                {tradeType === 'buy' ? `Buy ${coinSymbol}` : `Sell ${coinSymbol}`}
                            </button>

                            <div className="d-flex justify-content-between mt-4 mb-2">
                                <span style={{ fontSize: '14px' }}>Order Book</span>
                                <div style={{ display: 'flex', marginTop: '10px' }}>
                                    <div style={{ 
                                        backgroundColor: '#6352ff', 
                                        borderRadius: '5px', 
                                        padding: '8px 12px', 
                                        marginRight: '5px', 
                                        fontSize: '12px',
                                        color: 'white'
                                    }}>0.1%</div>
                                    <div style={{ 
                                        backgroundColor: theme === 'dark' ? '#1d1d25' : '#e9ecef', 
                                        borderRadius: '5px', 
                                        padding: '8px 12px', 
                                        marginRight: '5px', 
                                        fontSize: '12px'
                                    }}>1%</div>
                                    <div style={{ 
                                        backgroundColor: theme === 'dark' ? '#1d1d25' : '#e9ecef', 
                                        borderRadius: '5px', 
                                        padding: '8px 12px', 
                                        marginRight: '5px', 
                                        fontSize: '12px'
                                    }}>10%</div>
                                </div>
                            </div>
                        </div>
                        <CryptoPriceCards theme={theme} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Portfolio;