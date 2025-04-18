import { useTranslations } from "next-intl";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

export default function MarketHero() {
	const t = useTranslations("Market");

	return (
		<section className="bg-body-secondary">
			<Container>
				<Row className="py-5">
					<Col className="d-flex flex-column justify-content-center">
						<h1 className="text-left display-4 fs-50 fw-semibold">
							{t("title")}
						</h1>
						<p className="mb-4 text-body-tertiary text-left fs-5 fw-light">
							{t.rich("subtitle", {
								span: (children) => (
									<span className="text-black fw-bold">{children}</span>
								),
							})}
						</p>
					</Col>
					<Col className="d-md-flex justify-content-end d-none">
						<Image
							src="/market-hero-img.svg"
							alt="Market"
							width={500}
							height={500}
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
