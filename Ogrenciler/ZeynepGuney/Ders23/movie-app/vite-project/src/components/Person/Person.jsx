import React, { useEffect, useState } from "react";
import MovieClient from "../../client/movie-client";
import "./Person.css";


function Movie({ personName }) {
    const [person, setPerson] = useState([]);

    async function allUSers(personName) {
        const response = await MovieClient.getPerson(personName);
        setPerson(response.results);
        console.log(response.results);
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
                            <div
                                className="card-body position-absolute top-40 start-0 end-0 bottom-0 text-white p-3 d-flex flex-column justify-content-between rounded-5 m-3 h-50"
                            >
                                <h5 className="card-title mb-3">{person.name}</h5>
                                <p className="card-text mb-3">
                                </p>
                                <div className="mt-auto">
                                    <p className="mb-1">Original Name: {person.original_name}</p>
                                    <p className="mb-2">Popularity: {person.popularity}</p>
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

    );
}

export default Movie;
