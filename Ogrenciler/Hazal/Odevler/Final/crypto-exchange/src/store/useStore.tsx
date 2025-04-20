import { create } from 'zustand';
import { PortfolioItem, Order } from '@/types';

interface AppState {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentCurrency: string;
  setCurrentCurrency: (currency: string) => void;
  watchlist: string[];
  addToWatchlist: (coinId: string) => void;
  removeFromWatchlist: (coinId: string) => void;
  portfolio: PortfolioItem[];
  addToPortfolio: (item: Omit<PortfolioItem, 'dateAdded'>) => void;
  removeFromPortfolio: (coinId: string) => void;
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => void;
  cancelOrder: (orderId: string) => void;
}

export const useStore = create<AppState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  currentCurrency: 'USD',
  setCurrentCurrency: (currency) => set({ currentCurrency: currency }),
  watchlist: [],
  addToWatchlist: (coinId) =>
    set((state) => ({ watchlist: [...state.watchlist, coinId] })),
  removeFromWatchlist: (coinId) =>
    set((state) => ({
      watchlist: state.watchlist.filter((id) => id !== coinId),
    })),
  portfolio: [],
  addToPortfolio: (item) =>
    set((state) => ({
      portfolio: [
        ...state.portfolio,
        {
          ...item,
          dateAdded: new Date().toISOString(),
        },
      ],
    })),
  removeFromPortfolio: (coinId) =>
    set((state) => ({
      portfolio: state.portfolio.filter((item) => item.coinId !== coinId),
    })),
  orders: [],
  addOrder: (order) =>
    set((state) => ({
      orders: [
        ...state.orders,
        {
          ...order,
          id: Math.random().toString(36).substring(2, 9),
          date: new Date().toISOString(),
          status: 'completed',
        },
      ],
    })),
  cancelOrder: (orderId) =>
    set((state) => ({
      orders: state.orders.filter((order) => order.id !== orderId),
    })),
}));