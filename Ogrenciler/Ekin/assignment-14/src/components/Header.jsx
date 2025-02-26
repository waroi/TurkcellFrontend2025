import { useEffect, useState } from "react";
export default function Header({ selected, database }) {
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (selected && selected.type == "movie")
      (async () => {
        setDetails(await getMovieDetails(selected.id));
        setCast(
          (await database.getCreditsOfMovie(selected.id)).cast.slice(0, 8)
        );
      })();
  }, [selected]);

  async function getMovieDetails(id) {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmEzZGQxZDIyYWU0N2MzZTNiN2Y5YzA2YzhjYmIyMiIsIm5iZiI6MTc0MDQxNzYyNC4zMTEsInN1YiI6IjY3YmNhYTU4MTJiZmM4NWJjMzZiZDczNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zu7OUPZoDu1V1Rpvl8hfzmKx39KDFLfMKcOM2my-9pk",
        },
      }
    ).then((response) => response.json());
  }

  if (selected && selected.type == "movie")
    return (
      <header>
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={selected.poster}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{selected.originalTitle}</h3>
                  <p className="card-text">
                    {details.genres
                      ? details.genres.map((genre, index) => (
                          <span
                            key={index}
                            className="badge text-bg-primary me-2 text-white"
                          >
                            {genre.name}
                          </span>
                        ))
                      : ""}
                  </p>
                  <p className="card-text">
                    <i className="fa-solid fa-star"></i>{" "}
                    {selected.voteAverage.toFixed(1)}
                    {" - "}
                    <i className="fa-solid fa-calendar-days ms-1"></i>{" "}
                    {selected.year}
                  </p>
                  <p className="card-text fs-4 opacity-75 fw-light">
                    {details.tagline}
                  </p>
                  <p className="card-text">{details.overview}</p>
                  <h5 className="card-title">Starring Actors</h5>
                  <div className="row row-cols-4">
                    {cast.map((person, index) => (
                      <div key={index} className="col">
                        <div className="card">
                          <img
                            src={
                              person.profilePicture.includes("originalnull")
                                ? "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                                : person.profilePicture
                            }
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text">{person.character}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  else if (selected && selected.type == "person")
    return (
      <header>
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    selected.profile_path
                      ? baseImageURL + selected.profile_path
                      : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                  }
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{selected.name}</h3>
                  <p className="card-text">
                    <span className="badge text-bg-primary me-2 text-white">
                      Gender: {gender[selected.gender]}
                    </span>
                  </p>
                  <h5 className="card-title">Known For</h5>
                  <div className="row row-cols-5">
                    {selected.known_for.map((movie, index) => (
                      <div key={index} className="col">
                        <div className="card">
                          <img
                            src={baseImageURL + movie.poster_path}
                            className="card-img-top"
                          />
                          <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <p className="card-text">
                              <i className="fa-solid fa-star"></i>{" "}
                              {movie.vote_average.toFixed(1)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  else
    return (
      <header className="mb-5">
        <div id="carousel" className="carousel slide h-100">
          <div className="carousel-inner h-100">
            <div className="carousel-item active h-100">
              <img
                src="carousel-1.png"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="carousel-2.png"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="carousel-item h-100">
              <img
                src="carousel-3.png"
                className="d-block w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    );
}

const gender = {
  0: <i className="fa-solid fa-genderless ms-1"></i>,
  1: <i className="fa-solid fa-venus ms-1"></i>,
  2: <i className="fa-solid fa-mars ms-1"></i>,
};

const baseImageURL = "http://image.tmdb.org/t/p/original";
