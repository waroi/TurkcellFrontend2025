import React from "react";

const ActorCard = ({ actors }) => {
  if (!actors || actors.length === 0) return null;

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const placeholderImage =
    "https://via.placeholder.com/300x450?text=No+Image+Available";

  return (
    <div className="container">
      <h2 className="text-center my-4">🎭 Actors</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {actors.map((actor) => (
          <div key={actor.id} className="col">
            <div className="card h-100 shadow-lg">
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                className="card-img-top"
                alt={actor.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholderImage;
                }}
                style={{ height: "400px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">
                  <strong>Department:</strong> {actor.known_for_department}
                </p>
                <p className="card-text flex-grow-1">
                  <strong>Known For:</strong>{" "}
                  {truncateText(
                    actor.known_for
                      .map((work) => work.title || work.original_title)
                      .join(", "),
                    100
                  )}
                </p>
                <div className="mt-auto">
                  <span className="badge bg-info">
                    ⭐ Popularity: {actor.popularity.toFixed(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorCard;
