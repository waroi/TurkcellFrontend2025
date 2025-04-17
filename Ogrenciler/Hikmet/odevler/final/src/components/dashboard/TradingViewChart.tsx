"use client";
import { JSX, useEffect, useRef } from "react";

function TradingViewWidget(): JSX.Element {
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
    {
      "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "support_host": "https://www.tradingview.com"
    }`;

		containerRef.current.appendChild(script);

		return () => {
			if (containerRef.current && script.parentNode) {
				script.parentNode.removeChild(script);
			}
		};
	}, []);

	return (
		<div
			className="tradingview-widget-container"
			ref={containerRef}
			style={{ height: "100%", width: "100%" }}>
			<div
				className="tradingview-widget-container__widget"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			/>
		</div>
	);
}

export default TradingViewWidget;
