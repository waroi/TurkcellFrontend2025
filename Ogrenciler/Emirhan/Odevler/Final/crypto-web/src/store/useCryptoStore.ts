import { StoreState } from '@/types/types';
import { create } from 'zustand';

const useCryptoStore = create<StoreState>((set) => ({
  count: 0,
  coins: [],
  singleCoin: null,
  wallet: {}, 
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCoins: (coins) => set({ coins }),
  setSingleCoin: (coin) => set({ singleCoin: coin }),
  setWallet: (wallet) => set({ wallet }), 
}));

export default useCryptoStore;
