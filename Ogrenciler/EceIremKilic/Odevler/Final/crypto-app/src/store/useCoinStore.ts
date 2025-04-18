import { create } from "zustand";
import { fetchData } from "@/api/fetchData";
type Coin = {
  id: string;
  name: string;
  symbol: string;
  current_price: string;
  market_cap: number;
  price_change_percentage_24h: number;
  image: string;
  high_24h: number;
  low_24h: number;
  total_volume: string;
  sparkline_in_7d: {
    price: number[];
  };
};

type CoinStore = {
  coins: Coin[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

export const useCoinStore = create<CoinStore>((set) => ({
  coins: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchData();
      set({ coins: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
}));
