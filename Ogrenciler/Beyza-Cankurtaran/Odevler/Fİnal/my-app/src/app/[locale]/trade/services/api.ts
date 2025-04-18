import { CryptoCurrency, PriceDataPoint, TimeFrame } from '../types/crypto';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoCurrencies = async (): Promise<CryptoCurrency[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrencies');
    }
    
    const data = await response.json();
    
    return data.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol.toUpperCase(),
      currentPrice: coin.current_price,
      priceChangePercentage24h: coin.price_change_percentage_24h,
      high24h: coin.high_24h,
      low24h: coin.low_24h,
      priceHistory: []
    }));
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    throw error;
  }
};

export const fetchCryptoChartData = async (
  coinId: string,
  timeframe: TimeFrame
): Promise<PriceDataPoint[]> => {
  try {
    const days = timeframe === '24h' ? 1 : 
                timeframe === '7d' ? 7 : 
                timeframe === '30d' ? 30 :
                timeframe === '90d' ? 90 : 365;
                
    const response = await fetch(
      `${API_BASE_URL}/coins/${coinId}/ohlc?vs_currency=usd&days=${days}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch chart data');
    }
    
    const data = await response.json();
    return data.map((item: any) => ({
      timestamp: item[0],
      open: item[1],
      high: item[2],
      low: item[3],
      close: item[4],
      volume: 0 
    }));
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};