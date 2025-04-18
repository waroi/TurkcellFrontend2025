// store/tradeStore.ts
import { create } from 'zustand';

export type Trade = {
  id: string;
  type: 'buy' | 'sell';
  orderType: 'limit' | 'market' | 'stopLimit' | 'stopMarket';
  payAmount: string;
  payCurrency: string;
  receiveAmount: string;
  receiveCurrency: string;
  timestamp: number;
};

type TradeState = {
  trades: Trade[];
  addTrade: (trade: Trade) => void;
};

export const useTradeStore = create<TradeState>()((set) => ({
  trades: [],
  addTrade: (trade) =>
    set((state) => ({ trades: [trade, ...state.trades] })),
}));
