import { Col, Container } from "react-bootstrap";

export default function PageInfoContainer(
	{
		t,
	}: {
		t: (key: string) => string;
	} = { t: () => "" }
) {
	return (
		<div className="bg-body-secondary py-5">
			<Container>
				<Col className="d-flex align-items-center justify-content-between">
					<h1>{t("bannerTitle")}</h1>
					<span className="text-muted">{t("path")}</span>
				</Col>
			</Container>
		</div>
	);
}
