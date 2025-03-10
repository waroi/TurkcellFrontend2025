import { NavLink } from "react-router";
import { auth } from "../../firebase";
import book from "../../public/books.png";
const NavbarView = () => {
	return (
		<div className="container-fluid">
			<div className="d-flex align-items-center justify-content-between">
				<div className="d-flex align-items-center justify-content-center gap-3">
					<img src={book} alt="" />
					<NavLink to="/" className="navbar-brand text-black fw-bold" href="#">
						Kitap Dünyası
					</NavLink>
				</div>
				<div className="search-field">
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Kitap adı veya yazar ara"
					/>
				</div>
				<div className="user-field d-flex align-items-center justify-content-center">
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-bs-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="true"></button>
						<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Türkçe
							</a>
							<a className="dropdown-item" href="#">
								İngilizce
							</a>
						</div>
					</div>
					<p
						className="text-center"
						style={({ display: "contents" }, { margin: 4 })}>
						{auth.currentUser !== null ? (
							auth.currentUser.email.slice(0, 5)
						) : (
							<NavLink to="/login" className="navbar-brand text-black fw-bold">
								Giriş Yap
							</NavLink>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default NavbarView;

/**
 * 		<nav className="navbar navbar-expand-lg navbar-light position-sticky top-0 z-2 shadow-sm py-3">
			<div className="container-fluid">
				<a className="navbar-brand text-white fw-bold" href="#">
					Kitap Dünyası
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
							<NavLink
								className="nav-link active text-white"
								aria-current="page"
								href="#"
								to="/">
								Anasayfa
							</NavLink>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#books">
								Kitaplar
							</a>
						</li>

						<li className="nav-item dropdown ">
							<a
								className="nav-link dropdown-toggle text-white"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Yayınevleri
							</a>
							<ul className="dropdown-menu">
								{publishers.length > 0 ? (
									publishers.map((publisher) => (
										<li key={publisher}>
											<NavLink
												className="dropdown-item"
												to={`/yayinevi/${publisher}`}>
												{publisher}
											</NavLink>
										</li>
									))
								) : (
									<li>
										<span className="dropdown-item">Yayınevi yok</span>
									</li>
								)}
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#contact">
								İletişim
							</a>
						</li>
					</ul>

					<ul className="navbar-nav">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<div className="avatar ms-2 me-2"></div>
							</a>
							<ul className="dropdown-menu">
								{user ? (
									<>
										<li>
											<span className="dropdown-item">{user.email}</span>
										</li>
										<li>
											<button className="dropdown-item" onClick={handleLogOut}>
												Çıkış Yap
											</button>
										</li>
									</>
								) : (
									<li>
										<NavLink
											to="/login"
											className="dropdown-item text-dark text-decoration-none">
											Giriş Yap
										</NavLink>
									</li>
								)}
							</ul>
						</li>
					</ul>
					{user && (
						<button
							type="button"
							className="btn btn-success"
							data-bs-toggle="modal"
							data-bs-target="#bookEvent"
							onClick={() => setEditingBookId}>
							Kitap Ekle
						</button>
					)}
					<button
						className={`btn btn-secondary ms-3 ${
							theme === "light" ? "bg-dark text-light" : "bg-white text-dark"
						}`}
						onClick={toggleTheme}>
						{theme === "light" ? "🌙 Karanlık Mod" : "☀️ Aydınlık Mod"}
					</button>
				</div>
			</div>
		</nav>
 */
