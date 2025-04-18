"use client";
import { useEffect, useRef } from "react";
import { useThemeStore } from "../../../[locale]/store/ThemeStore";

type MiniChartProps = {
  symbol: string; // örn: "BINANCE:BTCUSDT"
  dateRange?: "1D" | "5D" | "1M" | "3M" | "6M" | "12M" | "ALL";
};

const MiniChart = ({
  symbol = "BINANCE:BTCUSDT",
  dateRange = "5D",
}: MiniChartProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useThemeStore();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: symbol,
      width: "126",
      height: "36",
      locale: "en",
      dateRange: dateRange,
      colorTheme: theme,
      isTransparent: false,
      autosize: false,
      largeChartUrl: "",
      chartOnly: true,
      noTimeScale: true,
    });

    if (ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(script);
    }
  }, [symbol, theme, dateRange]);

  return (
    <div ref={ref}>
      <div />
    </div>
  );
};

export default MiniChart;
