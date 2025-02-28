import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Person.css";

function Movie({ personName }) {
	const [person, setPerson] = useState([]);
	const [personId, setPersonId] = useState(null);
	const [personDetail, setPersonDetail] = useState([]);
	const [error, setError] = useState(null);

	async function allUSers(personName) {
		try {
			setError(null);
			const response = await MovieClient.getPerson(personName);

			if (response.results.length === 0) {
				setError("Aranan oyuncu bulunamadı.");
				setPerson([]);
				setPersonId(null);
			} else {
				const firstPerson = response.results[0];
				setPerson(response.results);
				await getUserDetail(firstPerson.id);
				setPersonId(firstPerson.id);
			}
		} catch (error) {
			console.error("Error in allUsers:", error);
			setError("Bir hata oluştu, tekrar deneyin.");
			setPerson([]);
			setPersonId(null);
		}
	}

	async function getUserDetail(id) {
		try {
			console.log("Fetching details for person ID:", id);
			const response = await MovieClient.getPersonDetail(id);
			console.log("Person details response:", response);
			setPersonDetail(response);
		} catch (error) {
			console.error("Error fetching person details:", error);
			setError("Bir hata oluştu, tekrar deneyin.");
		}
	}

	useEffect(() => {
		if (personName) {
			allUSers(personName);
		}
	}, [personName]);

	return (
		<section className="container cinema-container">
			{person.length > 0 && <h1 className="mt-5">PERSON</h1>}
			<div className="row g-4 mt-5">
				{person.map((person) => (
					<div className="card mb-3 g-0 p-0" key={person.id}>
						<div className="row g-0 ">
							<div className="col-md-4">
								<img
									src={
										person.profile_path
											? `https://image.tmdb.org/t/p/w500${person.profile_path}`
											: "https://cdn.vectorstock.com/i/500p/98/75/actor-filming-superhero-action-movie-cartoon-vector-43529875.jpg"
									}
									className="img-fluid h-100 w-100 object-fit-contain"
									alt={person.name}
								/>
							</div>
							<div className="col-md-8">
								<div className="m-3 h-100">
									<h5 className="card-title">{person.name}</h5>
									<p className="card-text">
										<strong>Known For:</strong> {person.known_for_department}
									</p>
									<p className="card-text">
										<strong>Popularity:</strong> {person.popularity}
									</p>
									{personDetail && personDetail.id === person.id && (
										<>
											<p className="card-text">
												<strong>Birthday:</strong>{" "}
												{personDetail.birthday || "N/A"}
											</p>
											<p className="card-text">
												<strong>Place of Birth:</strong>{" "}
												{personDetail.place_of_birth || "N/A"}
											</p>
											<p className="">
												<strong>Biography:</strong>{" "}
												{personDetail.biography
													? `${personDetail.biography}`
													: "No biography available"}
											</p>
										</>
									)}
									<p className="card-text">
										<small className="text-body-secondary">
											{person.known_for && person.known_for.length > 0 && (
												<span>
													Known for:{" "}
													{person.known_for
														.map((work) => work.title)
														.join(", ")}
												</span>
											)}
										</small>
									</p>
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
