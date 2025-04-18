"use client";

import React, { useState, useEffect, useTransition } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useTranslations } from "next-intl";
import { createTrade } from "@/app/utils/actions";
import Icon from "../Icon";
import { useMarketStore } from "@/app/[locale]/store/MarketStore";

const BuyForm = ({ side = "buy" }: { side: "buy" | "sell" }) => {
  const t = useTranslations("TradePage");
  const { marketData } = useMarketStore();

  const [payAmount, setPayAmount] = useState<number>(0);
  const [paySymbol, setPaySymbol] = useState("BTC");
  const [receiveSymbol, setReceiveSymbol] = useState("USDT");
  const [calculatedAmount, setCalculatedAmount] = useState<number>(0);
  const [message, setMessage] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!marketData || !paySymbol || !receiveSymbol || !payAmount) return;

    const payCoin = marketData.find((coin: any) => coin.symbol === paySymbol);
    const receiveCoin = marketData.find((coin: any) => coin.symbol === receiveSymbol);

    const payPrice = payCoin?.quote?.USD?.price;
    const receivePrice = receiveCoin?.quote?.USD?.price;

    if (payPrice && receivePrice) {
      const value = (payAmount * payPrice) / receivePrice;
      setCalculatedAmount(value);
    }
  }, [payAmount, paySymbol, receiveSymbol, marketData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    const formData = new FormData();
    formData.append("side", side);
    formData.append("quantity", payAmount.toString());
    formData.append("paySymbol", paySymbol);
    formData.append("receiveSymbol", receiveSymbol);

    startTransition(async () => {
      try {
        await createTrade(formData);
        setMessage("✅ Trade başarıyla gerçekleştirildi.");
      } catch (err: any) {
        setMessage("❌ İşlem sırasında bir hata oluştu: " + err.message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-4 p-5">
      <div className="d-flex text-secondary">
        <span className="body3">
          1 {paySymbol} ≈{" "}
          {marketData?.length
            ? (
                (marketData.find((c) => c.symbol === paySymbol)?.quote.USD.price || 0) /
                (marketData.find((c) => c.symbol === receiveSymbol)?.quote.USD.price || 1)
              ).toFixed(4) + " " + receiveSymbol
            : ""}
        </span>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex flex-column w-100">
          <label className="form-label text-secondary body3">Pay</label>
          <div className="d-flex gap-2">
            <input
              type="number"
              value={payAmount}
              onChange={(e) => setPayAmount(Number(e.target.value))}
              className="form-control"
              placeholder="0.00"
              required
            />
            <select
              value={paySymbol}
              onChange={(e) => setPaySymbol(e.target.value)}
              className="form-select"
            >
              {marketData?.map((coin: any) => (
                <option key={coin.symbol} value={coin.symbol}>
                  {coin.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>

        <span className="pt-4">
          <Icon name="turnAround" />
        </span>

        <div className="d-flex flex-column w-100">
          <label className="form-label text-secondary body3">Receive</label>
          <div className="d-flex gap-2">
            <input
              type="text"
              className="form-control bg-transparent"
              value={calculatedAmount.toFixed(4)}
              disabled
            />
            <select
              value={receiveSymbol}
              onChange={(e) => setReceiveSymbol(e.target.value)}
              className="form-select"
            >
              {marketData?.map((coin: any) => (
                <option key={coin.symbol} value={coin.symbol}>
                  {coin.symbol}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <PrimaryButton
        type="submit"
        className="px-5 py-3 align-self-end"
        disabled={isPending}
      >
        {isPending ? "İşlem yapılıyor..." : side === "buy" ? t("buttons.buy") : t("buttons.sell")}
      </PrimaryButton>

      {message && <div className="text-center text-secondary">{message}</div>}
    </form>
  );
};

export default BuyForm;
