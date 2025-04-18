"use client";

import {
	changePasswordSchema,
	type ChangePasswordFormData,
} from "@/lib/definitions";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import {
	Button,
	Card,
	Col,
	Form,
	Row,
	Spinner,
	Tab,
	Toast,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { changeUserPassword } from "./action";

export default function ChangePasswordPane({
	activeProfileTab,
	profileTabs,
}: {
	activeProfileTab: string;
	profileTabs: { title: string; icon: string }[];
}) {
	const [loading, setLoading] = useState(false);
	const [showToast, setShowToast] = useState(false);
	const [toastMessage, setToastMessage] = useState("");
	const [toastVariant, setToastVariant] = useState<"success" | "danger">(
		"success"
	);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<ChangePasswordFormData>({
		resolver: yupResolver(changePasswordSchema),
	});

	const onSubmit = async (data: ChangePasswordFormData) => {
		setLoading(true);
		setShowToast(false);

		try {
			const result = await changeUserPassword({
				newPassword: data.newPassword,
			});

			if (result.success) {
				setToastVariant("success");
				setToastMessage(result.message);
				reset();
			} else {
				setToastVariant("danger");
				setToastMessage(result.message);
			}
			setShowToast(true);
		} catch (error: any) {
			console.error("Error submitting password change:", error);
			setToastVariant("danger");
			setToastMessage(error.message || "An unexpected error occurred.");
			setShowToast(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Tab.Pane active={activeProfileTab === profileTabs[5].title.toLowerCase()}>
			<Toast
				show={showToast}
				onClose={() => setShowToast(false)}
				delay={3000}
				autohide
				className={`position-fixed top-0 end-0 m-3`}
				bg={toastVariant}
				style={{ zIndex: 1050 }}>
				<Toast.Header closeButton={true}>
					<strong className="me-auto">
						{toastVariant === "success" ? "Success" : "Error"}
					</strong>
				</Toast.Header>
				<Toast.Body className="text-white">{toastMessage}</Toast.Body>
			</Toast>

			<Card className="border-0">
				<Card.Header className="bg-white py-3 border-0">
					<h2 className="mb-0 fw-bold">{profileTabs[5].title}</h2>
				</Card.Header>
				<Card.Body>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Row className="mb-3">
							<Col md={6}>
								<Form.Group controlId="currentPassword">
									<Form.Label>Current Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Enter current password"
										{...register("currentPassword")}
										isInvalid={!!errors.currentPassword}
									/>
									{errors.currentPassword && (
										<Form.Control.Feedback type="invalid">
											{errors.currentPassword.message}
										</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>
							<Col md={6}>
								<Form.Group controlId="twoFactorCode">
									<Form.Label>2FA Code (Optional)</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter 2FA code if enabled"
									/>
								</Form.Group>
							</Col>
						</Row>

						<Row className="mb-3">
							<Col md={6}>
								<Form.Group controlId="newPassword">
									<Form.Label>New Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Enter new password"
										{...register("newPassword")}
										isInvalid={!!errors.newPassword}
									/>

									{errors.newPassword && (
										<Form.Control.Feedback type="invalid">
											{errors.newPassword.message}
										</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>
							<Col md={6}>
								<Form.Group controlId="confirmNewPassword">
									<Form.Label>Confirm New Password</Form.Label>
									<Form.Control
										type="password"
										placeholder="Confirm new password"
										{...register("confirmNewPassword")}
										isInvalid={!!errors.confirmNewPassword}
									/>

									{errors.confirmNewPassword && (
										<Form.Control.Feedback type="invalid">
											{errors.confirmNewPassword.message}
										</Form.Control.Feedback>
									)}
								</Form.Group>
							</Col>
						</Row>

						<Button
							variant="primary"
							type="submit"
							className="px-4 rounded-pill"
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
									<span className="ms-2">Changing...</span>
								</>
							) : (
								"Change Password"
							)}
						</Button>
					</Form>
				</Card.Body>
			</Card>
		</Tab.Pane>
	);
}
