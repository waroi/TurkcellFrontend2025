
  
  export type TimeFrame = '24h' | '7d' | '30d' | '90d' | '1y';
  
  export interface ChartData {
    labels: string[];
    datasets: any[];
  }

export interface PriceDataPoint {
  timestamp: number;
  price: number;
  close:number,
  high:number,
  low:number,
  volume:number,
  open:number,
}

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  currentPrice: number;
  priceChangePercentage24h: number;
  high24h: number;
  low24h: number;
  priceHistory: PriceDataPoint[] | number[]; 
}