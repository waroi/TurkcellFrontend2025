import { Star } from "lucide-react";
import { Button, Card, Col, Table } from "react-bootstrap";

const recentTradesData = [
	{
		pair: "BTC/USDT",
		lastPrice: 0.0225454,
		priceChange: "+1.54%",
	},
	{
		pair: "ETH/USDT",
		lastPrice: 0.0225454,
		priceChange: "-1.54%",
	},
	{
		pair: "XRP/USDT",
		lastPrice: 0.0225454,
		priceChange: "+1.54%",
	},
	{
		pair: "LTC/USDT",
		lastPrice: 0.0225454,
		priceChange: "-1.54%",
	},
	{
		pair: "ADA/USDT",
		lastPrice: 0.0225454,
		priceChange: "+1.54%",
	},
];

export default function PriceChangeContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	return (
		<Card className="border-0 h-100 card">
			<Card.Header className="p-2">
				<Col className="d-flex align-items-center justify-content-between">
					<Star />
					<Button className="rounded-pill">BTC</Button>
					<Button className="rounded-pill">ETH</Button>
					<Button className="rounded-pill">USDT</Button>
				</Col>
			</Card.Header>
			<section className="p-4 h-100">
				<Table responsive borderless className="table-sm">
					<thead>
						<tr className="text-center">
							<th className="text-start">{t("thirdGrid.col1")}</th>
							<th>{t("thirdGrid.col2")}</th>
							<th className="text-end">{t("thirdGrid.col3")}</th>
						</tr>
					</thead>

					<tbody>
						{recentTradesData.map((trade, index) => (
							<tr key={index} className="text-center">
								<td className="text-start">
									<Star className="me-2" />
									{trade.pair}
								</td>
								<td>{trade.lastPrice}</td>
								<td
									className={`text-end ${
										trade.priceChange.startsWith("+")
											? "text-success"
											: "text-danger"
									}`}>
									{trade.priceChange}
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</Card>
	);
}
