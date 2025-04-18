import { Card, Table } from "react-bootstrap";

const recentTradesData = [
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
	{
		time: 14.04,
		price: 0.0225454,
		amount: 1.262415,
	},
];

export default function RecentTradesContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	return (
		<Card className="border-0 h-100 card">
			<Card.Header className="p-3 card-header">
				<h5 className="mb-0">{t("recentTrades.title")}</h5>
			</Card.Header>
			<section className="p-4 h-100">
				<Table responsive borderless className="table-sm">
					<thead>
						<tr>
							<th className="text-start">{t("recentTrades.col1")}</th>
							<th className="text-end">{t("recentTrades.col2")}</th>
							<th className="text-end">{t("recentTrades.col3")}</th>
						</tr>
					</thead>
					<tbody>
						{recentTradesData.map((trade, index) => (
							<tr key={index}>
								<td className="text-start">{trade.time}</td>
								<td
									className={`${
										Math.random() > 0.5 ? "text-success" : "text-danger"
									} text-end`}>
									{trade.price}
								</td>
								<td className="text-end">{trade.amount}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</Card>
	);
}
