import { NavLink } from "react-router";

const Header = () => {
	return (
    <nav className="navbar-books navbar navbar-expand-lg position-sticky sticky-top bg-white">
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
          <NavLink className="nav-link" to="/" >Library</NavLink>
          <NavLink className="nav-link px-2" to="/">Categories</NavLink>
          <NavLink className="nav-link" to="/">About Us</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Header;
