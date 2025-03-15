export default function Movies({ movies }) {
  if (movies && movies.length)
    return (
      <section className="container py-5" id="#tr-mov">
        <h2 className="text-center mb-4 fw-bold text-primary">Top Rated Movies</h2>
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <div className="card border-2 border-white movie-card h-100">
                <img
                  src={movie.poster}
                  className="card-img-top"
                  alt={movie.title}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title mb-1">{movie.title}</h5>
                  <p className="card-text mb-1">
                    <i className="fa-solid fa-star"></i>{" "}
                    {movie.voteAverage.toFixed(1)}
                    {" - "}
                    <i className="fa-solid fa-calendar-days ms-1"></i>{" "}
                    {movie.year}
                  </p>
                  <p className="card-text mb-1" data-movie-id={movie.id}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  else
    return (
      <section className="container">
        <center>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="Loading"
          />
        </center>
      </section>
    );
}
