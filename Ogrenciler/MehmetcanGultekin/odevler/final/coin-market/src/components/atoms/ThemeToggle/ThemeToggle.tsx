'use client';

import React from 'react';
import styles from './ThemeToggle.module.scss';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      className={`rounded-circle border-0 ${styles.toggle}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8.00018 11.182C9.75745 11.182 11.182 9.75745 11.182 8.00018C11.182 6.24291 9.75745 4.81836 8.00018 4.81836C6.24291 4.81836 4.81836 6.24291 4.81836 8.00018C4.81836 9.75745 6.24291 11.182 8.00018 11.182Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 1V2.27273M8 13.7271V15M1 8H2.27273M13.7266 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3.05 3.05L3.95 3.95M12.05 12.05L12.95 12.95M3.05 12.95L3.95 12.05M12.05 3.95L12.95 3.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M14.0089 9.97241C13.7855 10.6462 13.4491 11.2807 13.0107 11.8477C12.277 12.7966 11.2883 13.5169 10.1602 13.9244C9.03209 14.3319 7.81126 14.4097 6.64056 14.1486C5.46987 13.8876 4.39772 13.2986 3.54959 12.4504C2.70145 11.6023 2.1124 10.5301 1.85136 9.35944C1.59033 8.18874 1.6681 6.96791 2.07558 5.8398C2.48306 4.71169 3.2034 3.72296 4.1523 2.9893C4.71928 2.55094 5.35384 2.21447 6.02759 1.99109C5.69163 2.84583 5.54862 3.77147 5.61793 4.7009C5.72758 6.17128 6.36134 7.55346 7.40394 8.59606C8.44654 9.63866 9.82873 10.2724 11.2991 10.3821C12.2285 10.4514 13.1542 10.3084 14.0089 9.97241Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
