import React, { useState } from "react";

function Navbar({ onMovieSearch }) {
	const [movieName, setMovieName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onMovieSearch(movieName);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container p-4">
					<a className="navbar-brand" href="#">
						MovieApp
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Home
								</a>
							</li>
						</ul>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={(e) => setMovieName(e.currentTarget.value)}
							/>
							<button
								className="btn btn-outline-success"
								type="submit"
								onClick={(e) => handleSubmit(e)}>
								Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
