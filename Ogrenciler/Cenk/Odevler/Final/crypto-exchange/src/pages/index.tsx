import React from 'react';
import Header from '@/components/layout/Header'; 

const HomePage = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '24px' }}>
        <h1>Welcome to Crypto Exchange</h1>
        <p>This is the homepage content.</p>
      </main>
    </>
  );
};

export default HomePage;
