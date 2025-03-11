import styles from './components.module.css'
const HomeCard = ({ blog }) => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={blog.image}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">
                {blog?.content?.split(" ").slice(0, 10).join(" ")}...
              </p>
            </div>
            <div className="row flex-wrap flex-column-reverse flex-md-row justify-content-between">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
