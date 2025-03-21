export default function Newsletter() {
	return (
		<section className="col-lg-4 col-md-6 mb-4 mb-md-5">
			<h6 className="fw-bold mb-3 text-start">Stay Updated</h6>
			<p className="text-secondary mb-3 text-start">
				Subscribe to our newsletter for job tips and updates
			</p>
			<div className="input-group mb-3">
				<input
					type="email"
					className="form-control border-end-0"
					placeholder="Email address"
					aria-label="Email address"
				/>
				<button className="btn btn-primary px-4" type="button">
					<i className="bi bi-send-fill"></i>
				</button>
			</div>
			<div className="d-flex align-items-center mt-4 text-start">
				<i className="bi bi-telephone-fill text-primary me-2"></i>
				<span className="text-secondary">+1 (555) 123-4567</span>
			</div>
			<div className="d-flex align-items-center mt-2 text-start">
				<i className="bi bi-envelope-fill text-primary me-2"></i>
				<span className="text-secondary">contact@jobportal.com</span>
			</div>
		</section>
	);
}
