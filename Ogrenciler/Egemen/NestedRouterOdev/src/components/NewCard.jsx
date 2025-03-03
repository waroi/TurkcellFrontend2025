const NewCard = ({ article }) => {
  return (
    <div className="card news-card mb-3 col-12 col-md-6 border-0">
      <img
        src={article?.image}
        className="card-img-top news-image"
        alt="News image"
      />
      <div className="card-body p-0 py-3">
        <h5 className="card-title fw-semibold fs-3">{article?.name}</h5>
        <p className="card-text custom-line">{article?.description}</p>
        <p className="card-text">
          <small className="text-body-secondary">
            {new Date(article?.date).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </p>
      </div>
    </div>
  );
};

export default NewCard;
