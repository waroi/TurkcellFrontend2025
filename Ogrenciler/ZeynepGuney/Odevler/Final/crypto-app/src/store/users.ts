import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User } from '@/services/firebase';

type Store = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const useUserStore = create<Store>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-storage", 
    }
  )
);

export default useUserStore;
