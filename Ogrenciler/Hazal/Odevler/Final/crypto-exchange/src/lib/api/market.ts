import { CryptoCurrency } from '@/types'

export async function fetchMarketData(): Promise<CryptoCurrency[]> {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d'
      );
      if (!response.ok) throw new Error('Failed to fetch market data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching market data:', error);
      return [];
    }
  }
  
  export async function fetchCoinData(coinId: string): Promise<CryptoCurrency | null> {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      if (!response.ok) throw new Error('Failed to fetch coin data');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching data for coin ${coinId}:`, error);
      return null;
    }
  }
  
  export async function fetchHistoricalData(
    coinId: string,
    days: number = 365
  ): Promise<{ prices: [number, number][] }> {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`
      );
      if (!response.ok) throw new Error('Failed to fetch historical data');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching historical data for ${coinId}:`, error);
      return { prices: [] };
    }
  }

  export async function fetchOrderBook(
    symbol: string
  ): Promise<{ bids: [number, number][]; asks: [number, number][] }> {
    try {
      return {
        bids: [
          [50000, 1.5],
          [49950, 2.3],
          [49900, 0.8],
        ],
        asks: [
          [50100, 2.1],
          [50150, 1.7],
          [50200, 3.2],
        ],
      };
    } catch (error) {
      console.error('Error fetching order book:', error);
      return { bids: [], asks: [] };
    }
  }