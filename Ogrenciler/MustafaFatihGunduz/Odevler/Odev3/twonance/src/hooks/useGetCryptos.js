"use client";
import { useState, useEffect } from 'react';
const useGetCryptos = () => {
  const [cryptos, setCryptos] = useState([]);
  useEffect(() => {
    handleCryptos();
  }, []);
  const handleCryptos = async () => {
    try {
      const response = await fetch("/api/cryptos");
      if (response.ok) {
        const data = await response.json();
        setCryptos(data);
      } else {
        console.error("API Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };
  const onlyFourCrypto = cryptos.length > 0 ? cryptos.slice(0, 4) : [];
  const onlyEigthCrypto = cryptos.length > 0 ? cryptos.slice(0, 8) : [];
  const onlyTenCrypto = cryptos.length > 0 ? cryptos.slice(0, 10) : [];
  const onlyTwentyCrypto = cryptos.length > 0 ? cryptos.slice(0, 20) : [];

  return { cryptos, onlyFourCrypto, onlyEigthCrypto, onlyTenCrypto, onlyTwentyCrypto };
};

export default useGetCryptos;
