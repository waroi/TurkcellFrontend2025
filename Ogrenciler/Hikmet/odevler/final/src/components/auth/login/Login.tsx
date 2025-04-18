"use client";

import PageInfoContainer from "@/components/PageInfoContainer";
import { type LoginFormData, loginSchema } from "@/lib/definitions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import Image from "next/image"; // Image componentini import edin
import { useState } from "react";
import {
	Button,
	Card,
	Col,
	Container,
	Form,
	Nav,
	Row,
	Tab,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { login } from "../actions";
import styles from "./login.module.scss";

export default function Login() {
	const t = useTranslations("Login");

	const defaultTab = t.raw("tabs")[0].toLowerCase();
	const [activeLoginTab, setActiveLoginTab] = useState<string>(defaultTab);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormData>({
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (data: LoginFormData) => {
		console.log("Login Data:", data);
		login(data);
	};

	return (
		<>
			<PageInfoContainer t={t} />
			<Container className="py-5">
				<Row className="align-items-center">
					<Col lg={3} className="d-lg-block d-none"></Col>

					<Col xs={12} md={8} lg={6} className="mb-4 mb-lg-0">
						<Card className="border-0">
							<Card.Body className="p-4">
								<h1 className="mb-2 text-center fw-bold">{t("title")}</h1>
								<p className="mb-4 text-muted text-center">{t("subtitle")}</p>

								<Col
									className={`d-flex align-items-center mx-auto mb-4 p-1 rounded-pill ${styles.loginUrl}`}>
									<div
										className={`d-flex align-items-center bg-success me-2 rounded-circle ${styles.loginIcon}`}>
										<i className="text-white bi bi-shield-lock-fill fs-6"></i>
									</div>
									<div className="d-flex align-items-center">
										<small className="text-success fs-6">https://</small>
										<small className="text-dark fs-6">
											accounts.rockie.com/login
										</small>
									</div>
								</Col>

								<Tab.Container
									activeKey={activeLoginTab}
									onSelect={(tab) => setActiveLoginTab(tab || "email")}>
									{/* Tab Nav */}
									<div className="d-flex justify-content-center mb-4">
										<Nav className="tab-button-group nav-pills">
											{t.raw("tabs").map((tab: string, index: number) => (
												<Nav.Item key={tab.toLowerCase()}>
													<Button
														variant={
															activeLoginTab === tab.toLowerCase()
																? "primary"
																: "outline-secondary"
														}
														className={`rounded-pill px-2 py-1 fs-6 ${
															index === 0 ? "me-2" : ""
														}`}
														onClick={() =>
															setActiveLoginTab(tab.toLowerCase())
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

													<Form.Control
														type="email"
														placeholder={t("email.placeholder")}
														{...register("email")}
														isInvalid={!!errors.email}
														className="border-end-0 rounded-start"
													/>

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

												<div className="d-flex justify-content-between mb-4">
													<Form.Group controlId="rememberMe">
														<Form.Check.Input type="checkbox" />
														<Form.Check.Label>
															{t("rememberMe")}
														</Form.Check.Label>
													</Form.Group>
													<Form.Group controlId="forgotPassword">
														<a href="/forgot-password" className="text-danger">
															{t("forgotPassword")}
														</a>
													</Form.Group>
												</div>

												<div className="d-grid mt-3">
													<Button
														variant="primary"
														type="submit"
														size="lg"
														className="rounded-pill">
														{t("loginButton")}
													</Button>
												</div>

												<div className="mt-4 text-center">
													<p className="mb-0">
														{t("notAMember")}
														<a href="/register" className="text-primary">
															{t("register")}
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

					<Col lg={3} className="d-lg-block text-center d-none">
						<Image
							src="/madam.png"
							alt="Hikmet'in Hayatı"
							width={180}
							height={180}
							className="mb-3"
						/>

						<h5 className="fw-bold">{t("loginWithQR")}</h5>
						<p className="text-muted">
							{t.rich("qrDescription", {
								span: (children) => <strong>{children}</strong>,
							})}
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
