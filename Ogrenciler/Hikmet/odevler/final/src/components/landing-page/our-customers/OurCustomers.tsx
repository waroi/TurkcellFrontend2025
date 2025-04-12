import { useTranslations } from "next-intl";
import Image from "next/image";
import { Card, CardBody, CardText, Col, Container, Row } from "react-bootstrap";

export default function OurCustomers() {
	const t = useTranslations("OurCustomers");
	return (
		<Container>
			<Row className="gap-3 py-5">
				<Col>
					<h1 className="text-left display-4 fs-50 fw-bold">{t("title")}</h1>
					<p className="mb-4 text-left fw-semibold fs-20 fw-light">
						{t("subtitle")}
					</p>
					<p className="mb-4 text-body-tertiary text-left fs-20 fw-light">
						{t("description")}
					</p>
					<Image
						src="/ben.webp"
						alt="User Avatar"
						width={40}
						height={40}
						className="border rounded-circle"
					/>
					<Image
						src="/ben.webp"
						alt="User Avatar"
						width={40}
						height={40}
						className="mx-2 border rounded-circle"
					/>
					<Image
						src="/ben.webp"
						alt="User Avatar"
						width={40}
						height={40}
						className="mx-2 border rounded-circle"
					/>
					<p className="mt-2">
						{t.rich("customerReviews", {
							span: (children) => (
								<span className="text-primary">{children}</span>
							),
						})}
					</p>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card
						style={{
							borderLeft: "4px solid #007bff",
							boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
						}}>
						<CardBody className="d-flex flex-column justify-content-center">
							<h5 className="mb-5 card-title">{t("customerReview")}</h5>
							<div className="d-flex gap-2">
								<Image
									src="/ben.webp"
									alt="User Avatar"
									width={40}
									height={40}
									className="mx-2 border rounded-circle"
								/>

								<Col className="d-flex align-items-center justify-content-between">
									<div>
										<h5 className="mb-1">Hikmet Melik FIRAT</h5>
										<CardText className="text-muted">
											{t("customerTitle")}
										</CardText>
									</div>
									<Image
										src="/customer-logo.svg"
										alt="Star"
										width={100}
										height={50}
										className="mx-2"
									/>
								</Col>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}
