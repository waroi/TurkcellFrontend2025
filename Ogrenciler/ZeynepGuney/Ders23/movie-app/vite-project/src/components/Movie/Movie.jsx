import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Movie.css";

function Movie({ movieName }) {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	async function allMovies(movieName) {
		try {
			const response = await MovieClient.getMovies(movieName);
			if (response.results.length === 0){
				setError("Aranan film bulunamadı.");
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
	if (error){
		return<h2 className="text-center text-dark mt-5">{error}</h2>
	}

	return movies.length === 0 ? (
		<h2 className="text-center mt-5">Hoşgeldiniz</h2>
	) : (
		<section className="container cinema-container">
			{movies.length && <h1 className="mt-5">MOVIES</h1>}
			<div className="row g-4 mt-5">
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
									<p className="mb-1">Release Date: {movie.release_date}</p>
									<p className="mb-2">Rating: {movie.vote_average}/10</p>
									<a href="#" className=" button-48">
										<span className="text">More Details</span>
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
