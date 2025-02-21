export default function Carousel({ blogs }) {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide mb-5 w-75 m-auto rounded-3"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators rounded-2">
        {blogs.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            data-bs-interval="3000"
          >
            <img
              src={blog.imageUrl}
              className="d-block w-100 rounded-3"
              alt={blog.title}
            />
            <div className="carousel-caption d-none d-md-block bg-light bg-opacity-25 rounded-2">
              <h5>{blog.title}</h5>
              <p className="fst-italic">{blog.author}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
