function Banner() {
	return (
		<section className="container lumos mt-50 mb-50">
			<div className="row">
				<div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center mb-4">
					<div className="card card-image left-image d-flex justify-content-center align-items-center border-0">
						<img src="https://static.vecteezy.com/system/resources/previews/010/835/581/non_2x/feather-black-silhouett-with-lettering-wingardium-leviosa-illustration-vector.jpg" />
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center mb-4">
					<div className="card card-lumos d-flex justify-content-center align-items-center text-center rounded-3">
						<div className="container d-flex flex-column justify-content-center align-items-center text-center">
							<h2>Lumos</h2>
							<div className="custom-switch d-flex justify-content-center align-items-center">
								<div className="form-check form-switch mt-20 mb-20">
									<input
										className="form-check-input"
										type="checkbox"
										id="customSwitch"
										defaultChecked
									/>
									<label
										className="form-check-label"
										htmlFor="customSwitch"></label>
								</div>
							</div>
							<h2>Nox</h2>
						</div>
					</div>
				</div>
				<div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center mb-4 ">
					<div className="card card-image right-image d-flex justify-content-center align-items-center border-0">
						<img src="https://static.vecteezy.com/system/resources/previews/010/835/581/non_2x/feather-black-silhouett-with-lettering-wingardium-leviosa-illustration-vector.jpg" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
