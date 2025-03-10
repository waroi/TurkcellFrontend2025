import { CardImg, CardMovieImg, CardTypography, GenderChip } from "./styled"; 

const ActorDetail = ({ modalId, actor }) => {
  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby={`${modalId}-label`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark p-2">
          <div className="modal-header border-0">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {actor.name}
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex gap-4">
            <div className="col-3">
            <CardImg
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w300/${actor.profile_path}`
                  : "/default-actor.jpg"
              }
              className="img-fluid rounded-start"
              alt="actor image"
              loading="lazy"
            />
            </div>
            <div className="col-9 d-flex flex-column gap-2">
              <div className="d-flex mb-2">
                <CardTypography className="d-flex align-items-center gap-1">
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "#FFD43B" }}
                  ></i>
                  <span>{actor.popularity}</span>
                </CardTypography>
                <CardTypography className="d-flex align-items-center gap-1">
                  <GenderChip>
                    {actor.gender === 1 ? "Kadın Oyuncu" : "Erkek Oyuncu"}
                  </GenderChip>
                </CardTypography>
              </div>
              <CardTypography>Oyuncunun Öne Çıkan Filmleri</CardTypography>
              <div className="d-flex gap-3">
                {actor.known_for.map((movie) => (
                  <CardMovieImg
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    className="img-fluid rounded-start"
                    alt="film movie banner"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
