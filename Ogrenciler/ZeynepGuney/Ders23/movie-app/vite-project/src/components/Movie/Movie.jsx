import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Movie.css";


function Movie({ movieName }) {
	const [movies, setMovies] = useState([]);

	async function allMovies(movieName) {
		const response = await MovieClient.getMovies(movieName);
		setMovies(response.results);
		console.log("rr", response.results);
	}

	useEffect(() => {
		if (movieName) {
			allMovies(movieName);
		}
	}, [movieName]);

	// return (
	// 	<section className="container cinema-container">
	// 		<div className="row g-4 mt-5">
	// 			{movies.map((movie) => (
	// 				<div key={movie.id} className="col-md-4">
	// 					<div className="card" style={{ height: "100%" }}>
	// 						<img
	// 							src={
	// 								movie.poster_path
	// 									? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
	// 									: "https://img.freepik.com/premium-vector/clapperboard-yellow-background-movie-poster-flat-vector-illustration_581871-484.jpg"
	// 							}
	// 							className="card-img-top"
	// 							alt={movie.title}
	// 							style={{ height: "500px", objectFit: "cover" }}
	// 						/>
	// 						<div className="card-body d-flex flex-column justify-content-between ">
	// 							<h5 className="card-title">{movie.original_title}</h5>
	// 							<p className="card-text flex-grow-1">{movie.overview}</p>
	// 							<div className="mt-auto">
	// 								<p className="mb-1">Release Date: {movie.release_date}</p>
	// 								<p className="mb-2">Rating: {movie.vote_average}/10</p>
	// 								<a href="#" className="btn btn-primary">
	// 									More Details
	// 								</a>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			))}
	// 		</div>
	// 	</section>
	// );
	return (
		movies.length === 0 ? (
			<h1 className="text-center">Hoşgeldiniz</h1>
		) : (
			<section className="container cinema-container">
				{movies.length > 0 && <h1 className="mt-5">MOVIES</h1>}
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
								<div className="card-body position-absolute text-white p-3 d-flex flex-column justify-content-between rounded-5 m-3 top-50 start-0 end-0 bottom-0">
									<h5 className="card-title mb-3">{movie.original_title}</h5>
									<p className="card-text mb-3">{movie.overview}</p>
									<div className="mt-auto">
										<p className="mb-1">Release Date: {movie.release_date}</p>
										<p className="mb-2">Rating: {movie.vote_average}/10</p>
										<a href="#" className="btn btn-outline-dark text-white">
											More Details
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		)
	);
}

export default Movie;
