import React, { useState } from "react";

function Navbar({ onMovieSearch, onPersonSearch }) {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onMovieSearch(inputValue);
		onPersonSearch(inputValue);
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container">
					<h3 className="text-white">
						<strong>MovieApp</strong>
					</h3>
					<button
						className="navbar-toggler bg-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end my-5"
						id="navbarSupportedContent">
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Movie or Actor Search"
								aria-label="Search"
								onChange={(e) => setInputValue(e.currentTarget.value)}
							/>
							<button
								className="btn btn-outline-secondary text-white"
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
