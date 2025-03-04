import React from "react";

const NavbarView = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light position-sticky top-0 z-2 shadow-sm">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Library
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#books">
								Kitaplar
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#contact">
								İletişim
							</a>
						</li>
					</ul>
					<button
						type="button"
						className="btn btn-success"
						data-bs-toggle="modal"
						data-bs-target="#bookEvent">
						Kitap Ekle
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavbarView;
