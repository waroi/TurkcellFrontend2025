import React, { useState, useEffect } from "react";
import { getBlogs } from "../core/RequestModel";
import BlogModal from "./BlogModal";
import OperationBar from "./OperationBar";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await getBlogs();
      if (data && Array.isArray(data)) {
        setBlogs(data);
        setFilteredBlogs(data);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    filterBlogs();
  }, [searchQuery, selectedCategory]);

  const filterBlogs = () => {
    let filtered = blogs;

    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.blogCategory === selectedCategory);
    }

    if (searchQuery.trim()) {
      filtered = filtered.filter((blog) =>
        [blog.blogTitle, blog.blogContent, blog.blogCategory]
          .join(" ")
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
  };

  const uniqueCategories = [...new Set(blogs.map((blog) => blog.blogCategory))];

  return (
    <>
      <OperationBar
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        categories={uniqueCategories}
      />
      <section className="articles bg-light py-5" id="articles">
        <div className="container">
          <div className="row mx-auto">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div className="col-lg-4" key={blog.id}>
                  <div className="card mb-5 bg-white d-flex flex-column rounded-5 border-0">
                    <img
                      src={blog.blogImage}
                      className="card-img-top rounded-top-5"
                      alt="..."
                    />
                    <div className="card-body d-flex flex-column justify-content-between">
                      <div className="row flex-wrap flex-column-reverse flex-md-row justify-content-between">
                        <div className="col-8 d-flex align-items-center mb-3">
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
              ))
            ) : (
              <p className="text-center w-100">Hiç blog bulunamadı.</p>
            )}
          </div>
        </div>
      </section>
      <BlogModal
        post={selectedBlog} // selectedBlog'u geçiriyoruz
        closeModal={closeModal}
        isOpen={isModalOpen} // isModalOpen state'ini geçiriyoruz
      />
    </>
  );
};

export default Article;
