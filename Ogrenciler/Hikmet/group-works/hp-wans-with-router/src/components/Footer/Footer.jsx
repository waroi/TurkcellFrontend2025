import React from "react";

function Footer() {
	return (
		<footer className="text-center text-lg-start text-white bg-black">
			<div className="container d-flex justify-content-between p-4">
				<div className="">
					<span>Sosyal ağlar üzerinden bizimle bağlantıda kalın:</span>
				</div>
				<div>
					<ul className="nav justify-content-end list-unstyled d-flex">
						<li className="ms-3">
							<a className="text-muted" href="#" aria-label="Twitter">
								<i className="fab fa-twitter text-white"></i>
							</a>
						</li>
						<li className="ms-3">
							<a className="text-muted" href="#" aria-label="Instagram">
								<i className="fab fa-instagram text-white"></i>
							</a>
						</li>
						<li className="ms-3">
							<a className="text-muted" href="#" aria-label="Facebook">
								<i className="fab fa-facebook text-white"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="">
				<div className="container text-center text-md-start mt-5">
					<div className="row mt-3">
						<div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
							<h6 className="text-uppercase fw-bold">HP WANDS</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#fff",
									height: "2px",
								}}
							/>
							<p>
								Sihir dünyasına hoş geldiniz!
								<br />
								Asaların büyülü dünyasını keşfedin.
							</p>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold">İletişim</h6>
							<hr
								className="mb-4 mt-0 d-inline-block mx-auto"
								style={{
									width: "60px",
									backgroundColor: "#fff",
									height: "2px",
								}}
							/>
							<p>
								<i className="fas fa-home mr-3"></i> Balıkesir, Karesi
							</p>
							<p>
								<i className="fas fa-envelope mr-3"></i> hp@wands.com
							</p>
							<p>
								<i className="fas fa-phone mr-3"></i> + 01 234 567 88
							</p>
							<p>
								<i className="fas fa-print mr-3"></i> + 01 234 567 89
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center p-3" style={{ backgroundColor: "black" }}>
				© 2025 Copyright Company,{" "}
				<strong className="fw-bold">Zeynep Güney</strong> tarafından
				geliştirilmiştir.
			</div>
		</footer>
	);
}

export default Footer;
