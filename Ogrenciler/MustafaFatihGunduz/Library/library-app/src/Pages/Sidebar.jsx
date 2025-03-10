import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { useTheme } from "../context/ThemeContext";
import { getCurrentUser, logOut } from "../controller/AuthController";
import { readUser } from "../controller/DBController";

const Sidebar = () => {
	const { theme, toggleTheme } = useTheme();
	const sunIcon = "https://img.icons8.com/ios/452/sun--v1.png";
	const moonIcon = "https://img.icons8.com/ios/452/moon-symbol.png";
	const books = useSelector((state) => state.book.books);
	const publishers = [...new Set(books.map((book) => book.publishing))];
	const handleScroll = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	const [user, setUser] = useState(null);
	const navigate = useNavigate();
	useEffect(() => {
		handleUser();
	}, []);
	const handleUser = async () => {
		const currentUser = getCurrentUser();
		if (currentUser !== null) {
			const user = await readUser(currentUser.uid);
			setUser(user);
		}
	};
	const handleLogOut = async () => {
		try {
			await logOut();
			navigate("/login");
			setUser(null);
			window.location.reload();
		} catch (error) {
			console.log("Error in handleLogOut: ", error);
		}
	};

	const navigateAboutPage = () => {
		navigate("/about");
		window.location.reload();
	};

	return (
		<aside className={`left-side ${theme === "light" ? "light" : "dark"} `}>
			<div className="container py-5 px-3 mt-5 mb-5 d-flex flex-column">
				<ul className="nav flex-column">
					<li className="nav-item">
						<NavLink to="/" className="nav-link text-gray">
							<i className="fa fa-home  me-2 py-2 px-3 mb-2"></i>Anasayfa
						</NavLink>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={() => handleScroll("books")}>
							<i className="fa fa-book  me-2 py-2 px-3 mb-2"></i>Kitaplar
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={() => handleScroll("popular")}>
							<i className="fa fa-newspaper  me-2 py-2 px-3 mb-2"></i>Popüler
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={() => handleScroll("subscribe")}>
							<i className="fa fa-money-check  me-2 py-2 px-3 mb-2"></i>Abonelik
						</a>
					</li>
					<hr className="ms-3 me-3" />
					<li className="nav-item">
						<a className="nav-link" onClick={() => handleScroll("contact")}>
							<i className="fa fa-address-card  me-2 py-2 px-3 mb-2"></i>
							İletişim
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" onClick={() => navigateAboutPage()}>
							<i className="fa fa-info  me-2 py-2 px-3 mb-2"></i>Hakkımızda
						</a>
					</li>
					<div className="theme-switch-container">
						<div className="form-check form-switch d-flex">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="flexSwitchCheckChecked"
								checked={theme === "dark"}
								onChange={toggleTheme}
							/>

							<img
								src={theme === "light" ? sunIcon : moonIcon}
								alt="theme icon"
								className="theme-icon"
							/>
						</div>
					</div>
					<li className="nav-item">
						<a className="nav-link" onClick={async () => await handleLogOut()}>
							<i className="fa-solid fa-right-from-bracket me-2 py-2 px-3 mb-2"></i>
							Çıkış yap
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
