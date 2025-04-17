import React from "react";
import { Button, Col, Form, Row, Tab } from "react-bootstrap";

export default function ProfilePane({
	user,
	activeProfileTab,
	setActiveProfileTab,
	profileTabs,
	t,
}: {
	user: any;
	activeProfileTab: string;
	setActiveProfileTab: React.Dispatch<React.SetStateAction<string>>;
	profileTabs: { title: string; icon: string }[];
	t: any;
}) {
	return (
		<Tab.Pane active={activeProfileTab === profileTabs[0].title.toLowerCase()}>
			<h1>{t("bannerTitle")}</h1>
			<h4 className="mb-4">{t("subtitle")}</h4>
			<Form>
				<Row className="d-flex">
					<Col md={6}>
						<Form.Group>
							<Form.Control
								type="text"
								className="bg-white my-4"
								value={user.user_metadata?.nickname || user.email}
								disabled
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Form.Control
								type="text"
								className="bg-white my-4"
								placeholder="FIRAT"
								disabled
							/>
						</Form.Group>
					</Col>
				</Row>

				<Row className="">
					<Col md={6}>
						<Form.Group>
							<Form.Control
								type="email"
								className="bg-white my-4"
								value={user.email}
								disabled
							/>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<div className="d-flex">
								<Form.Select className="my-4 me-2 w-25">+1</Form.Select>
								<Form.Control
									type="text"
									className="bg-white my-4"
									value={user.user_metadata?.phone || ""}
									placeholder="Phone number"
									disabled
								/>
							</div>
						</Form.Group>
					</Col>
				</Row>

				<Row className="">
					<Col md={6}>
						<Form.Group>
							<Form.Select className="bg-white my-4">
								<option>
									{user.user_metadata?.country || "Select country"}
								</option>
							</Form.Select>
						</Form.Group>
					</Col>
					<Col md={6}>
						<Form.Group>
							<Row>
								<Col md={6}>
									<Form.Select className="bg-white my-4">
										<option>Select option</option>
									</Form.Select>
								</Col>
								<Col md={6}>
									<Form.Select className="bg-white my-4">
										<option>Select option</option>
									</Form.Select>
								</Col>
							</Row>
						</Form.Group>
					</Col>
				</Row>
			</Form>
			<h4>{t("features.title")}</h4>
			<Row>
				<Col>
					<h5 className="my-3 py-2 border-bottom text-muted">
						{t("features.level1.title")}
					</h5>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">{t("features.level1.depositAssets")}</p>
						<Form.Check type="switch" id="custom-switch" />
					</Col>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">
							{t("features.level1.withdrawAssets.title")}
						</p>
						<p className="text-muted">
							{t("features.level1.withdrawAssets.description")}
						</p>
					</Col>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">{t("features.level1.cardPurchase")}</p>
						<Form.Check type="switch" id="custom-switch" />
					</Col>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">{t("features.level1.bankDeposit")}</p>
						<Form.Check type="switch" id="custom-switch" />
					</Col>
					<Button className="px-5 py-2 rounded-pill">
						{t("features.level1.updateProfile")}
					</Button>
				</Col>
				<Col>
					<h5 className="my-3 py-2 border-bottom text-muted">
						{t("features.level2.title")}
					</h5>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">{t("features.level2.fiatSpot")}</p>
						<Form.Check type="switch" id="custom-switch" />
					</Col>
					<Col className="d-flex flex-row justify-content-between">
						<p className="fw-semibold">
							{t("features.level2.marginWallet.title")}
						</p>
						<p className="text-muted">
							{t("features.level2.marginWallet.description")}
						</p>
					</Col>
				</Col>
			</Row>
		</Tab.Pane>
	);
}
