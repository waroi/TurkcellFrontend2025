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
  