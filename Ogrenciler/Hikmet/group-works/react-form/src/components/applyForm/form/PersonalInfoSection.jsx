import React from "react";

const PersonalInfoSection = ({ values, errors, touched, handleChange }) => {
	return (
		<>
			<h5 className="text-start mb-3 text-primary">Kişisel Bilgiler</h5>
			<div className="row g-3">
				<div className="col-md-6">
					<div className="form-floating mb-3">
						<input
							type="text"
							className={`form-control ${
								errors.name && touched.name ? "is-invalid" : ""
							}`}
							id="name"
							placeholder="Enter your name"
							value={values.name}
							onChange={handleChange}
						/>
						<label htmlFor="name">Ad</label>
						{errors.name && touched.name && (
							<div className="invalid-feedback">{errors.name}</div>
						)}
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-floating mb-3">
						<input
							type="text"
							className={`form-control ${
								errors.surname && touched.surname ? "is-invalid" : ""
							}`}
							id="surname"
							placeholder="Enter your surname"
							value={values.surname}
							onChange={handleChange}
						/>
						<label htmlFor="surname">Soyad</label>
						{errors.surname && touched.surname && (
							<div className="invalid-feedback">{errors.surname}</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PersonalInfoSection;
