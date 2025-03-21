import { Link } from "react-router";

export default function QuickLink() {
	return (
		<section className="col-lg-2 col-md-6 mb-4 mb-md-5">
			<h6 className="fw-bold mb-3 text-start">Quick Links</h6>
			<ul className="list-unstyled text-start">
				<li className="mb-2">
					<Link to="/" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Home
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/jobs" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Browse Jobs
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/about" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						About Us
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/contact" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Contact
					</Link>
				</li>
				<li className="mb-2">
					<Link to="/blog" className="text-secondary text-decoration-none">
						<i className="bi bi-chevron-right text-primary me-1 small"></i>
						Career Blog
					</Link>
				</li>
			</ul>
		</section>
	);
}
