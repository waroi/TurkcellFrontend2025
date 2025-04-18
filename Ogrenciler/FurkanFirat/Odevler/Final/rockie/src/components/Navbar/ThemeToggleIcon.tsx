'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();
  return (
    <span className='btn btn-outline-secondary' onClick={toggleTheme}>
      {theme === 'light' ? (
        <i className='bi bi-moon'></i>
      ) : (
        <i className='bi bi-sun'></i>
      )}
    </span>
  );
}
