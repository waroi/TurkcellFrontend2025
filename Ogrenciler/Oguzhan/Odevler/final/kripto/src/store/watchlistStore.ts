import { create } from "zustand";

import { useAuthStore } from "@/store/authStore";
import { addToWatchlist, fetchWatchlist, removeFromWatchlist } from "@/services/watchlistService";

interface WatchlistState {
  watchlist: string[];
  loading: boolean;
  fetchUserWatchlist: () => Promise<void>;
  addCoinToWatchlist: (coinId: string) => Promise<void>;
  removeCoinFromWatchlist: (coinId: string) => Promise<void>;
  isInWatchlist: (coinId: string) => boolean;
  toggleCoin: (coinId: string) => void;
}

export const useWatchlistStore = create<WatchlistState>((set, get) => ({
  watchlist: [],
  loading: false,

  fetchUserWatchlist: async () => {
    const user = useAuthStore.getState().user;
    if (!user) return;
  
    set({ loading: true });
    try {
      const watchlist = await fetchWatchlist(user.uid);
      set({ watchlist });
    } catch (error) {
      console.error("Watchlist çekme hatası:", error);
    } finally {
      set({ loading: false });
    }
  },

  addCoinToWatchlist: async (coinId) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    await addToWatchlist(user.uid, coinId);
    set((state) => ({
      watchlist: [...state.watchlist, coinId],
    }));
  },

  removeCoinFromWatchlist: async (coinId) => {
    const user = useAuthStore.getState().user;
    if (!user) return;

    await removeFromWatchlist(user.uid, coinId);
    set((state) => ({
      watchlist: state.watchlist.filter((id) => id !== coinId),
    }));
  },

  isInWatchlist: (coinId) => {
    return get().watchlist.includes(coinId);
  },

toggleCoin: async (coinId) => {
  const user = useAuthStore.getState().user;
  if (!user) return;

  const { isInWatchlist } = get();
  
  try {
    if (isInWatchlist(coinId)) {
      await removeFromWatchlist(user.uid, coinId); 
      set({ watchlist: get().watchlist.filter(id => id !== coinId) });
    } else {
      await addToWatchlist(user.uid, coinId); 
      set({ watchlist: [...get().watchlist, coinId] });
    }
  } catch (error) {
    console.error("Watchlist güncelleme hatası:", error);
  }
},
}));
