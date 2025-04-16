import {
	ChartColumn,
	ChevronDown,
	Clock,
	MoveDown,
	MoveUp,
} from "lucide-react";
import { Badge, Col, Container, Row } from "react-bootstrap";

export default function DashboardBannerContainer() {
	return (
		<section className="bg-white border-0 rounded-3">
			<Container
				fluid
				className="d-flex align-items-center justify-content-center py-4">
				<Row className="align-items-center text-muted">
					<Col xs={12} sm={12} md={2} className="mb-3 mb-md-0">
						<h3 className="d-flex align-items-center text-black fw-semibold">
							BTC/USD <ChevronDown className="ms-2" size={20} />
						</h3>
					</Col>

					<Col xs={5} sm={5} md={2} className="mb-3 mb-md-0">
						<h4 className="fs-6">Last Price</h4>
						<h4 className="mb-0 fs-4 fw-semibold">
							<span className="text-danger">0.08567</span> $26,000
						</h4>
					</Col>

					<Col xs={5} sm={5} md={2} className="mb-3 mb-md-0">
						<h4 className="fs-6">
							<Clock className="me-1" size={16} />
							24h Change
						</h4>
						<h4 className="mb-0 text-success fs-4 fw-semibold">
							0.001447
							<Badge className="bg-success rounded-pill text-white">
								<MoveUp size={16} />
								3.24%
							</Badge>
						</h4>
					</Col>

					<Col xs={5} sm={5} md={2} className="mb-3 mb-md-0">
						<h4 className="fs-6">
							<MoveUp size={16} /> 24h High
						</h4>
						<p className="mb-0 fs-4 fw-semibold">0.060069</p>
					</Col>

					<Col xs={5} sm={5} md={2} className="mb-3 mb-md-0">
						<h4 className="fs-6">
							<MoveDown size={16} />
							24h Low
						</h4>
						<p className="mb-0 fs-4 fw-semibold">0.056864</p>
					</Col>

					<Col xs={5} sm={5} md={2} className="mb-3 mb-md-0">
						<h4 className="fs-6">
							<ChartColumn size={16} />
							24h Volume
						</h4>
						<p className="mb-0 fs-4 fw-semibold">8,532 BTC</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
