import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  favoriteCoins: string[];
};

interface UserStore {
  user: User;
  setUser: (user: User) => void;
  toggleFavorite: (coinSymbol: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: {
        favoriteCoins: [],
      },
      setUser: (user) => set({ user }),

      toggleFavorite: (coinSymbol: string) => {
        const currentFavorites = get().user.favoriteCoins;
        const isFavorite = currentFavorites.includes(coinSymbol);

        const updatedFavorites = isFavorite
          ? currentFavorites.filter((item) => item !== coinSymbol)
          : [...currentFavorites, coinSymbol];

        set({
          user: {
            ...get().user,
            favoriteCoins: updatedFavorites,
          },
        });
      },
    }),
    {
      name: "user-storage",
    }
  )
);
