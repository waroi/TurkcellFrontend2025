import { create } from 'zustand';


const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useAuthStore;
