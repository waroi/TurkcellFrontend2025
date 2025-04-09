import { create } from 'zustand';


const useFavoritesStore = create((set) => ({

  favorites: [],
  
  
  addToFavorites: (product) => {
    set((state) => {

      if (state.favorites.some(item => item.id === product.id)) {
        return state;
      }
      
     
      const newFavorites = [...state.favorites, product];
      

      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      }
      
      return { favorites: newFavorites };
    });
  },
  
  removeFromFavorites: (productId) => {
    set((state) => {

      const newFavorites = state.favorites.filter(item => item.id !== productId);
      
 
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      }
      
      return { favorites: newFavorites };
    });
  },
  
  isInFavorites: (productId) => {
    return useFavoritesStore.getState().favorites.some(item => item.id === productId);
  },
  
  clearFavorites: () => {
    set(() => {
   
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('favorites', JSON.stringify([]));
        } catch (error) {
          console.error('Error saving to localStorage:', error);
        }
      }
      
      return { favorites: [] };
    });
  },
  

  loadFavorites: () => {
    if (typeof window !== 'undefined') {
      try {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
          set({ favorites: JSON.parse(storedFavorites) });
        }
      } catch (error) {
        console.error('Error loading from localStorage:', error);
      }
    }
  }
}));


if (typeof window !== 'undefined') {
  useFavoritesStore.getState().loadFavorites();
}

export default useFavoritesStore;