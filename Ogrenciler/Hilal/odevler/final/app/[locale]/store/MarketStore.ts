import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MarketStore {
  marketData: any[];
  setMarketData: (marketData: any[]) => void;
}

export const useMarketStore = create<MarketStore>()(
  persist(
    (set) => ({
      marketData:[],
      setMarketData: (marketData) => {
        set({ marketData: marketData });
      },
    }),
    {
      name: "market-storage", 
    }
  )
);
