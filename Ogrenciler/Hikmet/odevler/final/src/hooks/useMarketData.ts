import { useEffect, useState } from "react";

interface CoinInfo {
	id: string;
	name: string;
	symbol: string;
	logo: string;
}

interface CoinMarket {
	id: number;
	name: string;
	symbol: string;
	quote: {
		USD: {
			price: number;
			percent_change_24h: number;
			market_cap: number;
		};
	};
}

interface CoinData {
	info: Record<string, CoinInfo>;
	market: CoinMarket[];
	loading: boolean;
}

export default function useMarketData(): CoinData {
	const [info, setInfo] = useState<Record<string, CoinInfo>>({});
	const [market, setMarket] = useState<CoinMarket[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const [infoRes, marketRes] = await Promise.all([
					fetch("/api/coin"),
					fetch("/api/coin/market"),
				]);

				const infoJson = await infoRes.json();
				const marketJson = await marketRes.json();

				const coinInfo: Record<string, CoinInfo> = Object.entries(
					infoJson.data
				).reduce((acc, [id, coin]: [string, any]) => {
					acc[id] = {
						id,
						name: coin.name,
						symbol: coin.symbol,
						logo: coin.logo,
					};
					return acc;
				}, {} as Record<string, CoinInfo>);

				setInfo(coinInfo);
				setMarket(marketJson);
			} catch (err) {
				console.error("Error fetching market data:", err);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);

	return { info, market, loading };
}
