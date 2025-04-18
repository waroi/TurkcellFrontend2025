import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

const imagesData = [
	{
		src: "p1.svg",
		alt: "Partner 1",
		width: 100,
		height: 50,
	},
	{
		src: "p2.svg",
		alt: "Partner 2",
		width: 100,
		height: 50,
	},
	{
		src: "p3.svg",
		alt: "Partner 3",
		width: 100,
		height: 50,
	},
	{
		src: "p4.svg",
		alt: "Partner 4",
		width: 100,
		height: 50,
	},
];

export default function Hero() {
	const t = useTranslations("Hero");
	return (
		<section className="bg-body-tertiary">
			<Container>
				<Row className="py-5">
					<Col>
						<h1 className="text-left display-4 fs-50 fw-bold">{t("title")}</h1>
						<p className="mb-4 text-body-tertiary text-left fs-20 fw-light">
							{t("subtitle")}
						</p>
						<Button className="mb-4 rounded-5" href="/login">
							{t("getStartedButton")}
						</Button>
						<h5 className="mb-3">{t("ourPartners")}</h5>
						<Row className="mt-3 g-4">
							{imagesData.map((image, index) => (
								<Col xs={6} sm={3} key={index}>
									<Image
										src={`/${image.src}`}
										alt={image.alt}
										width={image.width}
										height={image.height}
										className="img-fluid"
									/>
								</Col>
							))}
						</Row>
					</Col>
					<Col className="d-md-flex justify-content-center align-baseline d-none">
						<Image
							src="/hero-right.svg"
							alt="Hero Image"
							width={450}
							height={450}
							className="img-fluid"
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
