"use client";
import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import styles from "./latest.module.css";

const Latest = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    handleSetBlogs();
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSetBlogs = () => {
    const formattedData = data.slice(0, 4);
    setBlogs(formattedData);
    console.log("blogs:", blogs);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (!isMounted) {
    return null;
  }
  return (
    <div className="container" id="latest">
      <h2 className="my-5">Son Yayımlanan Bloglar</h2>
      <div className="row">
        {blogs?.map((blog, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
            <div className="card shadow-sm border-0 rounded">
              <img
                src={blog?.image}
                className={`card-img-top ${styles.image}`}
                alt="..."
              />
              <div className="card-body">
                <div className="card-info d-flex justify-content-between mb-2">
                  <div className=" card-date badge bg-primary rounded-pill px-3 py-1">
                    {formatDate(blog?.releaseDate)}
                  </div>
                  <div className="card-author badge bg-primary rounded-pill px-3 py-1">
                    {blog?.author}
                  </div>
                </div>
                <h5 className="card-title">{blog?.title}</h5>
                <p className="card-text">{blog?.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
