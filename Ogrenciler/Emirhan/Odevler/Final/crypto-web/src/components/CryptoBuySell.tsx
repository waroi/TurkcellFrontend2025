"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { getUserWallet, tradeCrypto } from "@/firebase/firebaseService";
import useCryptoStore from "@/store/useCryptoStore";
import { useTranslations } from "next-intl";

export default function CryptoBuySell({ coinId }: { coinId: string }) {
  const [tab, setTab] = useState<"buy" | "sell">("buy");
  const [payAmount, setPayAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const coin = useCryptoStore((state) => state.singleCoin);
  const wallet = useCryptoStore((state) => state.wallet);
  const setWallet = useCryptoStore((state) => state.setWallet);

  const t = useTranslations();

  const fetchWallet = async () => {
    try {
      const res = await getUserWallet();
      setWallet(res);
    } catch (error) {
      console.error("Error fetching wallet data:", error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchWallet().finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setPayAmount(0);
    setResult(null);
    fetchWallet();
  }, [tab]);

  const balance =
    tab === "buy"
      ? wallet?.["USDT"]?.value ?? 0
      : wallet?.[coin?.symbol || ""]?.value ?? 0;

  const step = balance / 4;
  const coinAmount =
    tab === "buy"
      ? +(payAmount / (coin?.quote?.USD?.price ?? 1)).toFixed(6)
      : +(payAmount * (coin?.quote?.USD?.price ?? 1)).toFixed(2);

  const handleTrade = async (currentTab: "buy" | "sell") => {
    setLoading(true);
    setResult(null);

    try {
      const fromCoin = currentTab === "buy" ? "USDT" : coin?.symbol ?? "";
      const toCoin = currentTab === "buy" ? coin?.symbol ?? "" : "USDT";
      const currentCoinAmount =
        currentTab === "buy"
          ? +(payAmount / (coin?.quote?.USD?.price ?? 1)).toFixed(6)
          : +(payAmount * (coin?.quote?.USD?.price ?? 1)).toFixed(2);

      const updatedWallet = await tradeCrypto(
        fromCoin,
        toCoin,
        payAmount,
        currentCoinAmount,
        coinId
      );

      setResult({ success: true, wallet: updatedWallet });
      await fetchWallet();
    } catch (err: any) {
      setResult({ error: err.message });
    }

    setLoading(false);
  };

  if (!coin) return <div>Loading...</div>;

  return (
    <div className="tab-container bg-white rounded-2 p-4 buy-sell">
      <ul className="nav nav-tabs mb-3 tab-full">
        <li className="nav-item w-50 text-center">
          <button
            className={`nav-link fs-2 fw-bold ${
              tab === "buy" ? "active text-black" : "text-muted"
            }`}
            onClick={() => setTab("buy")}
          >
            {t("Buy")}
          </button>
        </li>
        <li className="nav-item w-50 text-center">
          <button
            className={`nav-link fs-2 fw-bold ${
              tab === "sell" ? "active text-black" : "text-muted"
            }`}
            onClick={() => setTab("sell")}
          >
            {t("Sell")}
          </button>
        </li>
      </ul>

      <ul className="nav d-flex align-items-center py-3">
        {[t("Limit"), t("Market"), t("Stop limit"), t("Stop market")].map(
          (type, index) => (
            <li className="nav-item me-2" key={type}>
              <Button
                px="px-3"
                py="py-1"
                className={`btn-sm fs-5 ${
                  index === 0
                    ? "btn-primary text-white"
                    : "btn-white text-muted"
                }`}
              >
                {type}
              </Button>
            </li>
          )
        )}
      </ul>

      <div className="form-box p-3 mb-3">
        <label className="form-label text-muted fs-4 mb-0">{t("Pay")}</label>
        <div className="d-flex gap-2 align-items-center">
          <input
            type="text"
            className="form-control px-0 border-0 fs-3 fw-bold text-black outline-0"
            value={payAmount}
            onChange={(e) => setPayAmount(Number(e.target.value))}
            placeholder="Amount"
          />
          <span className="fs-5 fw-bold text-black">
            {tab === "buy" ? "USDT" : coin.symbol}
          </span>
        </div>
      </div>

      <div className="form-box p-3 mb-3">
        <label className="form-label text-muted fs-4 mb-0">
          {t("Receive")}
        </label>
        <div className="d-flex gap-2 align-items-center">
          <input
            type="number"
            className="form-control px-0 border-0 fs-3 fw-bold text-black outline-0"
            value={coinAmount}
            readOnly
            placeholder="Amount"
          />
          <span className="fs-5 fw-bold text-black">
            {tab === "buy" ? coin.symbol : "USDT"}
          </span>
        </div>
      </div>

      <div className="text-muted small py-3 d-flex align-items-center justify-content-center">
        1 {coin.symbol} ≈ {coin.quote?.USD?.price.toFixed(4)} USD
      </div>

      <div className="mb-4">
        <label
          htmlFor="customRange"
          className="form-label fs-5 fw-bold text-muted"
        >
          {t("Select Amount")}
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max={balance}
          step={step}
          value={payAmount}
          onChange={(e) => setPayAmount(Number(e.target.value))}
          id="customRange"
        />
        <div className="d-flex justify-content-between px-1 text-muted fs-6">
          <span>0</span>
          <span>{step.toFixed(2)}</span>
          <span>{(step * 2).toFixed(2)}</span>
          <span>{(step * 3).toFixed(2)}</span>
          <span>{balance.toFixed(2)}</span>
        </div>
      </div>

      <Button
        className="btn-primary text-white w-100"
        onClick={() => handleTrade(tab)}
        disabled={loading}
      >
        {loading ? t("Processing") : tab === "buy" ? t("Buy") : t("Sell")}
      </Button>

      {result && (
        <div
          className={`alert mt-3 fs-6 ${
            result.success ? "alert-success" : "alert-danger"
          }`}
          role="alert"
        >
          {result.wallet?.message || "İşlem tamamlanamadı."}
        </div>
      )}
    </div>
  );
}
