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
  favCoins: Coin[];
  allCoins: Coin[];
  loading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
  addFav: (coin: Coin) => void;
  removeFav: (id: string) => void;
  isFav: (id: string) => boolean;
  searchCoin: (name: string) => Coin[];
  sortCoins: (key: SortKey, direction: "asc" | "desc") => Coin[];
};

type SortKey =
  | "name"
  | "current_price"
  | "price_change_percentage_24h"
  | "total_volume";

export const useCoinStore = create<CoinStore>((set, get) => ({
  coins: [],
  favCoins: [],
  allCoins: [],
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const data = await fetchData();
      set({ coins: data, allCoins: data, loading: false });
    } catch (err: any) {
      set({ error: err.message, loading: false });
    }
  },
  addFav: (coin) => {
    const { favCoins } = get();
    if (!favCoins.find((c) => c.id === coin.id)) {
      set({ favCoins: [...favCoins, coin] });
    }
  },
  removeFav: (id) => {
    const { favCoins } = get();
    set({ favCoins: favCoins.filter((coin) => coin.id !== id) });
  },
  isFav: (id) => {
    return get().favCoins.some((coin) => coin.id === id);
  },
  searchCoin: (name) => {
    const { allCoins } = get();
    const filtered = allCoins.filter((coin) =>
      coin.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
    set({ coins: filtered });
    return filtered;
  },
  sortCoins: (key, direction) => {
    const { coins } = get();
    const sorted = [...coins].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];
      if (direction === "asc") return valA > valB ? 1 : -1;
      return valA < valB ? 1 : -1;
    });
    set({ coins: sorted });
    return sorted;
  },
}));
