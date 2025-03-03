import './Slider.css';
const Slider = ({ news }) => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide mt-5">
      <div className="carousel-inner w-100">
        {news.map((neww, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={neww.image}
              className="d-block h-100 w-100 object-fit-cover"
              alt={neww.name}
            />
            <div className="position-absolute start-0 top-0 m-3 bg-dark text-white px-3 py-1 rounded">
              <h4 className="m-0">{neww.source}</h4>
            </div>
            <div className="carousel-caption d-none d-md-block">
              <h1 className="mt-5">{neww.name}</h1>

              <a href={neww.url} className="btn btn-secondary" target="_blank">
                Detaylar İçin Tıklayın
              </a>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
