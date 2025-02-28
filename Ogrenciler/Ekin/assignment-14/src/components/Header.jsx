import { useEffect, useState } from "react";
export default function Header({ selected, database }) {
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (selected && selected.type == "movie")
      (async () => {
        setDetails(await getMovieDetails(selected.id));
        setCast(
          (await database.getCreditsOfMovie(selected.id)).cast.slice(0, 4)
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
          <div className="card overflow-hidden mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={selected.poster}
                  className="img-fluid h-100 rounded-start"
                  alt="poster"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body h-100 p-4 d-flex flex-column justify-content-between">
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">{selected.originalTitle}</h3>
                    <p className="card-text">
                      {details.genres
                        ? details.genres.map((genre, index) => (
                            <span
                              key={index}
                              className="badge py-2 px-3 text-bg-danger rounded-pill me-2 text-white"
                            >
                              <i className="fa-solid fa-film me-2"></i>
                              {genre.name}
                            </span>
                          ))
                        : ""}
                    </p>
                  </div>
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
                            alt="profil fotoğrafı"
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
          <div className="card overflow-hidden mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={
                    selected.profile_path
                      ? baseImageURL + selected.profile_path
                      : "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
                  }
                  className="img-fluid h-100"
                  alt="profil fotoğrafı"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body d-flex flex-column justify-content-between h-100 p-4">
                  <h3 className="card-title fw-bold d-flex justify-content-between">
                    {selected.name}{" "}
                    <span className="badge fs-6 rounded-pill py-2 px-3 text-bg-danger me-2 text-white">
                      Gender: {gender[selected.gender]}
                    </span>
                  </h3>

                  <h5 className="card-title">Known For</h5>
                  <div className="row row-cols-3">
                    {selected.known_for.map((movie, index) => (
                      <div key={index} className="col">
                        {console.log(movie)}
                        <div className="card">
                          <img
                            src={baseImageURL + movie.poster_path}
                            className="card-img-top"
                            alt="poster"
                          />
                          <div className="card-body">
                            <h5 className="card-title">
                              {movie.title || movie.name}
                            </h5>
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
        <div className="container p-3">
          <div id="carousel" className="carousel slide rounded-5 h-100">
            <div className="carousel-inner h-100">
              <div className="carousel-item active h-100">
                <img
                  src="carousel-1.png"
                  className="d-block w-100 rounded-5 h-100 object-fit-cover"
                  alt="afiş1"
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src="carousel-2.png"
                  className="d-block w-100 rounded-5 h-100 object-fit-cover"
                  alt="afiş2"
                />
              </div>
              <div className="carousel-item h-100">
                <img
                  src="carousel-3.png"
                  className="d-block w-100 rounded-5 h-100 object-fit-cover"
                  alt="afiş3"
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
