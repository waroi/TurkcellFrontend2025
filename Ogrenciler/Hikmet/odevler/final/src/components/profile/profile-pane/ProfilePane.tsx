"use client";

import { profileUpdateSchema } from "@/lib/definitions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button, Col, Form, Row, Tab, Toast } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function ProfilePane({
	user,
	activeProfileTab,
	setActiveProfileTab,
	profileTabs,
	t,
}: {
	user: any;
	activeProfileTab: string;
	profileTabs: { title: string; icon: string }[];
	t: any;
	setActiveProfileTab: React.Dispatch<React.SetStateAction<string>>;
}) {
	const [updating, setUpdating] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastVariant, setToastVariant] = useState<"success" | "danger">(
		"success"
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(profileUpdateSchema),
		defaultValues: {
			nickname: user?.user_metadata?.nickname || "",
			phone: user?.user_metadata?.phone || "",
		},
	});

	return (
		<Tab.Pane active={activeProfileTab === profileTabs[0].title.toLowerCase()}>
			<h1>{t("bannerTitle")}</h1>
			<h4 className="mb-4">{t("subtitle")}</h4>

			<Toast
				show={showToast}
				onClose={() => setShowToast(false)}
				delay={3000}
				autohide
				className={`position-fixed top-0 end-0 m-3`}
				bg={toastVariant}
				style={{ zIndex: 1050 }}>
				<Toast.Header>
					<strong className="me-auto">
						{toastVariant === "success" ? "Success" : "Error"}
					</strong>
				</Toast.Header>
				<Toast.Body className="text-white">{toastMessage}</Toast.Body>
			</Toast>

			<Form>
				<Row className="d-flex">
					<Col md={6}>
						<Form.Group>
							<Form.Control
								type="text"
								className="bg-white my-4"
								{...register("nickname")}
								isInvalid={!!errors.nickname}
								placeholder="Nickname"
							/>
							{errors.nickname && (
								<Form.Control.Feedback type="invalid">
									{errors.nickname.message as string}
								</Form.Control.Feedback>
							)}
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

				<Row>
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
								<Form.Select className="my-4 me-2 w-25" disabled>
									<option>+90</option>
								</Form.Select>
								<Form.Control
									type="text"
									className="bg-white my-4"
									placeholder="Phone number"
									{...register("phone")}
									isInvalid={!!errors.phone}
								/>
							</div>
							{errors.phone && (
								<Form.Control.Feedback type="invalid" className="d-block">
									{errors.phone.message as string}
								</Form.Control.Feedback>
							)}
						</Form.Group>
					</Col>
				</Row>

				<Row>
					<Col md={6}>
						<Form.Group>
							<Form.Control
								type="text"
								placeholder="Country"
								value={user.user_metadata?.country || ""}
								disabled
								className="bg-white my-4"
							/>
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
				<h4>{t("features.title")}</h4>
				<Row>
					<Col>
						<h5 className="my-3 py-2 border-bottom text-muted">
							{t("features.level1.title")}
						</h5>
						<Col className="d-flex flex-row justify-content-between">
							<p className="fw-semibold">
								{t("features.level1.depositAssets")}
							</p>
							<Form.Check type="switch" id="deposit-switch" />
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
							<Form.Check type="switch" id="card-switch" />
						</Col>
						<Col className="d-flex flex-row justify-content-between">
							<p className="fw-semibold">{t("features.level1.bankDeposit")}</p>
							<Form.Check type="switch" id="bank-switch" />
						</Col>
						<Button
							type="submit"
							className="px-5 py-2 rounded-pill"
							disabled={updating}>
							{updating ? "Updating..." : t("features.level1.updateProfile")}
						</Button>
					</Col>
					<Col>
						<h5 className="my-3 py-2 border-bottom text-muted">
							{t("features.level2.title")}
						</h5>
						<Col className="d-flex flex-row justify-content-between">
							<p className="fw-semibold">{t("features.level2.fiatSpot")}</p>
							<Form.Check type="switch" id="fiat-switch" />
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
			</Form>
		</Tab.Pane>
	);
}
