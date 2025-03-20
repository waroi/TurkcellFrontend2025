import React from "react";

export default function LoginForm() {
	return (
		<div className="container d-flex justify-content-center align-items-center vh-100">
			<div className="card p-4 shadow-lg" style={{ width: "400px" }}>
				<h2 className="text-center mb-4">Giriş Yap</h2>
				<form>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">Email</label>
						<input 
							type="email" 
							className="form-control" 
							id="email" 
							placeholder="Email adresinizi giriniz" 
							required 
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">Şifre</label>
						<input 
							type="password" 
							className="form-control" 
							id="password" 
							placeholder="Şifrenizi giriniz" 
							required 
						/>
					</div>
					<button type="submit" className="btn btn-primary w-100">Giriş Yap</button>
				</form>
			</div>
		</div>
	);
}
