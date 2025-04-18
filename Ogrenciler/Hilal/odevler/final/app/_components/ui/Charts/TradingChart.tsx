"use client";

import { useThemeStore } from "@/app/[locale]/store/ThemeStore";
import { useEffect, useRef } from "react";
import { useParams } from 'next/navigation'

const TradingChart = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {locale} = useParams<{ locale:string}>()
 const {theme} =useThemeStore();


  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).TradingView) {
        new (window as any).TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT", // Değiştirilebilir
          interval: "60",
          timezone: "Etc/UTC",
          theme:theme,
          style: "1",
          locale:locale,
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview-chart",
          
        });
      }
    };

    containerRef.current.appendChild(script);
  }, [theme,locale]);

  return (
    <div
      id="tradingview-chart"
      ref={containerRef}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default TradingChart;
