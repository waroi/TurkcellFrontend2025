export interface CryptoCurrency {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    priceChangePercentage24h: number;
    high24h: number;
    low24h: number;
    priceHistory: PriceDataPoint[];
  }
  
  export interface PriceDataPoint {
    timestamp: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    price: number;
  }
  
  export type TimeFrame = '24h' | '7d' | '30d' | '90d' | '1y';
  
  export interface ChartData {
    labels: string[];
    datasets: any[];
  }