import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { auth } from "../firebase/config";

const Navbar = () => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const handleLogout = async () => {
		try {
			await signOut(auth);
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
			<div className="container">
				<Link className="navbar-brand d-flex align-items-center" to="/">
					<i className="bi bi-briefcase-fill text-primary me-2"></i>
					<span className="fw-bold">JobPortal</span>
				</Link>

				<button
					className="navbar-toggler border-0"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Browse Jobs
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About Us
							</Link>
						</li>
						{user && (
							<li className="nav-item">
								<Link className="nav-link" to="/applied-jobs">
									My Applications
								</Link>
							</li>
						)}
					</ul>

					{!loading && (
						<>
							{user ? (
								<div className="dropdown">
									<button
										className="btn btn-outline-primary dropdown-toggle d-flex align-items-center"
										type="button"
										id="userDropdown"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										<i className="bi bi-person-circle me-2"></i>
										<span className="d-none d-md-inline">{user.email}</span>
									</button>
									<ul
										className="dropdown-menu dropdown-menu-end shadow-sm"
										aria-labelledby="userDropdown">
										<li className="dropdown-item-text px-3 py-2 text-primary">
											<small>
												<strong>Signed in as</strong>
											</small>
											<div
												className="text-truncate"
												style={{ maxWidth: "200px" }}>
												{user.email}
											</div>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<Link className="dropdown-item" to="/profile">
												<i className="bi bi-person me-2"></i>
												My Profile
											</Link>
										</li>
										<li>
											<Link className="dropdown-item" to="/applied-jobs">
												<i className="bi bi-briefcase me-2"></i>
												My Applications
											</Link>
										</li>
										{user.email === "admin@example.com" && (
											<li>
												<Link className="dropdown-item" to="/admin">
													<i className="bi bi-gear me-2"></i>
													Admin Panel
												</Link>
											</li>
										)}
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<button
												className="dropdown-item text-danger"
												onClick={handleLogout}>
												<i className="bi bi-box-arrow-right me-2"></i>
												Sign Out
											</button>
										</li>
									</ul>
								</div>
							) : (
								<div className="d-flex gap-2">
									<Link
										className="btn btn-outline-primary rounded-pill px-4"
										to="/login">
										Sign In
									</Link>
									<Link
										className="btn btn-primary rounded-pill px-4"
										to="/register">
										Register
									</Link>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
