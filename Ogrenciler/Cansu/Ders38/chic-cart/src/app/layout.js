'use client';
import { useEffect } from 'react';
import useThemeStore from '@/store/useThemeStore';
import useAuthStore from '@/store/useAuthStore'; 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function RootLayout({ children }) {
  const { isDarkMode, toggleTheme } = useThemeStore();
  const { user, logout } = useAuthStore(); 

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  
  useEffect(() => {
    if (!user) {
    
      document.body.classList.remove('dark', 'light');
      document.body.classList.add('light'); 
    }
  }, [user]);

  return (
    <html lang="en">
      <body>
        <Navbar toggleTheme={toggleTheme} logout={logout} /> 
        {children}
        <Footer />
      </body>
    </html>
  );
}






