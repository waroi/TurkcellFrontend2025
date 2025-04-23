'use client';

import React from 'react';
import Navbar from '@/components/organisms/Navbar/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';
import BootstrapClient from '@/components/providers/BootstrapClient';

const LayoutWrapper = (props: any) => {
  const { children } = props;
  
  return (
    <ThemeProvider>
      <BootstrapClient />
      <Navbar />
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default LayoutWrapper;