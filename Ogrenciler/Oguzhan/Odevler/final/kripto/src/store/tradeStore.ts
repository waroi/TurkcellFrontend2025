import { create } from "zustand";
import {
  saveTradeAndBalance,
  getTradesAndBalance,
  Trade,
} from "@/services/tradeService";
import { useAuthStore } from "@/store/authStore";

type TradeState = {
  balance: number;
  trades: Trade[];
  buy: (coinId: string, price: number, amount: number) => Promise<void>;
  sell: (coinId: string, price: number, amount: number) => Promise<void>;
  fetchTradesAndBalance: () => Promise<void>; 
};

export const useTradeStore = create<TradeState>((set, get) => ({
  balance: 100000,
  trades: [],


  fetchTradesAndBalance: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return;
    try {
      const { trades, balance } = await getTradesAndBalance(user.uid);
      set({ trades, balance });
    } catch (error) {
      console.error("Veri çekilemedi:", error);
    }
  },

  buy: async (coinId, price, amount) => {
    const user = useAuthStore.getState().user;
    if (!user) throw new Error("Giriş yapmalısınız!");
    try {
      const totalCost = price * amount;
      const currentBalance = get().balance;

      if (currentBalance < totalCost) throw new Error("Yetersiz bakiye");

      const newTrade: Trade = {
        coinId,
        type: "BUY",
        amount,
        price,
        timestamp: Date.now(),
      };

      const newBalance = currentBalance - totalCost;
      await saveTradeAndBalance(user.uid, newTrade, newBalance);
      set({ balance: newBalance, trades: [...get().trades, newTrade] });
      
      await get().fetchTradesAndBalance();
    } catch (error) {
      console.error("Alım hatası:", error);
      throw error;
    }
  },

  sell: async (coinId, price, amount) => {
    const user = useAuthStore.getState().user;
    if (!user) throw new Error("Giriş yapmalısınız!");
    try {
      const total = price * amount;
      const currentBalance = get().balance;
      const currentTrades = get().trades;

      const currentAmount = currentTrades
        .filter((t) => t.coinId === coinId)
        .reduce(
          (acc, t) => (t.type === "BUY" ? acc + t.amount : acc - t.amount),
          0
        );

      if (currentAmount < amount) throw new Error("Yetersiz miktar");

      const newTrade: Trade = {
        coinId,
        type: "SELL",
        amount,
        price,
        timestamp: Date.now(),
      };

      const newBalance = currentBalance + total;

      await saveTradeAndBalance(user.uid, newTrade, newBalance);
      set({ balance: newBalance, trades: [...currentTrades, newTrade] });
      await get().fetchTradesAndBalance();
      
    } catch (error) {
      console.error("Satım hatası:", error);
      throw error;
    }
  },
}));