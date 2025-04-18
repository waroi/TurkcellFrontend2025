import { ICONS } from "./icons";

export type IconName = keyof typeof ICONS;
export type IconProps = {
  name: IconName;
  size?: string;
  className?: string;
  onClick?: () => void
};
export type CoinData = {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      market_cap: number;
      percent_change_24h: number;
    };
  };
};
export type MarketType ={
  marketData:CoinData[]
}