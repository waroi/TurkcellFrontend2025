function Contact() {
	return (
		<>
			<div className="contact-images d-flex justify-content-between mt-20 mx-3">
				<div className="contact-image flex-start">
					<img
						src="https://i.pinimg.com/1200x/06/61/b6/0661b673bddfd8dcd6e41d87132f9463.jpg"
						alt=""
						style={{ height: "120px", width: "100px" }}
					/>
				</div>
				<div className="contact-image  flex-end">
					<img
						src="https://i.pinimg.com/1200x/06/61/b6/0661b673bddfd8dcd6e41d87132f9463.jpg"
						alt=""
						style={{ height: "120px", width: "100px" }}
					/>
				</div>
			</div>
			<section className="container my-20 contact bg-light-green">
				<div className="d-flex align-items-center justify-content-center flex-column">
					<h1 className="text-black text-center mt-10">İLETİŞİM</h1>
					<form className="needs-validation" novalidate>
						<div className="row">
							<div className="form-group col-12 col-md-6">
								<label for="firstName">Ad</label>
								<input
									type="text"
									className="form-control"
									id="firstName"
									required
								/>
								<div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
							</div>
							<div className="form-group col-12 col-md-6">
								<label for="lastName">Soyad</label>
								<input
									type="text"
									className="form-control"
									id="lastName"
									required
								/>
								<div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
							</div>
						</div>
						<div className="form-group">
							<label for="email">Email</label>
							<input
								type="email"
								className="form-control"
								id="email"
								required
							/>
							<div className="invalid-feedback">
								Geçerli bir email adresi girin.
							</div>
						</div>
						<div className="form-group">
							<label for="message">Mesaj</label>
							<textarea
								id="message"
								className="form-control"
								rows="4"
								required></textarea>
							<div className="invalid-feedback">Bu alan boş bırakılamaz.</div>
						</div>
						<button type="submit" className="btn btn-success my-3">
							Mesaj Gönder
						</button>
					</form>
				</div>
			</section>
			<div className="contact-images d-flex justify-content-between mx-3 my-5">
				<div className="contact-image flex-start">
					<img
						src="https://i.pinimg.com/1200x/06/61/b6/0661b673bddfd8dcd6e41d87132f9463.jpg"
						alt=""
						style={{ height: "120px", width: "100px" }}
					/>
				</div>
				<div className="contact-image  flex-end">
					<img
						src="https://i.pinimg.com/1200x/06/61/b6/0661b673bddfd8dcd6e41d87132f9463.jpg"
						alt=""
						style={{ height: "120px", width: "100px" }}
					/>
				</div>
			</div>
		</>
	);
}

export default Contact;
