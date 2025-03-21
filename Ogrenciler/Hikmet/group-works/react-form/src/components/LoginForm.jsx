import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { loginSchema } from "../lib/login";

export default function LoginForm() {
	const navigate = useNavigate();
	const [loginError, setLoginError] = useState(null);

	const { values, errors, touched, isSubmitting, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: loginSchema,
			onSubmit: async (values, actions) => {
				try {
					setLoginError(null);
					await signInWithEmailAndPassword(auth, values.email, values.password);
					actions.resetForm();
					navigate("/");
				} catch (error) {
					console.error("Login error:", error.message);
					//! HATA MESAJLARINI KONTROL ET
					setLoginError("Invalid email or password. Please try again.");
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
									className="bi bi-person-circle text-primary"
									style={{ fontSize: "3rem" }}></i>
								<h3 className="mt-3 mb-1 fw-bold">Welcome Back</h3>
								<p className="text-muted">Sign in to continue to JobPortal</p>
							</div>

							{loginError && (
								<div className="alert alert-danger" role="alert">
									{loginError}
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

								<div className="d-flex justify-content-between mb-4">
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
											id="rememberMe"
										/>
										<label className="form-check-label" htmlFor="rememberMe">
											Remember me
										</label>
									</div>
									<Link to="/forgot-password" className="text-decoration-none">
										Forgot password?
									</Link>
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
											Signing in...
										</>
									) : (
										"Sign In"
									)}
								</button>
							</form>

							<div className="text-center mt-4">
								<p className="mb-0">
									Don't have an account?{" "}
									<Link
										to="/register"
										className="fw-semibold text-decoration-none">
										Create Account
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
