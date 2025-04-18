"use client";
import { useSearchParams } from "next/navigation"; // useSearchParams import edin
import { JSX, useEffect, useRef } from "react";

function TradingViewWidget(): JSX.Element {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const searchParams = useSearchParams();
	const symbol = searchParams.get("symbol") || "BITSTAMP:BTCUSD";
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current || !containerRef.current) return;

		isMounted.current = true;

		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
    {
      "autosize": true,
      "symbol": "${symbol}",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "support_host": "https://www.tradingview.com"
    }`;

		containerRef.current.appendChild(script);

		return () => {};
	}, [symbol]);

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
