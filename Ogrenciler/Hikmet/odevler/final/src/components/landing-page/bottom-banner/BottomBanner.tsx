import { useTranslations } from "next-intl";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function BottomBanner() {
	const t = useTranslations("BottomBanner");
	return (
		<section
			className="bg-primary"
			style={{
				background:
					"linear-gradient(to right, #8444D4, #5B41D9, #383FDE, #5B41D9, #8444D4)",
			}}>
			<Container>
				<Row className="d-flex flex-row align-items-center py-4">
					<Col className="text-white">
						<h3 className="fw-semibold">{t("title")}</h3>
						<p>{t("description")}</p>
					</Col>
					<Col xs="auto">
						<Button
							className="bg-white px-4 py-2 rounded-5 text-black"
							href="/register">
							{t("createAccount")}
						</Button>
					</Col>
				</Row>
			</Container>
		</section>
	);
}
