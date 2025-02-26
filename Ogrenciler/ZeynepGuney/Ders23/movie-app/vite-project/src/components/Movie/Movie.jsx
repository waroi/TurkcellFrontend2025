import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Movie.css";

function Movie({ movieName }) {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [selectedMovie, setSelectedMovie] = useState(null);

	// Add this function before the return statement
	const handleMovieClick = (movie) => {
		setSelectedMovie(movie);
	};

	async function allMovies(movieName) {
		try {
			setError(null);
			const response = await MovieClient.getMovies(movieName);
			console.log(response.results);
			if (response.results.length === 0) {
				setError("Aranan film ya da oyuncu bulunamadı.");
				setMovies([]);
			}
			setMovies(response.results);
		} catch (error) {
			console.log(error);
			setError("Bir hata oluştu, tekrar deneyin.");
		}
	}
	useEffect(() => {
		if (movieName) {
			allMovies(movieName);
		}
	}, [movieName]);
	if (error) {
		return <h2 className="text-center text-dark mt-5">{error}</h2>;
	}

	return movies.length === 0 ? (
		<h2 className="text-center mt-5">Hoşgeldiniz</h2>
	) : (
		<section className="container cinema-container">
			{movies.length && <h1 className="mt-5">MOVIES</h1>}
			<div className="row g-4 mt-3">
				{movies.map((movie) => (
					<div key={movie.id} className="col-md-4">
						<div className="card h-100 position-relative overflow-hidden">
							<img
								src={
									movie.poster_path
										? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
										: "https://thumbs.dreamstime.com/b/movie-film-reel-filmstrip-vintage-poster-illustration-clapperboard-background-84525973.jpg"
								}
								className="card-img-top object-fit-cover"
								alt={movie.title}
							/>
							<div className="card-body position-absolute text-white p-3 d-flex flex-column justify-content-between rounded-3 m-3 top-50 start-0 end-0 bottom-0">
								<h5 className="card-title mb-3">{movie.original_title}</h5>
								<p className="card-text mb-3">{movie.overview}</p>
								<div className="mt-auto">
									<a
										type="button"
										href="#"
										className="button-48"
										data-bs-toggle="modal"
										data-bs-target="#movieModal"
										onClick={() => handleMovieClick(movie)}>
										<span className="text">More Details</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div
				className="modal fade"
				id="movieModal"
				tabIndex="-1"
				aria-labelledby="movieModalLabel"
				aria-hidden="true">
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="movieModalLabel">
								{selectedMovie?.original_title}
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							{selectedMovie && (
								<div className="row">
									<div className="col-md-4">
										<img
											src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
											alt={selectedMovie.title}
											className="img-fluid rounded"
										/>
									</div>
									<div className="col-md-8">
										<div className="mb-3">
											<h5>Overview</h5>
											<p>{selectedMovie.overview}</p>
										</div>
										<div className="row">
											<div className="col-md-6">
												<p>
													<strong>Release Date:</strong>{" "}
													{selectedMovie.release_date}
												</p>
												<p>
													<strong>Original Language:</strong>{" "}
													{selectedMovie.original_language.toUpperCase()}
												</p>
												<p>
													<strong>Popularity:</strong>{" "}
													{selectedMovie.popularity}
												</p>
											</div>
											<div className="col-md-6">
												<p>
													<strong>IMDB Point:</strong>{" "}
													{selectedMovie.vote_average}/10
												</p>
												<p>
													<strong>Vote Count:</strong>{" "}
													{selectedMovie.vote_count}
												</p>
												<p>
													<strong>Adult Content:</strong>{" "}
													{selectedMovie.adult ? "Yes" : "No"}
												</p>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="button-48"
								data-bs-dismiss="modal">
								<span className="text">Close</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Movie;
