import { useEffect, useState } from "react";
import type { OrderLevel } from "@/types/orders";
import { fetchOrderBookData } from "@/services/orderBookService";

export const useOrderBooks = (symbol = "BTCUSDT", limit = 5) => {
  const [bids, setBids] = useState<OrderLevel[]>([]);
  const [asks, setAsks] = useState<OrderLevel[]>([]);
  const [lastPrice, setLastPrice] = useState<number | null>(null);
  const [priceChange, setPriceChange] = useState<number | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { bids, asks, lastPrice, priceChange } = await fetchOrderBookData(
          symbol,
          limit
        );
        setBids(bids);
        setAsks(asks);
        setLastPrice(lastPrice);
        setPriceChange(priceChange);
      } catch (err) {
        console.error("Failed to fetch order book:", err);
      }
    };

    getData();
  }, [symbol, limit]);

  return { bids, asks, lastPrice, priceChange };
};
