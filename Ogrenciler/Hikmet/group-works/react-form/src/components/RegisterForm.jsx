import React from "react";
import { useFormik } from "formik";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router"; 
import {registerSchema} from "../lib/register"


export default function RegisterForm() {
	const navigate = useNavigate(); 

	const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: registerSchema,
		onSubmit: async (values, actions) => {
			try {
				await createUserWithEmailAndPassword(auth, values.email, values.password);
				console.log("Kayıt başarılı!");

				actions.resetForm();

				navigate("/");
			} catch (error) {
				console.error("Kayıt hatası:", error.message);
			}
		},
	});

	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="card p-4 shadow-lg" style={{ width: "400px" }}>
				<h2 className="text-center mb-4">Kayıt Ol!</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
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
					<div className="mb-3">
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
						{isSubmitting ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
					</button>
				</form>
			</div>
		</div>
	);
}
