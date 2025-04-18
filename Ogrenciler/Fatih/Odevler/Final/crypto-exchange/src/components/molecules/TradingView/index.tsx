"use client";

import { RootState } from "@reduxjs/toolkit/query";
import React from "react";
import { useSelector } from "react-redux";

const TradingView = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const theme = mode === "dark" ? "dark" : "light";

  const url = `https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=BINANCE:BTCUSDT&interval=15&theme=${theme}&style=1&locale=en&toolbarbg=f1f3f6`;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <iframe
        src={url}
        style={{ width: "100%", height: "100%", border: "none" }}
        scrolling="no"
        title="TradingView BTC Chart"
      />
    </div>
  );
};

export default TradingView;
