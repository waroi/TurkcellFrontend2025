import React from "react";
import { useState, useEffect } from "react";
import { api } from "../core/RequestModel";

const Article = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBlogs() {
      try {
        const response = await fetch("http://localhost:3000/blog");
        const data = await response.json();
        if (response.ok) {
          setBlogs(data);
          return data;
        }
      } catch (error) {
        console.log("Request Model Error: ", error);
        return null;
      }
    }
    getBlogs();
  }, []);
  return (
    <section className="articles bg-light mt-5 py-5">
      <div className="container">
        <div className="row mx-auto">
          <div className="col-lg-4">
            {blogs.map((blog, index) => (
              <div className="card rounded-5 border-0 bg-white">
                <img
                  src="https://mediatrend.mediamarkt.com.tr/wp-content/uploads/2024/04/Yapay-zeka-ve-gunluk-hayat.jpg"
                  className="card-img-top rounded-top-5"
                  alt="..."
                />
                <div className="card-body">
                  <div className="row justify-content-between">
                    <div className="col-8 d-flex align-items-center">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQGcnFAMs-OVDg/profile-displayphoto-shrink_200_200/B4DZPbnWuLHUAc-/0/1734556348739?e=1745452800&v=beta&t=rdzgExb4q8liQ27W3zSkuzP4qQiVhUz02imXX2V7TBY"
                        className="p-0 img-fluid rounded-circle avatar me-2"
                        alt=""
                      />
                      <div className="card-post-detail">
                        <p className="mb-0">By → Ece</p>
                        <p className="mb-0 text-muted date-text">13 Ağustos</p>
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
                  <p className="card-text text-muted">{blog.blogContent}</p>
                  <div className="d-flex flex-column">
                    <a href="#" class="btn btn-primary rounded-pill">
                      Daha fazlasını oku
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
