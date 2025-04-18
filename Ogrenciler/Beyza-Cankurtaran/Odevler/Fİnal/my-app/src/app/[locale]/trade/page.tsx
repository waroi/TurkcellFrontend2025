"use client";

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TradingPageProvider } from './contexts/TradingPageContext';
import TradingPageLayout from './components/TradingPageLayout';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTheme } from '../../context/ThemeContext';

const TradingPage: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
      <Navbar />
      <TradingPageProvider>
        <TradingPageLayout />
      </TradingPageProvider>
      <Footer />
    </div>
  );
};

export default TradingPage;