"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import TradeTabs from "@/components/molecules/TradeTabs";
import OrderTypeSelector from "@/components/molecules/OrderTypeSelector";
import AmountInput from "@/components/molecules/AmountInput";
import ExchangeRate from "@/components/molecules/ExchangeRate";

import { db, auth } from "@/firebase/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import styles from "./TradeBox.module.css";
import { useTranslations } from "next-intl";

interface Props {
  coinOptions: any[];
  selectedCoin?: string;
  setSelectedCoin?: (id: string) => void;
  coinData?: any;
}

const TradeBox = ({ coinOptions }: Props) => {
  const [payAmount, setPayAmount] = useState("3000000");
  const [receiveAmount, setReceiveAmount] = useState("0.00000000");
  const t = useTranslations("Trade");
  const [side, setSide] = useState<"buy" | "sell">("buy");
  const [orderType, setOrderType] = useState("limit");
  const [user, setUser] = useState<any>(null);

  const [payCoin, setPayCoin] = useState("usd-coin");
  const [receiveCoin, setReceiveCoin] = useState("bitcoin");

  const selectedCoinObject = coinOptions.find((c) => c.id === receiveCoin);
  const payCoinObject = coinOptions.find((c) => c.id === payCoin);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!selectedCoinObject || !payCoinObject) return;
    const exchangeRate =
      selectedCoinObject.current_price / payCoinObject.current_price;

    if (side === "buy") {
      const result = parseFloat(payAmount) / exchangeRate;
      setReceiveAmount(result.toFixed(8));
    } else {
      const result = parseFloat(receiveAmount) * exchangeRate;
      setPayAmount(result.toFixed(2));
    }
  }, [
    payAmount,
    receiveAmount,
    side,
    selectedCoinObject,
    payCoinObject,
    payCoin,
    receiveCoin,
  ]);

  const handleSimulateTrade = async () => {
    if (!user) return alert("Please log in to simulate a trade.");

    const tradeData = {
      type: side,
      orderType,
      payAmount: parseFloat(payAmount),
      payCoin,
      receiveAmount: parseFloat(receiveAmount),
      receiveCoin,
      price: selectedCoinObject?.current_price,
      payCoinPrice: payCoinObject?.current_price,
      createdAt: serverTimestamp(),
      userId: user.uid,
    };

    try {
      await addDoc(collection(db, "users", user.uid, "wallet"), {
        payAmount: parseFloat(payAmount),
        receiveAmount: parseFloat(receiveAmount),
        fromCurrency: payCoin,
        toCurrency: receiveCoin,
        price: selectedCoinObject?.current_price,
        payCoinPrice: payCoinObject?.current_price,
        status: "completed",
        createdAt: serverTimestamp(),
      });

      alert("Trade simulated and saved!");
      console.log(tradeData);
    } catch (error) {
      console.error("Error saving trade:", error);
    }
  };

  const getExchangeRate = () => {
    if (!selectedCoinObject || !payCoinObject) return 0;
    return selectedCoinObject.current_price / payCoinObject.current_price;
  };

  return (
    <div className={`${styles.wrapper} p-4 rounded-4 shadow-sm`}>
      <TradeTabs side={side} onChange={setSide} />
      <OrderTypeSelector selected={orderType} onSelect={setOrderType} />

      <AmountInput
        label={side === "buy" ? "Pay" : "Receive"}
        value={side === "buy" ? payAmount : receiveAmount}
        onChange={side === "buy" ? setPayAmount : setReceiveAmount}
        onCurrencyChange={setPayCoin}
        currencyIcon={payCoinObject?.image || ""}
        currencySymbol={payCoinObject?.symbol.toUpperCase() || ""}
        options={coinOptions.map((coin) => ({
          label: coin.symbol.toUpperCase(),
          value: coin.id,
        }))}
      />

      <AmountInput
        label={side === "buy" ? "Receive" : "Pay"}
        value={side === "buy" ? receiveAmount : payAmount}
        onChange={side === "buy" ? setReceiveAmount : setPayAmount}
        onCurrencyChange={setReceiveCoin}
        currencyIcon={selectedCoinObject?.image || ""}
        currencySymbol={selectedCoinObject?.symbol.toUpperCase() || ""}
        options={coinOptions.map((coin) => ({
          label: coin.symbol.toUpperCase(),
          value: coin.id,
        }))}
      />

      {selectedCoinObject && payCoinObject && (
        <ExchangeRate
          symbol={`${selectedCoinObject.symbol}/${payCoinObject.symbol}`}
          price={getExchangeRate()}
        />
      )}

      <Button variant="primary" className="w-100" onClick={handleSimulateTrade}>
        {side === "buy" ? "Buy" : "Sell"}
      </Button>
    </div>
  );
};

export default TradeBox;
