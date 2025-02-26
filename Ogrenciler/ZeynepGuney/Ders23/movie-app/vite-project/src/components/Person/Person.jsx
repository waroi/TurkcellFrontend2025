import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Person.css";

function Movie({ personName }) {
	const [person, setPerson] = useState([]);
	const [error, setError] = useState(null);

	async function allUSers(personName) {
		try {
			const response = await MovieClient.getPerson(personName);
			if (response.results.length === 0) {
				setError("Aranan oyuncu bulunamadı.");
			}
			setPerson(response.results);
			console.log(response.results);
		} catch (error) {
			setError("Bir hata oluştu, tekrar deneyin.");
		}
	}

	useEffect(() => {
		if (personName) {
			allUSers(personName);
		}
	}, [personName]);

	if (error) {
		return <h2 className="text-center text-dark mt-5">{error}</h2>
	}
	return (
		<section className="container cinema-container">
			{person.length > 0 && <h1 className="mt-5">PERSON</h1>}
			<div className="row g-4 mt-5">
				{person.map((person) => (
					<div key={person.id} className="col-md-4">
						<div className="card h-100 position-relative overflow-hidden">
							<img
								src={
									person.profile_path
										? `https://image.tmdb.org/t/p/w500${person.profile_path}`
										: "https://cdn.vectorstock.com/i/500p/98/75/actor-filming-superhero-action-movie-cartoon-vector-43529875.jpg"
								}
								className="card-img-top h-100 object-fit-cover"
								alt={person.title}
							/>
							<div className="card-body position-absolute top-40 start-0 end-0 bottom-0 text-white p-3 d-flex flex-column justify-content-between rounded-3 m-3">
								<h5 className="card-title">{person.name}</h5>
								<div className="mt-auto">
									<p className="mb-1">Original Name: {person.original_name}</p>
									<p className="mb-2">Popularity: {person.popularity}</p>
									<a href="#" className="button-48">
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
