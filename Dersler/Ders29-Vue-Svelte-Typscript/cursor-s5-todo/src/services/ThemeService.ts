import { writable } from 'svelte/store';

// Theme types
export type Theme = 'light' | 'dark';

// Local storage key for theme setting
const THEME_STORAGE_KEY = 'theme';

// Function to get system preference
const getSystemPreference = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

// Function to get initial theme
const getInitialTheme = (): Theme => {
  if (typeof localStorage === 'undefined') return getSystemPreference();

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return storedTheme || getSystemPreference();
};

// Create the theme store
const createThemeStore = () => {
  const theme = writable<Theme>(getInitialTheme());

  // Initialize body class on client
  if (typeof document !== 'undefined') {
    theme.subscribe(value => {
      document.body.classList.remove('light-theme', 'dark-theme');
      document.body.classList.add(`${value}-theme`);
      localStorage.setItem(THEME_STORAGE_KEY, value);
    });
  }

  return {
    subscribe: theme.subscribe,

    // Toggle theme between light and dark
    toggle: () => {
      theme.update(current => current === 'light' ? 'dark' : 'light');
    },

    // Set a specific theme
    set: (value: Theme) => {
      theme.set(value);
    }
  };
};

export const theme = createThemeStore(); 