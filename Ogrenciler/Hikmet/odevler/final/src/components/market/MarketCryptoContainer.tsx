"use client";
import useMarketData from "@/hooks/useMarketData";
import { heroCryptoContainerLinks } from "@/utils/heroCryptoContainersLinks";
import Image from "next/image";
import {
	Badge,
	Button,
	Card,
	CardBody,
	Col,
	Container,
	Row,
} from "react-bootstrap";
import TradingViewMiniChart from "../landing-page/market-update/TradingViewMiniChart";

export default function MarketCryptoContainer() {
	const { info, market, loading } = useMarketData(4);

	return (
		<Container className="shadow mb-5 rounded-4">
			<Row className="align-items-center py-3 border-bottom">
				{heroCryptoContainerLinks.map((crypto, index) => (
					<Col
						key={index}
						xs={4}
						sm={4}
						md={3}
						lg={2}
						xl="auto"
						className="mb-3 mb-xl-0 text-center">
						<div className="d-flex align-items-center justify-content-center">
							{index === 0 ? (
								<Button
									href={`#${crypto.toLowerCase()}`}
									className="rounded-5 text-white fw-medium">
									{crypto}
								</Button>
							) : (
								<a
									href={`#${crypto.toLowerCase()}`}
									className="text-dark text-decoration-none fw-medium">
									{crypto}
								</a>
							)}
						</div>
					</Col>
				))}
			</Row>
			<Row className="py-4">
				{!loading &&
					market.map((coin) => {
						const coinInfo = info[coin.id.toString()];
						if (!coinInfo) return null;

						const price = coin.quote.USD.price;
						const change = coin.quote.USD.percent_change_24h;

						return (
							<Col key={coin.id} xs={12} sm={6} md={4} lg={3}>
								<Card className="shadow-sm rounded-4">
									<CardBody>
										<div className="d-flex align-items-center justify-content-between mb-3">
											<Col className="d-flex flex-column">
												<Image
													src={coinInfo.logo}
													alt={coinInfo.name}
													width={40}
													height={40}
													className="mb-3 img-fluid"
												/>
												<small>{coinInfo.symbol}</small>
											</Col>
											<Col className="d-flex flex-column align-items-end">
												<TradingViewMiniChart
													symbol={`BINANCE:${coinInfo.symbol}USDT`}
												/>
												<Badge
													className={`rounded-pill ${
														change >= 0 ? "bg-success" : "bg-danger"
													}`}>
													{change.toFixed(2)}%
												</Badge>
											</Col>
										</div>
										<div className="d-flex align-items-center justify-content-between text-center">
											<h4 className="fw-medium">
												USD{" "}
												{price.toLocaleString(undefined, {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</h4>
											<p className="text-muted">{coinInfo.symbol}</p>
										</div>
									</CardBody>
								</Card>
							</Col>
						);
					})}
			</Row>
		</Container>
	);
}
