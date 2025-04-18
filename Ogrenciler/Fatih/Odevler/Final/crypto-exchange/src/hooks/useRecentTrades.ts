import { useEffect, useState } from "react";
import type { Trade } from "@/types/trades";

export const useRecentTrades = (symbol = "BTCUSDT", limit = 12) => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    const fetchRecentTrades = async () => {
      try {
        const res = await fetch(
          `https://testnet.binance.vision/api/v3/trades?symbol=${symbol}&limit=${limit}`
        );
        const data = await res.json();
        setTrades(data);
      } catch (err) {
        console.error("Failed to fetch recent trades:", err);
      }
    };

    fetchRecentTrades();
  }, [symbol, limit]);

  return trades;
};
