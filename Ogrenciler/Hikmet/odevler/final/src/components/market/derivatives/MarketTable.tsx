import TradingViewMiniChart from "@/components/landing-page/market-update/TradingViewMiniChart";
import useMarketData from "@/hooks/useMarketData";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import styles from "../../landing-page/market-update/market.module.scss";

type SortKey =
	| "price"
	| "percent_change_1h"
	| "percent_change_24h"
	| "percent_change_7d"
	| "market_cap";

export default function MarketTable({ t }: { t: (key: string) => string }) {
	const { loading, market, info } = useMarketData(20);
	const [sortKey, setSortKey] = useState<SortKey>("market_cap");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

	const handleSort = (key: SortKey) => {
		if (sortKey === key) {
			setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
		} else {
			setSortKey(key);
			setSortOrder("desc");
		}
	};

	if (loading) {
		return (
			<div className="d-flex align-items-center justify-content-center">
				<div className="spinner-border" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	const sortedMarket = [...market].sort((a, b) => {
		const aVal = a.quote.USD[sortKey];
		const bVal = b.quote.USD[sortKey];

		if (aVal === undefined || bVal === undefined) return 0;

		return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
	});

	const formatChange = (value: number | undefined) => {
		if (value === undefined) return "--";
		const formatted = `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
		return (
			<span className={value >= 0 ? "text-success" : "text-danger"}>
				{formatted}
			</span>
		);
	};

	return (
		<Table borderless hover responsive className="table-sm text-center">
			<thead>
				<tr>
					<th></th>
					<th>#</th>
					<th className="text-start">{t("table.col1")}</th>
					<th>{t("table.col2")}</th>
					<th
						style={{ cursor: "pointer" }}
						onClick={() => handleSort("percent_change_1h")}>
						{t("table.col3")}
					</th>
					<th
						style={{ cursor: "pointer" }}
						onClick={() => handleSort("percent_change_24h")}>
						{t("table.col4")}
					</th>
					<th
						style={{ cursor: "pointer" }}
						onClick={() => handleSort("percent_change_7d")}>
						{t("table.col5")}
					</th>
					<th
						style={{ cursor: "pointer" }}
						onClick={() => handleSort("market_cap")}>
						{t("table.col6")}
					</th>
					<th>{t("table.col7")}</th>
					<th></th>
				</tr>
			</thead>
			<tbody className={styles.tableRow}>
				{sortedMarket.map((coin, index) => {
					const coinInfo = info[coin.id.toString()];
					if (!coinInfo) return null;

					const { name, symbol: infoSymbol, logo } = coinInfo;

					const {
						symbol,
						quote: {
							USD: {
								price,
								percent_change_1h,
								percent_change_24h,
								percent_change_7d,
								market_cap,
							},
						},
					} = coin;

					const tvSymbol = `BINANCE:${symbol}USDT`;

					return (
						<tr key={coin.id}>
							<td>
								<Star size={16} style={{ cursor: "pointer" }} />
							</td>
							<td>{index + 1}</td>
							<td className="text-start">
								<Image
									src={logo}
									alt={name}
									width={20}
									height={20}
									className="me-2"
								/>
								<span className="fw-bold">{name}</span>{" "}
								<small className="text-muted">{infoSymbol}</small>
							</td>
							<td>${price.toFixed(2)}</td>
							<td>{formatChange(percent_change_1h)}</td>
							<td>{formatChange(percent_change_24h)}</td>
							<td>{formatChange(percent_change_7d)}</td>
							<td>${market_cap.toLocaleString()}</td>
							<td>
								<TradingViewMiniChart
									symbol={tvSymbol}
									width={100}
									height={50}
								/>
							</td>
							<td>
								<Button className="rounded-pill">
									<small>{t("table.trade")}</small>
								</Button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
}
