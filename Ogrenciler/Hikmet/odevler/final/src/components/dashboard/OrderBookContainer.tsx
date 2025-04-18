import { Card, Table } from "react-bootstrap";
import "../../app/[locale]/dashboard/dashboard.scss";

const orderBookNegativeData = [
	{
		price: 32_384.25,
		amount: 0.758,
		total: 24_547.26,
	},
	{
		price: 32_387.42,
		amount: 0.235,
		total: 7_611.04,
	},
	{
		price: 32_390.71,
		amount: 0.126,
		total: 4_081.23,
	},
	{
		price: 32_390.71,
		amount: 0.126,
		total: 4_081.23,
	},
	{
		price: 32_390.71,
		amount: 0.126,
		total: 4_081.23,
	},
];

const orderBookPositiveData = [
	{
		price: 32_378.15,
		amount: 0.542,
		total: 17_549.0,
	},
	{
		price: 32_375.8,
		amount: 1.258,
		total: 40_728.76,
	},
	{
		price: 32_372.45,
		amount: 0.875,
		total: 28_325.89,
	},
	{
		price: 32_372.45,
		amount: 0.875,
		total: 28_325.89,
	},
	{
		price: 32_372.45,
		amount: 0.875,
		total: 28_325.89,
	},
];

export default function OrderBookContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	return (
		<Card className="border-0 h-100">
			<Card.Header className="p-3 card-header">
				<h5 className="mb-0">{t("orderBook.title")}</h5>
			</Card.Header>
			<section className="p-4 h-100">
				<Table responsive borderless className="table-sm">
					<thead>
						<tr className="text-center">
							<th className="text-start">{t("orderBook.col1")}</th>
							<th>{t("orderBook.col2")}</th>
							<th>{t("orderBook.col3")}</th>
						</tr>
					</thead>

					<tbody className="text-danger">
						{orderBookNegativeData.map((order, index) => (
							<tr key={index} className="text-center">
								<td className="text-start">{order.price}</td>
								<td>{order.amount}</td>
								<td>{order.total}</td>
							</tr>
						))}
					</tbody>

					<tbody className="text-success-part">
						{orderBookPositiveData.map((order, index) => (
							<tr key={index} className="text-center">
								<td className="text-start">{order.price}</td>
								<td>{order.amount}</td>
								<td>{order.total}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</Card>
	);
}
