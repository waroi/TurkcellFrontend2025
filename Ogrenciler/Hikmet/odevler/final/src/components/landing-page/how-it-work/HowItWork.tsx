import { useTranslations } from "next-intl";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { Key } from "react";
import { Container, Row } from "react-bootstrap";

export default function HowItWork() {
	const t = useTranslations("HowItWork");
	return (
		<section className="bg-body-tertiary">
			<Container>
				<Row className="d-flex flex-col justify-content-between py-5 text-center">
					<h1 className="fs-1">{t("title")}</h1>
					<p className="mx-auto text-muted">{t("subtitle")}</p>
				</Row>
				<Row className="d-flex flex-col justify-content-between text-center">
					{t.raw("steps").map(
						(
							step: {
								icon: string | StaticImport;
								title: string;
								description: string[];
							},
							index: Key | null | undefined
						) => (
							<section
								key={index}
								className="position-relative mb-4 col-12 col-md-6 col-lg-3">
								<div className="d-flex flex-column align-items-center">
									<div className="mb-3">
										<Image
											width={100}
											height={100}
											src={step.icon}
											alt={step.title}
											className="img-fluid"
											loading="lazy"
										/>
									</div>
									<span className="my-2 text-muted">
										{t(`steps.${index}.step`)}
									</span>
									<h2 className="fs-4">{t(`steps.${index}.title`)}</h2>
									<div className="text-muted">
										{t
											.raw(`steps.${index}.description`)
											.map((line: string, i: number) => (
												<p key={i} className="mb-1">
													{line}
												</p>
											))}
									</div>
								</div>
							</section>
						)
					)}
				</Row>
			</Container>
		</section>
	);
}
