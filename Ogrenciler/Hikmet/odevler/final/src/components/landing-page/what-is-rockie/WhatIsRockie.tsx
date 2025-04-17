import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function WhatIsRockie() {
	const t = useTranslations("WhatIsRockie");
	return (
		<Container>
			<Row className="py-5">
				<Col className="d-md-flex justify-content-center align-baseline d-none">
					<Image
						src="/what-is-left.svg"
						alt="What is Rockie Image"
						width={500}
						height={500}
						className="img-fluid"
					/>
				</Col>
				<Col className="justify-content-center my-3">
					<h1>{t("title")}</h1>
					<p className="text-muted">{t("description")}</p>
					{t
						.raw("articles")
						.map(
							(
								article: { title: string; description: string; icon: string },
								index: number
							) => (
								<div key={index} className="mb-3">
									<Col className="d-flex gap-2 align-baseline">
										<Image
											src={article.icon}
											alt={t(`articles.${index}.title`)}
											width={20}
											height={20}
											className="mb-2 img-fluid"
											loading="lazy"
										/>
										<h5>{t(`articles.${index}.title`)}</h5>
									</Col>
									<p className="text-muted">
										{t(`articles.${index}.description`)}
									</p>
								</div>
							)
						)}
					<Button className="px-5 py-2 rounded-5">
						{t("exploreMoreButton")}
					</Button>
				</Col>
			</Row>
		</Container>
	);
}
