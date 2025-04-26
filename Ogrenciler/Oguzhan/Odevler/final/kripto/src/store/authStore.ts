// src/store/authStore.ts
import { create } from 'zustand';
import { AuthService, UserData } from '@/services/authService';

type AuthState = {
  user: UserData | null;
  loading: boolean;
  error: string | null;
  initializeAuth: () => () => void; 


  register: (email: string, password: string, name: string, surname: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  updateProfile: (data: { 
    name: string; 
    surname: string; 
    email: string 
  }) =>Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,
  error: null,

  initializeAuth: () => {
    const unsubscribe = AuthService.onAuthChanged((user) => {
      set({ user, loading: false });
    });
    return unsubscribe; 
  },

  register: async (email, password, name, surname) => {
    try {
      set({ loading: true, error: null });
      const user = await AuthService.register(email, password, name, surname);
      set({ user });
    } catch (error: any) {
      set({ error: error.message });
      throw error; 
    } finally {
      set({ loading: false });
    }
  },

  login: async (email, password) => {
    try {
      set({ loading: true, error: null });
      const user = await AuthService.login(email, password);
      set({ user });
    } catch (error: any) {
      set({ error: error.message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },


  logout: async () => {
    try {
      set({ loading: true });
      await AuthService.logout();
      set({ user: null });
    } catch (error: any) {
      set({ error: error.message });
    } finally {
      set({ loading: false });
    }
  },

updateProfile: async (data) => {
  try {
    set({ loading: true })
    const user = await AuthService.updateProfile(data)
    set({ user })
  } catch (error: any) {
    set({ error: error.message })
  } finally {
    set({ loading: false })
  }
},

changePassword: async (currentPassword, newPassword) => {
  try {
    set({ loading: true })
    await AuthService.changePassword(currentPassword, newPassword)
  } catch (error: any) {
    set({ error: error.message })
  } finally {
    set({ loading: false })
  }
},
}));

