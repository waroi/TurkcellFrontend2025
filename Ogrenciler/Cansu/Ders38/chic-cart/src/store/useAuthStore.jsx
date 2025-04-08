import { create } from 'zustand';

const useAuthStore = create((set, get) => ({
  user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) || null : null,
  
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
  }
}));

export default useAuthStore;
