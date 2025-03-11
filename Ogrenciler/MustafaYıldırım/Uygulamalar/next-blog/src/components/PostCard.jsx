import styles from './components.module.css'
const PostCard = ({blog}) => {
  return (
    <div className="col-lg-4">
      <div className="card">
        <img src={blog.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">
          {blog?.content?.split(" ").slice(0, 10).join(" ")}...
          </p>
        </div>
        <div className="row flex-wrap flex-column-reverse flex-md-row justify-content-between ms-2">
              <div className="col-8 d-flex align-items-center mb-3">
                <img
                  src={blog.author.photo}
                  className={`p-0 img-fluid rounded-circle avatar me-2 ${styles.avatar}`}
                  alt=""
                />
                <div className="card-post-detail">
                  <p className="mb-0">By → {blog.author.name}</p>
                  <p className="mb-0 text-muted date-text">
                    {blog.date}
                  </p>
                </div>
              </div>
              <div className="col-4">
                <p className="badge rounded-pill px-3 py-2 text-bg-primary flex-end">
                  {blog.category}
                </p>
              </div>
            </div>
        <div className="card-body">
          <p href="#" className="card-link">
            {blog.reading_time}
          </p>
          <a href="#" className="card-link">
            {blog.category}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
