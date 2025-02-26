import React from "react";

const ActorCard = ({ actors }) => {
  console.log("Actor List:", actors);
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
      {actors.length > 0 &&
        actors.map((actor) => (
          <div key={actor.id} className="col">
            <div className="card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                className="card-img-top"
                alt={actor.name}
              />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">
                  <strong>Department:</strong> {actor.known_for_department}
                </p>
                <p className="card-text">
                  <strong>Known For:</strong>{" "}
                  {truncateText(
                    actor.known_for.map((work) => work.title || work.original_title).join(", "),
                    100
                  )}
                </p>
                <p className="card-text">
                  <strong>Popularity:</strong> {actor.popularity.toFixed(1)}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ActorCard;

