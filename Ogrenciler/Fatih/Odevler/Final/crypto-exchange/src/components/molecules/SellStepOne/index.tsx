"use client";

import React, { useEffect, useState } from "react";
import SelectCryptoSearch from "@/components/molecules/SelectCryptoSearch";
import { Coin } from "@/types/coin";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setSellStepOneData } from "@/store/slices/sellCryptoSlice";

interface SellStepOneProps {
  onContinue: () => void;
}

const SellStepOne = ({ onContinue }: SellStepOneProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [coins, setCoins] = useState<Coin[]>([]);
  const [filteredCoins, setFilteredCoins] = useState<Coin[]>([]);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);

  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWalletCoins = async () => {
      if (!user?.uid) return;

      try {
        const snapshot = await getDocs(
          collection(db, "users", user.uid, "wallet")
        );
        const walletData = snapshot.docs.map((doc) => doc.data());

        const coinIds = walletData.map((entry) => entry.toCurrency).join(",");

        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.toLowerCase()}&ids=${coinIds}`
        );
        const data = await res.json();

        setCoins(data);
        setFilteredCoins(data);
      } catch (error) {
        console.error("Error fetching wallet coins:", error);
      }
    };

    fetchWalletCoins();
  }, [currency, user]);

  const handleSearch = () => {
    const filtered = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCoins(filtered);
  };

  const handleSelectCoin = (coin: Coin) => {
    setSelectedCoin(coin);

    dispatch(
      setSellStepOneData({
        selectedCoin: coin,
        payAmount: "0",
      })
    );

    onContinue();
  };

  return (
    <SelectCryptoSearch
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
      selectedCurrency={currency}
      onCurrencyChange={setCurrency}
      coins={filteredCoins}
      selectedCoinId={selectedCoin?.id}
      onSelectCoin={handleSelectCoin}
    />
  );
};

export default SellStepOne;
