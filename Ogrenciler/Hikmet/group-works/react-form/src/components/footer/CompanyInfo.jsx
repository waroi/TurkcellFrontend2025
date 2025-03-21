import React from "react";

export default function CompanyInfo() {
	return (
		<section className="col-lg-4 col-md-6 mb-4 mb-md-5">
			<div className="d-flex align-items-center mb-3">
				<i className="bi bi-briefcase-fill text-primary me-2 fs-4"></i>
				<h5 className="mb-0 fw-bold">JobPortal</h5>
			</div>
			<p className="text-secondary mb-4 text-start">
				Connecting talented professionals with their dream careers. Find your
				perfect job match or hire the best talent for your company.
			</p>
			<div className="d-flex gap-3 mb-4 text-start">
				<a href="#" className="text-secondary hover-primary">
					<i className="bi bi-facebook fs-5"></i>
				</a>
				<a href="#" className="text-secondary hover-primary">
					<i className="bi bi-twitter-x fs-5"></i>
				</a>
				<a href="#" className="text-secondary hover-primary">
					<i className="bi bi-linkedin fs-5"></i>
				</a>
				<a href="#" className="text-secondary hover-primary">
					<i className="bi bi-instagram fs-5"></i>
				</a>
			</div>
		</section>
	);
}
