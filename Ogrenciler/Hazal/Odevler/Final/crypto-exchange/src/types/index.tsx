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
    max_supply: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: null | {
      times: number;
      currency: string;
      percentage: number;
    };
    last_updated: string;
    sparkline_in_7d?: {
      price: number[];
    };
  }
  
  export interface PortfolioItem {
    coinId: string;
    amount: number;
    buyPrice: number;
    dateAdded: string;
  }
  
  export interface Order {
    id: string;
    coinId: string;
    type: 'buy' | 'sell' | 'market' | 'limit';
    amount: number;
    price: number;
    date: string;
    status: 'completed' | 'pending' | 'cancelled';
  }

  export interface Asset {
    coinId: string;
    name: string;
    amount: number;
    buyPrice: number;
    value: number;
    profit: number;
  }

  export interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: string;
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
  }