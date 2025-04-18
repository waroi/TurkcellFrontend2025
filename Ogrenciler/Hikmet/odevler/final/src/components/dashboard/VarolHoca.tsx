"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ButtonsRow from "./buy/ButtonsRow";
import BuyContainer from "./buy/BuyContainer";
import OrderBookContainer from "./OrderBookContainer";
import OrderHistoryContainer from "./OrderHistoryContainer";
import PriceChangeContainer from "./PriceChangeContainer";
import RecentTradesContainer from "./RecentTradesContainer";
import SellContainer from "./SellContainer";
import TradingViewWidget from "./TradingViewChart";
import BalanceContainer from "./your-balance/BalanceContainer";

export default function VarolHoca() {
	const t = useTranslations("Dashboard");
	const [activeTab, setActiveTab] = useState("buy");
	return (
		<section>
			<Container fluid className="my-4">
				<Row className="g-4">
					<Col lg={8} md={7} sm={12}>
						<div className="border-0 h-50 card">
							<div className="p-4 card-header">
								<h5 className="mb-0">{t("tradingMarket")}</h5>
							</div>
							<section className="p-4 h-100">
								<div className="align-items-center justify-content-center h-100 text-muted">
									<TradingViewWidget />
								</div>
							</section>
						</div>

						<OrderHistoryContainer t={t} />
					</Col>

					<Col lg={4} md={5} sm={12}>
						<div className="d-flex flex-column gap-4">
							<section className="p-4 border-0 card">
								<ul className="nav-underline nav nav-fill">
									<li className="nav-item">
										<button
											className={`nav-link ${
												activeTab === "buy" ? "active" : ""
											}`}
											onClick={() => setActiveTab("buy")}>
											{t("buy")}
										</button>
									</li>
									<li className="nav-item">
										<button
											className={`nav-link ${
												activeTab === "sell" ? "active" : ""
											}`}
											onClick={() => setActiveTab("sell")}>
											{t("sell")}
										</button>
									</li>
								</ul>

								<ButtonsRow t={t} />

								<div className="py-4">
									{activeTab === "buy" && <BuyContainer t={t} />}
									{activeTab === "sell" && <SellContainer t={t} />}
								</div>
							</section>

							<BalanceContainer t={t} />
						</div>
					</Col>
				</Row>
				<Row className="mt-2 g-4">
					<Col xs={12} md={4}>
						<OrderBookContainer t={t} />
					</Col>
					<Col xs={12} md={4}>
						<RecentTradesContainer t={t} />
					</Col>
					<Col xs={12} md={4}>
						<PriceChangeContainer t={t} />
					</Col>
				</Row>
			</Container>
		</section>
	);
}
