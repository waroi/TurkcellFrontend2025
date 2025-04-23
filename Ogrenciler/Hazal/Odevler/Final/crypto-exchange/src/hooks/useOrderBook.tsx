import { useEffect, useState } from 'react';
import { fetchOrderBook } from '@/lib/api/market';
import { useStore } from '@/store/useStore';

type OrderBookEntry = {
  price: number;
  amount: number;
  total: number;
};

export function useOrderBook(symbol: string) {
  const [bids, setBids] = useState<OrderBookEntry[]>([]);
  const [asks, setAsks] = useState<OrderBookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const currentCurrency = useStore((state) => state.currentCurrency);

  const updateOrderBook = async () => {
    try {
      setLoading(true);
      const data = await fetchOrderBook(symbol);
      
      const formatData = (entries: [number, number][]): OrderBookEntry[] => {
        return entries.map(([price, amount]) => ({
          price,
          amount,
          total: price * amount,
        }));
      };

      setBids(formatData(data.bids.slice(0, 10)));
      setAsks(formatData(data.asks.slice(0, 10)));
    } catch (error) {
      console.error('Error fetching order book:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateOrderBook();
    const interval = setInterval(updateOrderBook, 5000);
    return () => clearInterval(interval);
  }, [symbol, currentCurrency]);

  return {
    bids,
    asks,
    loading,
    refresh: updateOrderBook,
  };
}