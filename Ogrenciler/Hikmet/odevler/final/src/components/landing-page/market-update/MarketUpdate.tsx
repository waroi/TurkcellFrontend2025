import { useTranslations } from "next-intl";
import { Col, Container } from "react-bootstrap";

export default function MarketUpdate() {
	const t = useTranslations("MarketUpdate");
	return (
		<Container>
			<Col className="d-flex flex-row justify-content-between py-5">
				<h2 className="text-left display-5 fs-50 fw-bold">{t("title")}</h2>
				<p className="mb-4 text-body-tertiary text-left fs-20 fw-light">
					{t("seeAll")}
				</p>
			</Col>
		</Container>
	);
}
