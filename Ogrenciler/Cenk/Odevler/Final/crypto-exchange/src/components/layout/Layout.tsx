'use client';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CallToAction from '@/components/sections/CallToAction';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh' }}>{children}</main>
<CallToAction />

      <Footer />
    </>
  );
};

export default Layout;
