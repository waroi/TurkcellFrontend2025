
import { create } from "zustand";

type ExchangeStore = {
payAmount: number|null;
  paySymbol: string;
  receiveSymbol: string;
  setPayAmount: (val: number|null) => void;
  setPaySymbol: (symbol: string) => void;
  setReceiveSymbol: (symbol: string) => void;
  setReceiveAmount:(val: number|null) => void;
  receiveAmount: number|null;
  rate:number|null;
  setRate:(val: number|null) => void;

};


export const useExchangeStore = create<ExchangeStore>((set) => ({
payAmount: 0,
receiveAmount: 0,
  paySymbol: "BTC",
  receiveSymbol: "USD",
  rate:null,
  setRate:(val) => set({ rate: val }),
  setPayAmount: (val) => set({ payAmount: val }),
  setReceiveAmount: (val) => set({ receiveAmount: val }),
  setPaySymbol: (symbol) => set({ paySymbol: symbol }),
  setReceiveSymbol: (symbol) => set({ receiveSymbol: symbol }),

}));
