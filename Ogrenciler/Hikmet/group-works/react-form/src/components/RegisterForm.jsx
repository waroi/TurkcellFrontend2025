import { createUserWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { registerSchema } from "../lib/register";

export default function RegisterForm() {
	const navigate = useNavigate();
	const [registerError, setRegisterError] = useState(null);

	const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
				confirmPassword: "",
			},
			validationSchema: registerSchema,
			onSubmit: async (values, actions) => {
				try {
					setRegisterError(null);
					await createUserWithEmailAndPassword(
						auth,
						values.email,
						values.password
					);
					actions.resetForm();
					navigate("/");
				} catch (error) {
					console.error("Registration error:", error.message);
					setRegisterError(
						error.code === "auth/email-already-in-use"
							? "An account with this email already exists"
							: "Failed to create account. Please try again."
					);
				}
			},
		});

	return (
		<div className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="card border-0 shadow-lg">
						<div className="card-body p-5">
							<div className="text-center mb-4">
								<i
									className="bi bi-person-plus text-primary"
									style={{ fontSize: "3rem" }}></i>
								<h3 className="mt-3 mb-1 fw-bold">Create Account</h3>
								<p className="text-muted">
									Join JobPortal and find your dream job
								</p>
							</div>

							{registerError && (
								<div className="alert alert-danger" role="alert">
									{registerError}
								</div>
							)}

							<form onSubmit={handleSubmit}>
								<div className="form-floating mb-3">
									<input
										type="email"
										className={`form-control ${
											errors.email && touched.email ? "is-invalid" : ""
										}`}
										id="email"
										placeholder="name@example.com"
										value={values.email}
										onChange={handleChange}
									/>
									<label htmlFor="email">Email address</label>
									{errors.email && touched.email && (
										<div className="invalid-feedback">{errors.email}</div>
									)}
								</div>

								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${
											errors.password && touched.password ? "is-invalid" : ""
										}`}
										id="password"
										placeholder="Password"
										value={values.password}
										onChange={handleChange}
									/>
									<label htmlFor="password">Password</label>
									{errors.password && touched.password && (
										<div className="invalid-feedback">{errors.password}</div>
									)}
								</div>

								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${
											errors.confirmPassword && touched.confirmPassword
												? "is-invalid"
												: ""
										}`}
										id="confirmPassword"
										placeholder="Confirm Password"
										value={values.confirmPassword}
										onChange={handleChange}
									/>
									<label htmlFor="confirmPassword">Confirm Password</label>
									{errors.confirmPassword && touched.confirmPassword && (
										<div className="invalid-feedback">
											{errors.confirmPassword}
										</div>
									)}
								</div>

								<div className="form-check mb-4">
									<input
										className="form-check-input"
										type="checkbox"
										id="termsAgreed"
									/>
									<label className="form-check-label" htmlFor="termsAgreed">
										I agree to the{" "}
										<Link to="/terms" className="text-decoration-none">
											Terms of Service
										</Link>{" "}
										and{" "}
										<Link to="/privacy" className="text-decoration-none">
											Privacy Policy
										</Link>
									</label>
								</div>

								<button
									type="submit"
									className="btn btn-primary w-100 py-2 mb-3"
									disabled={isSubmitting}>
									{isSubmitting ? (
										<>
											<span
												className="spinner-border spinner-border-sm me-2"
												role="status"
												aria-hidden="true"></span>
											Creating Account...
										</>
									) : (
										"Register"
									)}
								</button>
							</form>

							<div className="text-center mt-4">
								<p className="mb-0">
									Already have an account?{" "}
									<Link
										to="/login"
										className="fw-semibold text-decoration-none">
										Sign In
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
