const BlogCard = ({ p, blog, setBlog, setSelectedId }) => {
  const blogContent = () => {
    setBlog(p);
    setSelectedId(p.id);
  };

  return (
    <div className="card shadow-lg border-0 h-100">
      <div className="card-header text-white">
        <h5 className="card-title mb-0 text-truncate">{p.title}</h5>
      </div>
      <div className="card-body bg-light">
        <p className="card-text text-muted">{p.text}</p>
        <p className="card-subtitle mb-2 text-secondary">
          <small><strong>Yazar:</strong> {p.author} | <strong>Tarih:</strong> {p.date}</small>
        </p>
        <a
          href="#"
          className="btn btn-outline-primary w-100"
          data-bs-toggle="modal"
          data-bs-target="#contentModal"
          onClick={blogContent}
        >
          Devamını Oku
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
