"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    TradingView: any;
  }
}

export function TradingViewChart({ symbol }: { symbol: string }) {
  const t = useTranslations("Trade");
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current || !window.TradingView) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: `BINANCE:${symbol}USDT`,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: true,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: "tradingview-chart",
      });
    };

    chartContainerRef.current.appendChild(script);

    return () => {
      if (chartContainerRef.current && script.parentNode) {
        chartContainerRef.current.removeChild(script);
      }
    };
  }, [symbol]);

  return (
    <div className="tradingview-chart">
      <div id="tradingview-chart" ref={chartContainerRef} />
      {!window.TradingView && <p>{t("loadingChart")}</p>}
    </div>
  );
}