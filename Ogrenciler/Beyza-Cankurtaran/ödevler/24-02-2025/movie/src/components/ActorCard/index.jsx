import React from "react";

const ActorCard = ({ actors }) => {
  console.log("Actor List:", actors);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
      {actors.length > 0 &&
        actors.map((actor) => (
          <div key={actor.id} className="col">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{actor.original_name}</h5>
                <p className="card-text">
                  Known For: {actor.known_for[0].title}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActorCard;
