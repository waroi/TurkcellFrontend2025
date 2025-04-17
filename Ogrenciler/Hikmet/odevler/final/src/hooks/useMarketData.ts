import { useEffect, useState } from "react";

interface CoinInfo {
	id: string;
	name: string;
	symbol: string;
	logo: string;
	price: number;
}

interface CoinMarket {
	id: number;
	name: string;
	symbol: string;
	quote: {
		USD: {
			price: number;
			percent_change_1h: number;
			percent_change_7d: number;
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
export default function useMarketData(limit: number = 10): CoinData {
	const [info, setInfo] = useState<Record<string, CoinInfo>>({});
	const [market, setMarket] = useState<CoinMarket[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const marketResponse = await fetch(`/api/coin/market?limit=${limit}`);
				const marketJson = await marketResponse.json();

				const coinIds = marketJson.map((coin: any) => coin.id).join(",");

				const infoResponse = await fetch(`/api/coin?id=${coinIds}`);
				const infoJson = await infoResponse.json();

				const coinInfo: Record<string, CoinInfo> = Object.entries(
					infoJson.data
				).reduce((acc, [id, coin]: [string, any]) => {
					acc[id] = {
						id,
						name: coin.name,
						symbol: coin.symbol,
						logo: coin.logo,
						price: coin.quote?.USD?.price ?? 0,
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
	}, [limit]);

	return { info, market, loading };
}
