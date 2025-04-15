import { Card } from "react-bootstrap";

export default function PriceChangeContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	return (
		<Card className="border-0 h-100 card">
			<Card.Header className="bg-white p-3 card-header">
				<h5 className="mb-0">Price Change</h5>
			</Card.Header>
			<section className="p-4 h-100">
				<div className="d-flex align-items-center justify-content-center h-100 text-muted chart-container">
					Price Change Chart
				</div>
			</section>
		</Card>
	);
}
