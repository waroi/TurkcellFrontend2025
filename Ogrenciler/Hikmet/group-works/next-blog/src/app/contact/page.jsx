export default function Contact() {
	return (
		<section className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h2 className="text-center mb-4">Contact Us</h2>
					<form>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Enter your name"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Enter your email"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Message
							</label>
							<textarea
								className="form-control"
								id="message"
								rows="5"
								placeholder="Your message"></textarea>
						</div>
						<button type="submit" className="btn btn-primary">
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
