export default function Resources() {
	return (
		<section className="col-lg-2 col-md-6 mb-4 mb-md-5">
			<h6 className="fw-bold mb-3 text-start">Resources</h6>
			<ul className="list-unstyled text-start">
				<li className="mb-2">
					<Link to="/privacy" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Privacy Policy
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/terms" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Terms of Service
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/faq" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						FAQ
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/support" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Support
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/sitemap" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Sitemap
					</Link>
				</li>
			</ul>
		</section>
	);
}
