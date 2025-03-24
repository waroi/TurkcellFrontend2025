const ContactInfoSection = ({ values, errors, touched, handleChange }) => {
	return (
		<>
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
				<label htmlFor="email">E-posta Adresi</label>
				{errors.email && touched.email && (
					<div className="invalid-feedback">{errors.email}</div>
				)}
			</div>

			<div className="form-floating mb-3">
				<input
					type="text"
					className={`form-control ${
						errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
					}`}
					id="phoneNumber"
					placeholder="Enter your phone number"
					value={values.phoneNumber}
					onChange={handleChange}
				/>
				<label htmlFor="phoneNumber">Telefon Numarası (5XXXXXXXXX)</label>
				{errors.phoneNumber && touched.phoneNumber && (
					<div className="invalid-feedback">{errors.phoneNumber}</div>
				)}
			</div>
		</>
	);
};

export default ContactInfoSection;
