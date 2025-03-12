"use client";
import { useSelector } from "react-redux";

const Page = () => {
  const blog = useSelector((state) => state.blog.blog);

  return (
    <div className="container">
      <div className="card my-5 position-relative">
        <div className="row g-0">
          <div className="col-lg-4 overflow-hidden">
            <img
              src={blog?.image}
              className="object-cover h-100 w-100 rounded"
              alt="card_img"
            />
          </div>
          <div className="col-lg-8 d-flex justify-content-between flex-column">
            <div className="card-body">
              <h5 className="card-title">{blog.title}</h5>
              <p className="card-text">{blog.body}</p>
              <p className="card-text">{blog.author}</p>
              <p className="card-text">
                <small>{blog.created_at}</small>
              </p>
            </div>
            <div className="card-footer p-2 d-flex justify-content-between align-items-center">
              <span
                className="badge text-bg-warning  p-2 m-2"
                style={{ width: "min-content" }}
              >
                {blog.topic}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
