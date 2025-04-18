"use client";
import { useThemeStore } from "@/store/themeStore";
import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useRef } from "react";

function TradingViewWidget(): JSX.Element {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const searchParams = useSearchParams();
	const symbol = searchParams.get("symbol") || "BITSTAMP:BTCUSD";
	const scriptRef = useRef<HTMLScriptElement | null>(null);

	const { theme } = useThemeStore();

	useEffect(() => {
		if (!containerRef.current) return;

		// Remove old script if it exists
		if (scriptRef.current && scriptRef.current.parentNode) {
			scriptRef.current.parentNode.removeChild(scriptRef.current);
		}


		const script = document.createElement("script");
		script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = `
	{
		"autosize": true,
		"symbol": "${symbol}",
		"interval": "D",
		"timezone": "Etc/UTC",
		"theme": "${theme}",
		"style": "1",
		"locale": "en",
		"allow_symbol_change": true,
		"support_host": "https://www.tradingview.com"
	}`;

		scriptRef.current = script;
		containerRef.current.appendChild(script);

		return () => {
			if (scriptRef.current && scriptRef.current.parentNode) {
				scriptRef.current.parentNode.removeChild(scriptRef.current);
			}
		};
	}, [symbol, theme]); 

	return (
		<div
			className="tradingview-widget-container"
			ref={containerRef}
			style={{ height: "100%", width: "100%", overflow: "hidden" }}>
			<div
				className="tradingview-widget-container__widget"
				style={{ height: "calc(100% - 32px)", width: "100%" }}
			/>
		</div>
	);
}

export default TradingViewWidget;
