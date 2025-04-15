import { Card } from "react-bootstrap";

export default function OrderBookContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	return (
		<Card className="border-0 h-100">
			<Card.Header className="bg-white p-3 card-header">
				<h5 className="mb-0">{t("orderBook.title")}</h5>
			</Card.Header>
			<section className="p-4 h-100">
				<div className="d-flex align-items-center justify-content-center h-100 text-muted chart-container">
					Order Book Chart
				</div>
			</section>
		</Card>
	);
}
