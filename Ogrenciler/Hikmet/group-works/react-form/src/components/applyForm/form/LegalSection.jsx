import React from "react";

const LegalSection = ({ values, errors, handleChange }) => {
	return (
		<div className="card border-light mb-4 mt-4">
			<div className="card-header bg-light">
				<h5 className="mb-0 fs-6">Yasal Bilgilendirmeler</h5>
			</div>
			<div className="card-body">
				<div className="mb-3 form-check">
					<input
						type="checkbox"
						className={`form-check-input ${
							errors.securityPolicy ? "is-invalid" : ""
						}`}
						id="securityPolicy"
						checked={values.securityPolicy}
						onChange={handleChange}
					/>
					<label className="form-check-label" htmlFor="securityPolicy">
						Kişisel verilerimin işlenmesine onay veriyorum
					</label>
					{errors.securityPolicy && (
						<div className="invalid-feedback">{errors.securityPolicy}</div>
					)}
				</div>

				<div className="mb-0 form-check">
					<input
						type="checkbox"
						className={`form-check-input ${
							errors.isAccepted ? "is-invalid" : ""
						}`}
						id="isAccepted"
						checked={values.isAccepted}
						onChange={handleChange}
					/>
					<label className="form-check-label" htmlFor="isAccepted">
						Kullanım şartlarını kabul ediyorum
					</label>
					{errors.isAccepted && (
						<div className="invalid-feedback">{errors.isAccepted}</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LegalSection;
