import { CircleCheckBig, CircleX } from "lucide-react";
import { useState } from "react";
import { Card, Form, InputGroup, Nav, Table } from "react-bootstrap";
import styles from "./dashboardComponents.module.scss";

const orderHistoryData = [
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "BUY",
		price: "24,547.26",
		status: <CircleCheckBig className="text-success" />,
		date: "2023-10-01 12:00",
	},
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "SELL",
		price: "7,611.04",
		status: <CircleX className="text-danger" />,
		date: "2023-10-01 12:05",
	},
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "BUY",
		price: "24,547.26",
		status: <CircleCheckBig className="text-success" />,
		date: "2023-10-01 12:00",
	},
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "SELL",
		price: "7,611.04",
		status: <CircleX className="text-danger" />,
		date: "2023-10-01 12:05",
	},
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "BUY",
		price: "24,547.26",
		status: <CircleCheckBig className="text-success" />,
		date: "2023-10-01 12:00",
	},
	{
		time: "24-04 14:40",
		pair: "BTC/ETH",
		type: "SELL",
		price: "7,611.04",
		status: <CircleX className="text-danger" />,
		date: "2023-10-01 12:05",
	},
];

export default function OrderHistoryContainer({
	t,
}: {
	t: {
		(key: string): string;
	};
}) {
	const [activeTab, setActiveTab] = useState("tab1");
	return (
		<Card className="my-2 border-0 h-50">
			<Card.Header className="p-3">
				<Nav className="nav-underline">
					<Nav.Item>
						<button
							className={`nav-link ${activeTab === "tab1" ? "active" : ""}`}
							onClick={() => setActiveTab("tab1")}>
							{t("orderHistory.tab1")}
						</button>
					</Nav.Item>
					<Nav.Item>
						<button
							className={`nav-link text-muted ${
								activeTab === "tab2" ? "active" : ""
							}`}
							onClick={() => setActiveTab("tab2")}>
							{t("orderHistory.tab2")}
						</button>
					</Nav.Item>
					<Nav.Item>
						<button
							className={`nav-link text-muted ${
								activeTab === "tab3" ? "active" : ""
							}`}
							onClick={() => setActiveTab("tab3")}>
							{t("orderHistory.tab3")}
						</button>
					</Nav.Item>
					<Nav.Item className="ms-auto">
						<div className="position-relative me-3 nav-search-container">
							<InputGroup>
								<Form.Control
									className="py-2 ps-3 pe-5 rounded-pill"
									aria-label="Search"
									placeholder={t("orderHistory.searchPlaceholder")}
								/>
							</InputGroup>
						</div>
					</Nav.Item>
				</Nav>
			</Card.Header>
			<section className="p-4 h-100 overflow-y-auto">
				<Table responsive borderless className="table-sm">
					<thead>
						<tr className="text-center">
							<th className="text-start">{t("orderHistory.tableCols.col1")}</th>
							<th>{t("orderHistory.tableCols.col2")}</th>
							<th>{t("orderHistory.tableCols.col3")}</th>
							<th>{t("orderHistory.tableCols.col4")}</th>
							<th>{t("orderHistory.tableCols.col5")}</th>
							<th className="text-end">{t("orderHistory.tableCols.col6")}</th>
						</tr>
					</thead>
					<tbody>
						{orderHistoryData.map((order, index) => (
							<tr key={index} className={`text-center ${styles.orderRow}`}>
								<td className="text-start">{order.time}</td>
								<td>{order.pair}</td>
								<td>{order.type}</td>
								<td>{order.price}</td>
								<td>{order.status}</td>
								<td className="text-end">{order.date}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</section>
		</Card>
	);
}
