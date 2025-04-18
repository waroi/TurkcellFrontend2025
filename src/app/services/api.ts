import { CryptoData } from '../types/crypto';

const API_URL = 'https://testnet.binance.vision/api/v3';

const formatMarketData = (data: any): CryptoData => ({
  id: data.symbol,
  symbol: data.symbol,
  name: data.symbol.replace('USDT', ''),
  current_price: parseFloat(data.lastPrice),
  price_change_percentage_24h: parseFloat(data.priceChangePercent),
  high_24h: parseFloat(data.highPrice),
  low_24h: parseFloat(data.lowPrice),
  market_cap: parseFloat(data.quoteVolume),
});

export const fetchTopCryptos = async (): Promise<CryptoData[]> => {
  try {
    const res = await fetch(`${API_URL}/ticker/24hr`);
    const data = await res.json();

    const usdtPairs = data
      .filter((item: any) => item.symbol.endsWith('USDT'))
      .slice(0, 30);

    return usdtPairs.map(formatMarketData);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return getMockData();
  }
};

export const fetchCryptoPrice = async (symbol: string): Promise<number> => {
  try {
    const res = await fetch(`${API_URL}/ticker/price?symbol=${symbol}USDT`);
    const data = await res.json();
    return parseFloat(data.price);
  } catch (error) {
    console.error('Error fetching crypto price:', error);
    return 0;
  }
};

const getMockData = (): CryptoData[] => {
  const mockCoins = [
    { symbol: 'BTCUSDT', lastPrice: '45000', priceChangePercent: '2.5', highPrice: '46000', lowPrice: '44000', quoteVolume: '1000000000' },
    { symbol: 'ETHUSDT', lastPrice: '3000', priceChangePercent: '1.8', highPrice: '3100', lowPrice: '2900', quoteVolume: '500000000' },
    { symbol: 'BNBUSDT', lastPrice: '400', priceChangePercent: '-0.5', highPrice: '405', lowPrice: '395', quoteVolume: '100000000' },
  ];

  return mockCoins.map(formatMarketData);
};
