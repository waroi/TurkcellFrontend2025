export interface CryptoInfo {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  logo: string;
  description: string;
  urls: {
    website: string[];
    technical_doc: string[];
    twitter: string[];
    reddit: string[];
  };
}

export interface CryptoPrice {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  quote: {
    USD: {
      price: number;
      volume_change_24h: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d?: number;
      percent_change_60d?: number;
      percent_change_90d?: number;
      market_cap: number;
    };
  };
}
export interface CombinedData {
  id: number;
  rank: number;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  market_cap: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  percent_change_30d: number;
  percent_change_60d: number;
  percent_change_90d: number;
  sparklineData: number[];
}
export interface CryptoOhlcvStats {
  id: number;
  lastPrice: number;
  volume24h: number;
  high: number;
  low: number;
}