export interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  high_24h: number;
  low_24h: number;
  market_cap: number;
}

export interface TradeInfo {
  id: string;
  name: string;
  logo: string;
  price: number;
  symbol: string;
}

export interface WatchlistItem {
  id: string;
  userId: string;
  cryptoId: string;
}

export interface User {
  id: string;
  email: string;
  watchlist: string[];
}

export interface UserProfile {
  email: string;
  nickname: string;
  phone: string;
  country: string;
  uid: string;
}

export interface Trade {
  id: string;
  userId: string;
  cryptoId: string;
  type: 'buy' | 'sell';
  amount: number;
  price: number;
  timestamp: Date;
}