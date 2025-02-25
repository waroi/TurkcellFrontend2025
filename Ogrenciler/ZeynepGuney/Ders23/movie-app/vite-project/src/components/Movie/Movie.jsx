import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";

function Movie({ movieName }) {
	const [movies, setMovies] = useState([]);

	async function allMovies(movieName) {
		const response = await MovieClient.getMovies(movieName);
		setMovies(response.results);
	}

	useEffect(() => {
		if (movieName) {
			allMovies(movieName);
		}
	}, [movieName]);

	return (
		<section className="container">
			<div className="row g-4 mt-5">
				{movies.map((movie) => (
					<div key={movie.id} className="col-md-4">
						<div className="card" style={{ height: "100%" }}>
							<img
								src={
									movie.poster_path
										? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
										: "https://via.placeholder.com/500x750.png?text=No+Image"
								}
								className="card-img-top"
								alt={movie.title}
							/>
							<div className="card-body d-flex flex-column">
								<h5 className="card-title">{movie.original_title}</h5>
								<p className="card-text flex-grow-1">{movie.overview}</p>
								<div className="mt-auto">
									<p className="mb-1">Release Date: {movie.release_date}</p>
									<p className="mb-2">Rating: {movie.vote_average}/10</p>
									<a href="#" className="btn btn-primary">
										More Details
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Movie;
