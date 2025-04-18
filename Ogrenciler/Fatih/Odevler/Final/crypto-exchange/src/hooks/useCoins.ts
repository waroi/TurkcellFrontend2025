"use client";

import { useEffect, useState } from "react";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<string>("bitcoin");
  const [selectedCoinData, setSelectedCoinData] = useState<Coin | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc"
        );
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError("Failed to fetch coins");
      }
    };

    fetchCoins();
  }, []);

  useEffect(() => {
    const fetchSelectedCoin = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selectedCoin}`
        );
        const data = await res.json();
        setSelectedCoinData(data[0]);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch selected coin");
      }
    };

    if (selectedCoin) {
      fetchSelectedCoin();
    }
  }, [selectedCoin]);

  return {
    coins,
    selectedCoin,
    setSelectedCoin,
    selectedCoinData,
    loading,
    error,
  };
};
