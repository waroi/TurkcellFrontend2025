import React from "react";

const DemographicSection = ({ values, errors, touched, handleChange }) => {
	return (
		<>
			<div className="row g-3">
				<div className="col-md-6">
					<div className="form-floating mb-3">
						<input
							type="date"
							className={`form-control ${
								errors.birthDate && touched.birthDate ? "is-invalid" : ""
							}`}
							id="birthDate"
							value={values.birthDate}
							onChange={handleChange}
						/>
						<label htmlFor="birthDate">Doğum Tarihi</label>
						{errors.birthDate && touched.birthDate && (
							<div className="invalid-feedback">{errors.birthDate}</div>
						)}
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-floating mb-3">
						<select
							className={`form-select ${
								errors.gender && touched.gender ? "is-invalid" : ""
							}`}
							id="gender"
							value={values.gender}
							onChange={handleChange}>
							<option value="" disabled>
								Cinsiyetinizi seçin
							</option>
							<option value="erkek">Erkek</option>
							<option value="kadın">Kadın</option>
							<option value="Other">Diğer</option>
							<option value="Prefer not to say">Belirtmek İstemiyorum</option>
						</select>
						<label htmlFor="gender">Cinsiyet</label>
						{errors.gender && touched.gender && (
							<div className="invalid-feedback">{errors.gender}</div>
						)}
					</div>
				</div>
			</div>

			<div className="form-floating mb-3">
				<input
					type="text"
					className={`form-control ${
						errors.city && touched.city ? "is-invalid" : ""
					}`}
					id="city"
					placeholder="Enter your city"
					value={values.city}
					onChange={handleChange}
				/>
				<label htmlFor="city">Şehir</label>
				{errors.city && touched.city && (
					<div className="invalid-feedback">{errors.city}</div>
				)}
			</div>
		</>
	);
};

export default DemographicSection;
