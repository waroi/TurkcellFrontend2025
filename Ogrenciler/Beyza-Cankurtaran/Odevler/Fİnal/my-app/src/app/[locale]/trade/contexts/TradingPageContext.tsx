import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TimeFrame } from '../types/crypto';
import { useCryptoData } from '../hooks/useCryptoData';

interface TradingPageContextProps {
  selectedCoin: string;
  setSelectedCoin: (coinId: string) => void;
  timeframe: TimeFrame;
  setTimeframe: (timeframe: TimeFrame) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tradeType: string;
  setTradeType: (type: string) => void;
  orderType: string;
  setOrderType: (type: string) => void;
  cryptocurrencies: any[];
  chartData: any[];
  loading: boolean;
  error: string | null;
  handleSearch: (query: string) => void;
  selectedCoinData: any;
  coinName: string;
  coinSymbol: string;
}

const TradingPageContext = createContext<TradingPageContextProps | undefined>(undefined);

export const useTradingPage = () => {
  const context = useContext(TradingPageContext);
  if (!context) {
    throw new Error('useTradingPage must be used within a TradingPageProvider');
  }
  return context;
};

interface TradingPageProviderProps {
  children: ReactNode;
}

export const TradingPageProvider: React.FC<TradingPageProviderProps> = ({ children }) => {
  const [selectedCoin, setSelectedCoin] = useState<string>('bitcoin');
  const [timeframe, setTimeframe] = useState<TimeFrame>('24h');
  const [activeTab, setActiveTab] = useState<string>('price');
  const [tradeType, setTradeType] = useState<string>('buy');
  const [orderType, setOrderType] = useState<string>('limit');

  const { cryptocurrencies, chartData, loading, error } = useCryptoData(selectedCoin, timeframe);

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

  const value = {
    selectedCoin,
    setSelectedCoin,
    timeframe,
    setTimeframe,
    activeTab,
    setActiveTab,
    tradeType,
    setTradeType,
    orderType,
    setOrderType,
    cryptocurrencies,
    chartData,
    loading,
    error,
    handleSearch,
    selectedCoinData,
    coinName,
    coinSymbol
  };

  return (
    <TradingPageContext.Provider value={value}>
      {children}
    </TradingPageContext.Provider>
  );
};