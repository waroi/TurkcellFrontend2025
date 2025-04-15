import { ChevronDown } from "lucide-react";
import { Badge, Col, Container, Row } from "react-bootstrap";

export default function DashboardBannerContainer() {
	return (
		<section className="bg-body-tertiary border rounded-3">
			<Container className="py-4">
				<Row className="d-flex flex-row align-items-center">
					<Col md={2}>
						<h3 className="fw-semibold">
							BTC/USD <ChevronDown />
						</h3>
					</Col>
					<Col md={2}>
						<h4>Last Price</h4>
						<p className="fs-4 fw-semibold">$26,000</p>
					</Col>
					<Col md={2}>
						<h4>24h Change</h4>
						<p className="fs-4 fw-semibold">
							0.001447 <Badge className="rounded-pill">3.24%</Badge>
						</p>
					</Col>
					<Col md={2}>
						<h4>24h High</h4>
						<p className="fs-4 fw-semibold">0.060069</p>
					</Col>
					<Col md={2}>
						<h4>24h Low</h4>
						<p className="fs-4 fw-semibold">0.056864</p>
					</Col>
					<Col md={2}>
						<h4>24h Volume</h4>
						<p className="fs-4 fw-semibold">8,532.12 BTC</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
