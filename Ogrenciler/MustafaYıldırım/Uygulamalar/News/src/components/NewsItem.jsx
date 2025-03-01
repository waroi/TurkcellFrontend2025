function NewsItem({ news }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <img
          src={news.image}
          className="card-img-top"
          alt={news.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{news.name}</h5>
          <p className="card-text">{news.description}</p>
          <p className="text-muted small">Kaynak: {news.source}</p>
          <a
            href={news.url}
            target="_blank"
            className="btn btn-primary mt-auto"
          >
            Habere Git
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
