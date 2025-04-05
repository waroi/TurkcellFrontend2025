'use client';
import { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function RootLayout({ children }) {
  const { isDarkMode, toggleTheme } = useThemeStore();

  
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <html lang="en">
      <body>
        <Navbar toggleTheme={toggleTheme} />  
        {children}
        <Footer/>
      </body>
    </html>
  );
}





