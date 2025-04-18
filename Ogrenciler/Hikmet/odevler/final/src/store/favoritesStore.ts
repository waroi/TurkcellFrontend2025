import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
	favorites: string[];
	setFavorites: (ids: string[]) => void;
	addFavorite: (id: string) => void;
	removeFavorite: (id: string) => void;
	isFavorite: (id: string) => boolean;
};

export const useFavoriteStore = create<FavoriteStore>()(
	persist(
		(set, get) => ({
			favorites: [],
			setFavorites: (ids) => set({ favorites: ids }),
			addFavorite: (id) => set({ favorites: [...get().favorites, id] }),
			removeFavorite: (id) =>
				set({ favorites: get().favorites.filter((fav) => fav !== id) }),
			isFavorite: (id) => get().favorites.includes(id),
		}),
		{
			name: "favorites-storage",
		}
	)
);
