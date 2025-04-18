import axios from 'axios';

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
  sparkline_in_7d: {
    price: number[];
  };
}

export interface MarketData {
  total_market_cap: { [key: string]: number };
  total_volume: { [key: string]: number };
  market_cap_percentage: { [key: string]: number };
  market_cap_change_percentage_24h_usd: number;
}

export const getCryptocurrencies = async (
  currency = 'usd',
  perPage = 50,
  page = 1,
  sparkline = true
): Promise<CryptoCurrency[]> => {
  try {
    const apiUrl = '/api/crypto/market';
    console.log('Calling API at:', apiUrl);
    
    const response = await axios.get(apiUrl, {
      params: {
        action: 'getMarket',
        currency,
        per_page: perPage,
        page,
        sparkline
      }
    });
    console.log('API response:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    try {
      const fallbackResponse = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          vs_currency: currency,
          order: 'market_cap_desc',
          per_page: perPage,
          page: page,
          sparkline: sparkline,
          price_change_percentage: '24h'
        }
      });
      return fallbackResponse.data;
    } catch (fallbackError) {
      console.error('Fallback API call also failed:', fallbackError);
      throw fallbackError;
    }
  }
};

export const getGlobalMarketData = async (): Promise<MarketData> => {
  try {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const response = await axios.get(`${origin}/api/crypto/market`, {
      params: {
        action: 'getGlobal'
      }
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching global market data:', error);
    
    try {
      const fallbackResponse = await axios.get('https://api.coingecko.com/api/v3/global');
      return fallbackResponse.data.data;
    } catch (fallbackError) {
      console.error('Fallback API call also failed:', fallbackError);
      throw fallbackError;
    }
  }
};

export const getBinanceTickerPrice = async (symbol: string): Promise<number> => {
  try {
    const response = await axios.get('/api/crypto/market', {
      params: {
        action: 'getBinancePrice',
        symbol
      }
    });
    return parseFloat(response.data.price);
  } catch (error) {
    console.error(`Error fetching ${symbol} price:`, error);
    throw error;
  }
};

export const getTopGainers = async (limit = 10): Promise<CryptoCurrency[]> => {
  try {
    const cryptos = await getCryptocurrencies('usd', 100);
    return cryptos
      .sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top gainers:', error);
    throw error;
  }
};

export const getTopLosers = async (limit = 10): Promise<CryptoCurrency[]> => {
  try {
    const cryptos = await getCryptocurrencies('usd', 100);
    return cryptos
      .sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top losers:', error);
    throw error;
  }
};

export const getTopByTradingVolume = async (limit = 10): Promise<CryptoCurrency[]> => {
  try {
    const cryptos = await getCryptocurrencies('usd', 100);
    return cryptos
      .sort((a, b) => b.total_volume - a.total_volume)
      .slice(0, limit);
  } catch (error) {
    console.error('Error fetching top by trading volume:', error);
    throw error;
  }
};