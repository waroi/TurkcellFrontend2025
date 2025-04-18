export type CoinData = {
  name: string;
  symbol: string;
  image: string;
  currency: string;
  marketCap: string;
  currentPrice: string;
  priceChangePercentage24h: number;
  yesterdayPrice: number;
  sparklineSevenDays: number[];
};
