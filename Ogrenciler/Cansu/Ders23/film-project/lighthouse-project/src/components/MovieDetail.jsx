/* eslint-disable react/prop-types */
import styled from "styled-components";

const CardTypography = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  padding: 0;
  margin-bottom: 0;
`;

const CardTitle = styled.h5`
  color: rgba(255, 255, 255, 0.8);
  font-size: 17px;
`;

const GenreChip = styled.span`
  padding: 3px 7px;
  background-color: white;
  border-radius: 20px;
  color: black;
  font-size: 12px;
  margin-left: 20px;
`;

const DetailButton = styled.button`
  background-color: #dbdbdb;
  color: black;
  font-size: 13px;
  border: none;
  &:hover {
    background-color: #bebebe;
    color: black;
  }
`;
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
              <GenreChip>
              {genre}
              </GenreChip>
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
