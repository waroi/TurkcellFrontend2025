export default function Card({ blog }) {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4 pe-0 pe-md-3">
          <img
            src={blog.image}
            className="img-fluid rounded-start w-100 h-100 object-fit-cover"
            alt={blog.title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title mb-3">{blog.title}</h5>
            <p className="card-text mb-3">{blog.description}</p>
            <div className="mb-3">
              <a href={`blog/${blog.id}`} className="btn btn-primary">
                Read More
              </a>
            </div>
            {/* <p className="card-text">
              <small className="text-body-secondary">
                Last Updated:
                {" " +
                  new Date(blog.date).toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
              </small>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
