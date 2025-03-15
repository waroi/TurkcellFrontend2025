export default function Blog({
  blog: { id, title, content, imageUrl, publishedAt, author },
  editBlog,
  deleteBlog,
}) {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imageUrl}
            className="img-fluid rounded-start h-100 object-fit-cover"
          />
        </div>
        <div className="col-md-8 card-body d-flex flex-column justify-content-between">
          <h3 className="card-title mb-3">{title}</h3>
          <p className="card-text text-body-secondary fst-italic">
            Author: {author}
          </p>
          <p className="card-text">{content}</p>
          <p className="card-text text-body-secondary fst-italic">
            Last Updated:
            {(() =>
              " " +
              new Date(publishedAt).toLocaleDateString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
                weekday: "long",
              }))()}
          </p>
        </div>
      </div>
      <div className="btn-group position-absolute end-0 m-2" role="group">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => editBlog(id)}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => deleteBlog(id)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
}
