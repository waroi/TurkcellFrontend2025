import React from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { loginSchema } from "../lib/login";
import { auth } from "../firebase/config";

const onSubmit = async (values, actions) => {
	try {
		await signInWithEmailAndPassword(auth, values.email, values.password);
		console.log("Giriş başarılı!");
		actions.resetForm();
	} catch (error) {
		console.error("Giriş hatası:", error.message);
	}
};

export default function LoginForm() {
	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useFormik({
			initialValues: {
				email: "",
				password: "",
			},
			validationSchema: loginSchema,
			onSubmit,
		});

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="card p-4 shadow-lg" style={{ width: "400px" }}>
				<h2 className="text-center mb-4">Giriş Yap</h2>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="email" className="form-label">Email</label>
						<input
							type="email"
							className={`form-control ${errors.email ? "is-invalid" : ""}`}
							id="email"
							placeholder="Email adresinizi giriniz"
							value={values.email}
							onChange={handleChange}
							required
						/>
						{errors.email && <div className="invalid-feedback">{errors.email}</div>}
					</div>
					<div>
						<label htmlFor="password" className="form-label">Şifre</label>
						<input
							type="password"
							className={`form-control ${errors.password ? "is-invalid" : ""}`}
							id="password"
							placeholder="Şifrenizi giriniz"
							value={values.password}
							onChange={handleChange}
							required
						/>
						{errors.password && <div className="invalid-feedback">{errors.password}</div>}
					</div>
					<button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
						{isSubmitting ? "Giriş Yapılıyor..." : "Giriş Yap"}
					</button>
				</form>
			</div>
		</div>
	);
}
