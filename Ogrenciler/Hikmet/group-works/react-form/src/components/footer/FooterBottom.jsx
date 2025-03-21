import { Link } from "react-router";

export default function FooterBottom() {
	return (
		<section className="row align-items-center">
			<div className="col-md-7 col-lg-8">
				<p className="mb-md-0 text-secondary small text-start">
					© {new Date().getFullYear()} JobPortal. All rights reserved.
				</p>
			</div>
			<div className="col-md-5 col-lg-4">
				<div className="text-md-end text-start">
					<ul className="list-inline mb-0">
						<li className="list-inline-item">
							<Link to="/privacy" className="text-secondary small">
								Privacy
							</Link>
						</li>
						<li className="list-inline-item">
							<span className="text-secondary small mx-1">•</span>
						</li>
						<li className="list-inline-item">
							<Link to="/terms" className="text-secondary small">
								Terms
							</Link>
						</li>
						<li className="list-inline-item">
							<span className="text-secondary small mx-1">•</span>
						</li>
						<li className="list-inline-item">
							<Link to="/cookies" className="text-secondary small">
								Cookies
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
