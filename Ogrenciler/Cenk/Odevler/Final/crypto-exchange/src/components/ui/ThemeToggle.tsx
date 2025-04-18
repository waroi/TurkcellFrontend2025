'use client';
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Moon = dynamic(() => import('lucide-react').then(mod => mod.Moon), { ssr: false });
const Sun = dynamic(() => import('lucide-react').then(mod => mod.Sun), { ssr: false });

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
<<<<<<< Updated upstream
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        color: 'var(--color-on-surface)', 
      }}
    >
=======
    <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}>
>>>>>>> Stashed changes
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

export default ThemeToggle;
