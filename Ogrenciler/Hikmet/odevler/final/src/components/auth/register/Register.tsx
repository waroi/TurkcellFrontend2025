"use client";
import { RegisterFormData, registerSchema } from "@/lib/definitions";
import { yupResolver } from "@hookform/resolvers/yup";

import PageInfoContainer from "@/components/PageInfoContainer";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Nav,
	Row,
	Spinner,
	Tab,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { signup } from "../actions";

export default function Register() {
	const t = useTranslations("Register");

	const defaultTab = t.raw("tabs")[0].toLowerCase();
	const [activeRegisterTab, setActiveRegisterTab] =
		useState<string>(defaultTab);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormData>({
		resolver: yupResolver(registerSchema),
	});

	const onSubmit = async (data: RegisterFormData) => {
		setLoading(true);
		setErrorMessage(null);
		console.log("Register Data:", data);
		try {
			const result = await signup(data);

			if (result?.error) setErrorMessage(result.error);
		} catch (error) {
			console.error("Client-side signup error:", error);
			setErrorMessage("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<PageInfoContainer t={t} />
			<Container className="py-5">
				<Row className="justify-content-center">
					<Col md={8} lg={6}>
						<Card className="border-0">
							<Card.Body className="p-4">
								<h1 className="mb-2 text-center fw-bold">{t("title")}</h1>
								<p className="mb-4 text-muted text-center">{t("subtitle")}</p>

								<Tab.Container
									activeKey={activeRegisterTab}
									onSelect={(tab) => setActiveRegisterTab(tab || "email")}>
									<div className="d-flex justify-content-center mb-4">
										<Nav className="tab-button-group nav-pills">
											{t.raw("tabs").map((tab: string, index: number) => (
												<Nav.Item key={tab.toLowerCase()}>
													<Button
														variant={
															activeRegisterTab === tab.toLowerCase()
																? "primary"
																: "outline-secondary"
														}
														className={`rounded-pill px-2 py-1 fs-6 ${
															index === 0 ? "me-2" : ""
														}`}
														onClick={() =>
															setActiveRegisterTab(tab.toLowerCase())
														}>
														{tab}
													</Button>
												</Nav.Item>
											))}
										</Nav>
									</div>

									<Tab.Content>
										<Tab.Pane eventKey={t.raw("tabs")[0].toLowerCase()}>
											<Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
												<Form.Group className="mb-4" controlId="email">
													<Form.Label className="text-muted">
														{t("email.label")}
													</Form.Label>
													<div className="d-flex">
														<Form.Control
															type="email"
															placeholder={t("email.placeholder")}
															{...register("email")}
															isInvalid={!!errors.email}
															className="border-end-0 rounded-start"
														/>
														<Button
															variant="primary"
															className="border-start-0 rounded-end"
															style={{ marginLeft: "-1px" }}>
															{t("email.authenticate")}
														</Button>
													</div>
													{errors.email && (
														<Form.Text className="text-danger">
															{errors.email.message as string}
														</Form.Text>
													)}
												</Form.Group>

												<Form.Group className="mb-2" controlId="password">
													<Form.Label className="text-muted">
														{t.rich("password.label", {
															span: (children) => (
																<small className="text-danger">
																	{children}
																</small>
															),
														})}
													</Form.Label>
													<Form.Control
														type="password"
														placeholder={t("password.placeholder")}
														{...register("password")}
														isInvalid={!!errors.password}
													/>
													{errors.password && (
														<Form.Text className="text-danger">
															{errors.password.message as string}
														</Form.Text>
													)}
												</Form.Group>
												<Form.Group
													className="mb-4"
													controlId="confirmPassword">
													<Form.Control
														type="password"
														placeholder={t("password.confirmPassword")}
														{...register("confirmPassword")}
														isInvalid={!!errors.confirmPassword}
													/>
													{errors.confirmPassword && (
														<Form.Text className="text-danger">
															{errors.confirmPassword.message as string}
														</Form.Text>
													)}
												</Form.Group>

												<Form.Group className="mb-4" controlId="nickName">
													<Form.Label className="text-muted">
														{t.rich("nickName.label", {
															span: (children) => (
																<small className="text-danger">
																	{children}
																</small>
															),
														})}
													</Form.Label>
													<Form.Control
														type="text"
														placeholder={t("nickName.placeholder")}
														{...register("nickName")}
														isInvalid={!!errors.nickName}
													/>
													{errors.nickName && (
														<Form.Text className="text-danger">
															{errors.nickName.message as string}
														</Form.Text>
													)}
												</Form.Group>

												<Form.Group className="mb-4" controlId="country">
													<Form.Label className="text-muted">
														{t("country.label")}
													</Form.Label>
													<Form.Select
														{...register("country")}
														isInvalid={!!errors.country}>
														<option value="">Select your country</option>
														<option value="United States">United States</option>
														<option value="United Kingdom">
															United Kingdom
														</option>
														<option value="Canada">Canada</option>
														<option value="Australia">Australia</option>
														<option value="Turkey">Turkey</option>
													</Form.Select>
													{errors.country && (
														<Form.Text className="text-danger">
															{errors.country.message as string}
														</Form.Text>
													)}
												</Form.Group>

												<Form.Group className="mb-4" controlId="phone">
													<Form.Label className="text-muted">
														{t.rich("phoneNumber.label", {
															span: (children) => (
																<small className="text-danger">
																	{children}
																</small>
															),
														})}
													</Form.Label>
													<Form.Control
														type="text"
														placeholder={t("phoneNumber.placeholder")}
														{...register("phone")}
														isInvalid={!!errors.phone}
													/>
													{errors.phone && (
														<Form.Text className="text-danger">
															{errors.phone.message as string}
														</Form.Text>
													)}
												</Form.Group>

												<Form.Group className="mb-4" controlId="uidCode">
													<Form.Label className="text-muted">
														{t.rich("uidCode.label", {
															span: (children) => (
																<small className="text-danger">
																	{children}
																</small>
															),
														})}
													</Form.Label>
													<Form.Control
														type="text"
														placeholder={t("uidCode.placeholder")}
													/>
												</Form.Group>

												<div className="d-grid mt-5">
													<Button
														variant="primary"
														type="submit"
														size="lg"
														className="rounded-pill"
														disabled={loading}>
														{loading ? (
															<>
																<Spinner
																	as="span"
																	animation="border"
																	size="sm"
																	role="status"
																	aria-hidden="true"
																/>
																<span className="ms-2">Registering...</span>
															</>
														) : (
															t("preRegisterButton")
														)}
													</Button>
												</div>

												<div className="mt-4 text-center">
													<p className="mb-0">
														{t("haveAnAccount")}{" "}
														<a href="/login" className="text-primary">
															{t("login")}
														</a>
													</p>
												</div>
											</Form>
										</Tab.Pane>

										<Tab.Pane eventKey={t.raw("tabs")[1].toLowerCase()}>
											<div className="p-5 text-center">
												<p>Coming Soon...</p>
											</div>
										</Tab.Pane>
									</Tab.Content>
								</Tab.Container>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}
