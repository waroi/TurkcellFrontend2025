import { CardTypography, GenreChip } from "./styled";

const MovieDetail = ({ modalId, movie, genre }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark p-2">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {movie.title}
              <GenreChip>{genre}</GenreChip>
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                className="img-fluid rounded-start"
                alt="film movie banner"
                loading="lazy"
              />
            </div>
            <div className="col-8 px-4 d-flex flex-column gap-2">
              <CardTypography className="card-text">
                {movie.overview}
              </CardTypography>
              <CardTypography className="d-flex align-items-center gap-1">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <span>{movie.vote_average}</span>
                <span>({movie.vote_count})</span>
              </CardTypography>
              <CardTypography className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-calendar-days"></i>
                <span> {formatDate(movie.release_date)}</span>
              </CardTypography>

              <CardTypography className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-globe"></i>
                <span> {movie.original_language.toUpperCase()}</span>
              </CardTypography>

              <CardTypography className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-bolt"></i>
                <span> {movie.popularity} kişi bu filmi inceledi</span>
              </CardTypography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
