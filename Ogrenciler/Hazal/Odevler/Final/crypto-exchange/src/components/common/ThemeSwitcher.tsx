'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations('Common');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="theme-switcher">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={t('toggleTheme')}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>
    </div>
  );
}