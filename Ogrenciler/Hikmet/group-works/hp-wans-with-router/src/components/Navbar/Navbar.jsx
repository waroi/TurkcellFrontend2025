import { NavLink } from "react-router";

function Navbar() {
	return (
		<nav
			className="navbar navbar-expand-lg bg-black navbar-dark fixed-top"
			data-bs-theme="dark"
			id="main-nav">
			<div className="container">
				<NavLink className="navbar-brand fs-24" to="/">
					HP WANDS
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarC"
					aria-controls="navbar"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarC">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-4">
						<li className="nav-item">
							<NavLink
								className="nav-link active"
								aria-current="page"
								to="/"
								data-bs-dismiss="collapse">
								Anasayfa
							</NavLink>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#about-us"
								data-bs-dismiss="collapse">
								Hakkımızda
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link"
								href="#products"
								data-bs-dismiss="collapse">
								Ürünler
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#sss" data-bs-dismiss="collapse">
								SSS
							</a>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/contact"
								data-bs-dismiss="collapse">
								İletişim
							</NavLink>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-3"
							type="search"
							placeholder="Sayfada ara"
							aria-label="Search"
						/>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
