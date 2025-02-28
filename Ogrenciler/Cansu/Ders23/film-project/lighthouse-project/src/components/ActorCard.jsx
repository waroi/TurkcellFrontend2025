import ActorDetail from "./ActorDetail";
import { CardImg, CardTitle, CardTypography, DetailButton } from "./styled"; 

const ActorCard = ({ actor }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3 p-0 card-bg text-light">
        <div className="row g-0">
          <div className="col-md-4 text-center text-md-start">
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
          <div className="col-md-8">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <CardTitle className="card-title">{actor.name}</CardTitle>
              <CardTypography className="d-flex align-items-center gap-1 py-3">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <span>{actor.popularity}</span>
              </CardTypography>
              <CardTypography className="d-flex align-items-center gap-1 pb-3">
                <i
                  className="fa-solid fa-star"
                  style={{ color: "#FFD43B" }}
                ></i>
                <span>{actor.gender}</span>
              </CardTypography>
              <DetailButton
                type="button"
                className="btn btn-primary w-100"
                data-bs-toggle="modal"
                data-bs-target={`#userModal-${actor.id}`}
              >
                Detayları İncele
              </DetailButton>
              <ActorDetail actor={actor} modalId={`userModal-${actor.id}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorCard;
