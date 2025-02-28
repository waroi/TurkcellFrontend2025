import MovieDetail from "./MovieDetail";
import {
  CardImg,
  CardTitle,
  CardTypography,
  DetailButton
} from "./styled";

const MovieCard = ({ movie, genre }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="col-md-6">
      <div className="card mb-3 p-0 card-bg text-light">
        <div className="row g-0">
          <div className="col-md-4 text-center text-md-start">
            <CardImg
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              className="img-fluid rounded-start"
              alt="film movie banner"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <CardTitle className="card-title">{movie.title}</CardTitle>
              <CardTypography className="card-text">
                {movie.overview.split(" ").slice(0, 40).join(" ")}
                ...
              </CardTypography>
              <CardTypography className="d-flex align-items-center gap-1 py-3">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <span>{movie.vote_average}</span>
                <span>({movie.vote_count})</span>
              </CardTypography>
              <CardTypography className="d-flex align-items-center gap-2 pb-3">
                <i className="fa-solid fa-calendar-days"></i>
                <span> {formatDate(movie.release_date)}</span>
              </CardTypography>
              <DetailButton
                type="button"
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target={`#userModal-${movie.id}`}
              >
                Detayları İncele
              </DetailButton>
              <MovieDetail
                movie={movie}
                modalId={`userModal-${movie.id}`}
                genre={genre}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
