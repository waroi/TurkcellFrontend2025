"use client";

import { useEffect, useState } from "react";
import { useExchangeStore } from "@/app/[locale]/store/ExchangeStore";
import { useMarketStore } from "@/app/[locale]/store/MarketStore";

type TradeFormProps = {
  type: "pay" | "receive";
  side: "buy" | "sell";
};

const TradeForm = ({ type, side }: TradeFormProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [selectedPaySymbol, setSelectedPaySymbol] = useState("BTC");
  const [selectedReceiveSymbol, setSelectedReceiveSymbol] = useState("USD");
  const [price, setPrice] = useState<number>(0);
  const { marketData } = useMarketStore();

  const {
    setPayAmount,
    setReceiveSymbol,
    setPaySymbol,
    payAmount,
    receiveSymbol,
    paySymbol,
    setRate
  } = useExchangeStore();

  const isPay = type === "pay";
  const isReceive = type === "receive";
  const isBuy = side === "buy";
  const isSell = side === "sell";

  useEffect(() => {
      if (!amount || !selectedPaySymbol || !selectedReceiveSymbol) return;
    setPayAmount(amount);
    setPaySymbol(selectedPaySymbol);
    setReceiveSymbol(selectedReceiveSymbol);
  }, [selectedPaySymbol, selectedReceiveSymbol, amount]);

  useEffect(() => {
    const coin = marketData.find((coin) => coin.symbol === paySymbol);
    const toRatePrice = coin?.quote?.[receiveSymbol]?.price;
    setRate(toRatePrice)
    if (toRatePrice && typeof payAmount === "number") {
      setPrice(isSell ? payAmount * toRatePrice : payAmount / toRatePrice);

    }
  }, [paySymbol, receiveSymbol, payAmount, marketData]);

  return (
    <div className="rounded border bg-body px-3 py-2 w-100">
      <label className="form-label body3 text-secondary p-0 m-0">{type}</label>
      <span className="row">
        <span className="col-7 p-0">
          {isPay ? (
            <input
              type="text"
              name="quantity"
              className="form-control outline-none border-0 shadow-none bg-transparent"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          ) : (
            <input
              type="text"
              className="form-control outline-none border-0 shadow-none bg-transparent"
              value={price?.toFixed(10) ?? "-"}
              readOnly
            />
          )}
        </span>

        <span className="col-5 p-0">
          {(isReceive && isBuy) || (isPay && isSell) ? (
            <select
            name="receiveSymbol"
              className="form-select border-0 caption shadow-none"
              value={selectedPaySymbol}
              onChange={(e) => setSelectedPaySymbol(e.target.value)}
            >
              {marketData.map((coin) => (
                <option key={coin.symbol} value={coin.symbol}>
                  {coin.symbol}
                </option>
              ))}
            </select>
          ) : null}

          {(isReceive && isSell) || (isPay && isBuy) ? (
            <select
             name="paySymbol"
              className="form-select border-0 caption shadow-none"
              value={selectedReceiveSymbol}
              onChange={(e) => setSelectedReceiveSymbol(e.target.value)}
            >
              <option value="USD">USD</option>
            </select>
          ) : null}
        </span>
      </span>
    </div>
  );
};

export default TradeForm;
