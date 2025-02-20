import React from "react";
import { useState, useEffect } from "react";
import {
  getBlogs,
  updateBlog,
  postBlog,
  deleteBlog,
} from "../core/RequestModel";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);
  return (
    <section className="articles bg-light mt-5 py-5">
      <div className="container">
        <div className="row mx-auto">
          {blogs.map((blog, index) => (
            <div className="col-lg-4" key={blog.blogID}>
              <div
                className="card rounded-5 border-0 bg-white"
              >
                <img
                  src={blog.blogImage}
                  className="card-img-top rounded-top-5"
                  alt="..."
                />
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-8 d-flex align-items-center">
                      <img
                        src={blog.blogAuthorImg}
                        className="p-0 img-fluid rounded-circle avatar me-2"
                        alt=""
                      />
                      <div className="card-post-detail">
                        <p className="mb-0">By → {blog.blogAuthorName}</p>
                        <p className="mb-0 text-muted date-text">
                          {blog.blogReleaseDate}
                        </p>
                      </div>
                    </div>
                    <div className="col-4">
                      <p className="badge rounded-pill px-3 py-2 text-bg-primary flex-end">
                        {blog.blogCategory}
                      </p>
                    </div>
                  </div>
                  <h5 className="card-title text-dark fw-bolder mt-3">
                    {blog.blogTitle}
                  </h5>
                  <p className="card-text text-muted">
                    {blog?.blogContent?.split(" ").slice(0, 15).join(" ")}
                  </p>
                  <div className="d-flex flex-column">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Daha fazlasını oku
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;
