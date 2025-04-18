import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function DownloadApp() {
	const t = useTranslations("DownloadApp");
	return (
		<section className="bg-body-tertiary">
			<Container>
				<Row className="py-5">
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
										<div className="d-flex gap-2">
											<Image
												src={article.icon}
												alt={t(`articles.${index}.title`)}
												width={20}
												height={20}
												className="mt-1"
												loading="lazy"
											/>

											<Col>
												<h5 className="mb-1">{t(`articles.${index}.title`)}</h5>
												<p className="mb-0 text-muted">
													{t(`articles.${index}.description`)}
												</p>
											</Col>
										</div>
									</div>
								)
							)}
						<Col className="d-flex align-items-center justify-content-start mt-4">
							<Link
								href="https://play.google.com/store/apps/details?id=com.rockie.app"
								target="_blank"
								rel="noopener noreferrer">
								<Image
									src="/android.svg"
									alt="App Store"
									width={150}
									height={50}
									className="me-3"
								/>
							</Link>
							<Link
								href="https://apps.apple.com/us/app/rockie/id6444221234"
								target="_blank"
								rel="noopener noreferrer">
								<Image
									src="/ios.svg"
									alt="App Store"
									width={150}
									height={50}
									className="me-3"
								/>
							</Link>
						</Col>
					</Col>
					<Col className="d-md-flex justify-content-center align-baseline d-none">
						<Image
							src="/takla.svg"
							alt="What is Rockie Image"
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
