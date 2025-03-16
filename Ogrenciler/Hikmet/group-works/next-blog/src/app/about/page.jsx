export default function About() {
	return (
		<section className="container">
			<div className="row py-5">
				<div className="col-md-6">
					<h2 className="mb-4">About Us</h2>
					<p className="lead">
						Welcome to our blog! We are passionate about sharing knowledge and
						insights with our readers.
					</p>
					<p>
						Founded in 2024, our platform serves as a hub for technology
						enthusiasts, developers, and creative minds to connect and learn
						together.
					</p>
				</div>
				<div className="col-md-6">
					<img
						src="/next.svg"
						alt="About Us"
						className="img-fluid rounded shadow"
					/>
				</div>
			</div>
		</section>
	);
}
