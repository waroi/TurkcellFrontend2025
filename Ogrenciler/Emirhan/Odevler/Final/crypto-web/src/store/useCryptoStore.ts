import { create } from 'zustand';

type Coin = {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      percent_change_24h: number;
      market_cap: number;
      volume_change_24h: number;
      price: number;
    };
  };
};

type WalletData = Record<
  string,
  {
    coinId: string;
    value: number;
  }
>;

interface StoreState {
  count: number;
  coins: Coin[];
  singleCoin: Coin | null;
  wallet: WalletData; 
  increase: () => void;
  decrease: () => void;
  reset: () => void;
  setCoins: (coins: Coin[]) => void;
  setSingleCoin: (coin: Coin) => void;
  setWallet: (wallet: WalletData) => void; 
}

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
