import { NavLink } from "react-router";

const Navbar = () => {
	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid">
					<NavLink className="navbar-brand" to="/">
						<img className="logo" src="/src/assets/logo.png" alt="logo" />
					</NavLink>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink className="nav-link active" to="/">
									Applications
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
