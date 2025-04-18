"use client";
import { useThemeStore } from "@/store/themeStore";
import { useEffect, useRef } from "react";

interface TradingViewMiniChartProps {
	symbol: string;
	width?: number;
	height?: number;
}

export default function TradingViewMiniChart({
	symbol = "BITSTAMP:BTCUSD",
	width = 100,
	height = 40,
}: TradingViewMiniChartProps) {
	const containerRef = useRef<HTMLDivElement>(null);
		const { theme, toggleTheme } = useThemeStore();

	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		container.innerHTML = "";

		const script = document.createElement("script");
		script.src =
			"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
		script.type = "text/javascript";
		script.async = true;
		script.innerHTML = JSON.stringify({
			symbol: symbol,
			width: width,
			height: height,
			locale: "en",
			dateRange: "12M",
			colorTheme: theme === "dark" ? "dark" : "light",
			isTransparent: true,
			autosize: false,
			chartOnly: true,
			noTimeScale: true,
		});

		const widgetContainer = document.createElement("div");
		widgetContainer.className = "tradingview-widget-container__widget";
		container.appendChild(widgetContainer);
		container.appendChild(script);

		return () => {
			if (container) container.innerHTML = "";
		};
	}, [symbol, width, height, theme]);

	return (
		<div
			ref={containerRef}
			className="tradingview-widget-container"
			style={{ width, height }}
		/>
	);
}
