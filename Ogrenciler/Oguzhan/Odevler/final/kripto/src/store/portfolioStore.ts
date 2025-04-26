import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type Transaction = {
  id: string;
  coinId: string;
  type: "BUY" | "SELL";
  amount: number;
  price: number;
  timestamp: number;
};

type PortfolioState = {
  balance: number;
  holdings: Record<string, number>;
  transactions: Transaction[];
  initialize: (initialBalance: number) => void;
  buy: (coinId: string, amount: number, price: number) => void;
  sell: (coinId: string, amount: number, price: number) => void;
};

export const usePortfolioStore = create<PortfolioState>()(
  immer((set) => ({
    balance: 0,
    holdings: {},
    transactions: [],
    
    initialize: (initialBalance) => set({ balance: initialBalance }),
    
    buy: (coinId, amount, price) => set((state) => {
      const totalCost = amount * price;
      if (state.balance < totalCost) throw new Error("Insufficient balance");
      
      state.balance -= totalCost;
      state.holdings[coinId] = (state.holdings[coinId] || 0) + amount;
      state.transactions.push({
        id: Math.random().toString(),
        coinId,
        type: "BUY",
        amount,
        price,
        timestamp: Date.now()
      });
    }),
    
    sell: (coinId, amount, price) => set((state) => {
      if (!state.holdings[coinId] || state.holdings[coinId] < amount) 
        throw new Error("Insufficient holdings");
      
      state.balance += amount * price;
      state.holdings[coinId] -= amount;
      state.transactions.push({
        id: Math.random().toString(),
        coinId,
        type: "SELL",
        amount,
        price,
        timestamp: Date.now()
      });
    }),
  }))
);