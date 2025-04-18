"use client";

import React, { useState, useEffect } from "react";
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

  return (
    <form
      action={createTrade}
      className="d-flex flex-column justify-content-between gap-4 p-5"
    >
      <div className="d-flex text-secondary">
        <span className="body3">
          1 {paySymbol} ≈ {(marketData?.length &&
            (
              (marketData.find((c) => c.symbol === paySymbol)?.quote.USD.price || 0) /
              (marketData.find((c) => c.symbol === receiveSymbol)?.quote.USD.price || 1)
            ).toFixed(4)) + " " + receiveSymbol}
        </span>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex flex-column w-100">
          <label className="form-label text-secondary body3">Pay</label>
          <div className="d-flex gap-2">
            <input
              name="quantity"
              type="number"
              value={payAmount}
              onChange={(e) => setPayAmount(Number(e.target.value))}
              className="form-control"
              placeholder="0.00"
              required
            />
            <select
              name="paySymbol"
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
              name="receiveSymbol"
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

      <input hidden name="side" defaultValue={side} />

      <PrimaryButton type="submit" className="px-5 py-3 align-self-end">
        {side === "buy" ? t("buttons.buy") : t("buttons.sell")}
      </PrimaryButton>
    </form>
  );
};

export default BuyForm;
