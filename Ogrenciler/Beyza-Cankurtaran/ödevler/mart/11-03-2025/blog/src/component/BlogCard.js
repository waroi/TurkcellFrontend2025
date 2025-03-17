import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="card mb-3 p-0">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={blog.image}
            className="img-fluid rounded-start "
            alt="..."
            style={{ height: "250px", width: "100%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title color-grey">{blog.title}</h5>
            <p className="card-text color-grey">{blog.detail}</p>
            <div className="d-flex justify-content-end">
              <Link href={`/blog/${blog.id}`} passHref>
                <button className="btn btn-orange">Detaylar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
