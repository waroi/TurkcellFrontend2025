import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
  user: null,
  
  setUser: (user) => {
    if (typeof window !== 'undefined' && user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    set({ user });
  },
  
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
    }
    set({ user: null });
  },
  
  isAuthenticated: () => {
    return get().user !== null;
  },

  initialize: () => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        set({ user: JSON.parse(storedUser) });
      }
    }
  }
}));


if (typeof window !== 'undefined') {
  useAuthStore.getState().initialize();
}

export default useAuthStore;
