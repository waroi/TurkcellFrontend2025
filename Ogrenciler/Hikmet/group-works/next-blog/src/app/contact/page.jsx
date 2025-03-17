export default function Contact() {
	return (
		<section className="container py-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h2 className="text-center mb-4">Bize Ulaşın</h2>
					<form>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								İsim
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="İsminizi girin"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="email" className="form-label">
								E-posta
							</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="E-posta adresinizi girin"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="message" className="form-label">
								Mesaj
							</label>
							<textarea
								className="form-control"
								id="message"
								rows="5"
								placeholder="Mesajınız"></textarea>
						</div>
						<button type="submit" className="btn btn-primary">
							Gönder
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
