const BlogCard = ({ blog }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "260px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={blog.image} className="img-fluid rounded-start" alt={blog.title} style={{ maxWidth: "260px" }}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">{blog.content}</p>
            <p className="card-text">
              <small className="text-body-secondary">Created by {blog.creator} on {blog.date}</small>
            </p>
            <p className="card-text">
              <small className="text-body-secondary">Category: {blog.category}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;