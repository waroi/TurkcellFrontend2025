import { useEffect, useState } from 'react';
import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return {
    theme: currentTheme,
    systemTheme,
    isDark: currentTheme === 'dark',
    toggleTheme,
    setTheme,
    mounted,
  };
}