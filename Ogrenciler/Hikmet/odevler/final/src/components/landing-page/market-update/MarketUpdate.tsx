"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import MarketUpdateTable from "./MarketUpdateTable";

const buttons = [
	"View All",
	"Metaverse",
	"Entertainment",
	"Energy",
	"NFT",
	"Gaming",
	"Music",
];

export default function MarketUpdate() {
	const [activeButton, setActiveButton] = useState("View All");
	const t = useTranslations("MarketUpdate");
	return (
		<Container>
			<Col className="d-flex flex-row justify-content-between py-3">
				<h2 className="text-left display-5 fs-50 fw-bold">{t("title")}</h2>
				<p className="text-body-tertiary text-left fs-20 fw-light">
					{t("seeAll")}
				</p>
			</Col>
			<Row className="d-flex flex-row justify-content-between mb-2">
				<Col className="overflow-auto">
					<div className="d-flex flex-row gap-2">
						{buttons.map((button) => (
							<Button
								variant={activeButton === button ? "primary" : "link"}
								key={button}
								className={`rounded-pill  ${
									activeButton === button
										? "bg-primary text-white"
										: "text-decoration-none text-muted"
								}`}
								onClick={() => setActiveButton(button)}>
								{button}
							</Button>
						))}
					</div>
				</Col>
				<Col md={3}>
					<InputGroup>
						<Form.Control
							className="py-2 ps-3 pe-5 rounded-pill"
							placeholder="Search"
							aria-label="Search"
						/>
					</InputGroup>
				</Col>
			</Row>
			<MarketUpdateTable t={t} />
		</Container>
	);
}
