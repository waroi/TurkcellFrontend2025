import React, { useState, useEffect } from "react";
import { getBlogs } from "../core/RequestModel";
import BlogModal from "./BlogModal";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  return (
    <section className="articles bg-light mt-5 py-5">
      <div className="container">
        <div className="row mx-auto">
          {blogs.map((blog) => (
            <div className="col-lg-4" key={blog.blogID}>
              <div className="card rounded-5 border-0 bg-white">
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
                    {blog?.blogContent?.split(" ").slice(0, 15).join(" ")}...
                  </p>
                  <div className="d-flex flex-column">
                    <button
                      className="btn btn-primary rounded-pill"
                      onClick={() => openModal(blog)}
                    >
                      Detayları Gör
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <BlogModal
        blogTitle={selectedBlog?.blogTitle}
        blogContent={selectedBlog?.blogContent}
        closeModal={closeModal}
        isOpen={isModalOpen}
      />
    </section>
  );
};

export default Article;
