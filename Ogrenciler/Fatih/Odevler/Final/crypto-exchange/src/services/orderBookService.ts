import type { OrderLevel } from "@/types/orders";

export const fetchOrderBookData = async (
  symbol: string,
  limit: number
): Promise<{
  bids: OrderLevel[];
  asks: OrderLevel[];
  lastPrice: number;
  priceChange: number;
}> => {
  const [depthRes, tickerRes] = await Promise.all([
    fetch(
      `https://testnet.binance.vision/api/v3/depth?symbol=${symbol}&limit=${limit}`
    ),
    fetch(`https://testnet.binance.vision/api/v3/ticker/24hr?symbol=${symbol}`),
  ]);

  const depthData = await depthRes.json();
  const tickerData = await tickerRes.json();

  return {
    bids: depthData.bids.map(([price, amount]: string[]) => ({
      price,
      amount,
    })),
    asks: depthData.asks.map(([price, amount]: string[]) => ({
      price,
      amount,
    })),
    lastPrice: parseFloat(tickerData.lastPrice),
    priceChange: parseFloat(tickerData.priceChangePercent),
  };
};
