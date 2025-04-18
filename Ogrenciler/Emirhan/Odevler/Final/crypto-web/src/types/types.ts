export type Coin = {
    id: number;
    name: string;
    symbol: string;
    quote: {
      USD: {
        price: number;
        volume_change_24h: number;
        market_cap: number;
        percent_change_24h: number;
      };
    };
  };
  export type Candle = {
    time: number;
    open: number;
    high: number;
    low: number;
    close: number;
  };


  export type MarketCoin = {
    id: number;
    name: string;
    symbol: string;
    quote: {
      USD: {
        price: number;
        volume_change_24h: number;
        market_cap: number;
        percent_change_24h: number;
      };
    };
  };

  export type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    rounded?: "rounded-pill" | "rounded-0";
    px?: string;
    py?: string;
  };

  export type SortKey = "name" | "price" | "percent" | "marketCap";
export type SortOrder = "asc" | "desc";

export type MarketPair = {
  pair: string;
  lastPrice: number;
  change: number;
  favorite: boolean;
};