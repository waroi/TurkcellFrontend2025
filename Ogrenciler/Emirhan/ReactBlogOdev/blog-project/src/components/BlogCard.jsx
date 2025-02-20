const BlogCard = ({ p }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <p className="card-text">{p.text}</p>
        <a href="#" className="btn btn-primary">
          Devamını Oku
        </a>
      </div>
    </div>
  );
};
export default BlogCard;
