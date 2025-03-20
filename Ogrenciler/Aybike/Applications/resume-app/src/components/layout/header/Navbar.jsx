import { NavLink, useNavigate } from "react-router";
import { useUser } from "../../../context/UserContext";
import AuthService from "../../../services/AuthService";
import './Navbar.css'

const Navbar = () => {
	const { user } = useUser();
	const navigate = useNavigate()

	const logOut = () => {
		if (AuthService.signOut()) {
			alert("Çıkış başarılı yönlendiriliyorsunuz...")
			navigate('/')
		}
	}

	return (
		<header>
			<nav className="navbar navbar-expand-lg">
				<div className="container-fluid flex-column">
					<NavLink className="navbar-brand" to="/">
						<img className="logo" src="../vite.svg" alt="logo" />
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
								<NavLink className="nav-link active" to="/application">
									CV Ekle
								</NavLink>
							</li>
							{user !== null ? <>
								<li className="nav-item">
									<NavLink className="nav-link active" to="/admin/applications">
										Başvurular
									</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link active" to="/" onClick={logOut}>
										Çıkış Yap
									</NavLink>
								</li>
							</> : <li className="nav-item">
								<NavLink className="nav-link active" to="/admin/login">
									Giriş Yap
								</NavLink>
							</li>}

						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
