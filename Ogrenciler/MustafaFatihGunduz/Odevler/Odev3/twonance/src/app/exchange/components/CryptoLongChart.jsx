"use client";
import { useEffect } from "react";
export default function CryptoLongChart({ symbol, containerId }) {
  useEffect(() => {
    const existingScript = document.getElementById(`${containerId}-script`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.id = `${containerId}-script`;
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: "100%",
          height: 500,
          symbol: symbol,
          interval: "15",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          hide_top_toolbar: false,
          container_id: containerId,
        });
      }
    };

    document.getElementById(containerId)?.appendChild(script);

    return () => {
      script.remove();
    };
  }, [symbol, containerId]);

  return (
    <div id={containerId} style={{ width: "100%", position: "relative" }} />
  );
}
