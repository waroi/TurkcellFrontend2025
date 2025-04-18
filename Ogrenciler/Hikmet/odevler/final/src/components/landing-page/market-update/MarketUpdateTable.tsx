"use client";

import { toggleFavoriteCoin } from "@/hooks/toggleFavorites";
import useMarketData from "@/hooks/useMarketData";
import { useFavoriteStore } from "@/store/favoritesStore";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Table } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import styles from "./market.module.scss";
import TradingViewMiniChart from "./TradingViewMiniChart";

export default function MarketUpdateTable({
	t,
}: {
	t: (key: string) => string;
}) {
	const { info, market, loading } = useMarketData();
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const router = useRouter();

	const isFavorite = useFavoriteStore((state) => state.isFavorite);

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Table borderless hover responsive className="text-center">
				<thead>
					<tr>
						<th></th>
						<th>#</th>
						<th colSpan={2} className="text-start">
							{t("table.col1")}
						</th>
						<th>{t("table.col2")}</th>
						<th>{t("table.col3")}</th>
						<th className="text-end">{t("table.col4")}</th>
						<th>{t("table.col5")}</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{market.map((coin, index) => {
						const coinId = coin.id.toString();
						const coinInfo = info[coinId];
						if (!coinInfo) return null;

						const price = coin.quote.USD.price.toFixed(2);
						const change = coin.quote.USD.percent_change_24h.toFixed(2);
						const marketCap = coin.quote.USD.market_cap.toLocaleString();
						const isPositive = coin.quote.USD.percent_change_24h >= 0;
						const tvSymbol = `BINANCE:${coinInfo.symbol}USDT`;

						const fav = isFavorite(coinId);

						const handleFavoriteClick = async () => {
							await toggleFavoriteCoin(coinId);
							const updatedFav = useFavoriteStore.getState().isFavorite(coinId);

							setToastMessage(
								updatedFav
									? `${coinInfo.name} favorilere eklendi.`
									: `${coinInfo.name} favorilerden çıkarıldı.`
							);
							setShowToast(true);
						};
						const handleTradeClick = () => {
							router.push(`/dashboard?symbol=${encodeURIComponent(tvSymbol)}`);
						};

						return (
							<tr key={coin.id} className={styles.tableRow}>
								<td className="align-middle">
									<StarIcon
										size={24}
										fill={fav ? "#ffc107" : "none"}
										className="text-warning"
										style={{ cursor: "pointer" }}
										onClick={handleFavoriteClick}
									/>
								</td>
								<td className="align-middle">{index + 1}</td>
								<td colSpan={2} className="text-start align-middle">
									<div className="d-flex align-items-center">
										<Image
											src={coinInfo.logo}
											alt={coinInfo.name}
											width={24}
											height={24}
											className="me-2 rounded-circle"
										/>
										<small className="fw-bold">
											{coinInfo.name}{" "}
											<span className="text-muted">{coinInfo.symbol}</span>
										</small>
									</div>
								</td>
								<td className="align-middle">${price}</td>
								<td
									className={`align-middle ${
										isPositive ? "text-success" : "text-danger"
									}`}>
									{isPositive ? "+" : ""}
									{change}%
								</td>
								<td className="text-end align-middle">${marketCap}</td>
								<td className={`align-middle text-center ${styles.chart}`}>
									<div className="d-flex justify-content-center">
										<TradingViewMiniChart
											symbol={tvSymbol}
											width={120}
											height={50}
										/>
									</div>
								</td>
								<td className="align-middle">
									<Button className="rounded-pill" onClick={handleTradeClick}>
										<small>{t("table.trade")}</small>
									</Button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
			<Toast
				show={showToast}
				onClose={() => setShowToast(false)}
				delay={2500}
				autohide
				className="bottom-0 position-fixed bg-light m-4 end-0">
				<Toast.Header>
					<strong className="me-auto">Favoriler</strong>
					<small>Şimdi</small>
				</Toast.Header>
				<Toast.Body>{toastMessage}</Toast.Body>
			</Toast>
		</>
	);
}
