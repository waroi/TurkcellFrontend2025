"use client";
import React, { useEffect, useState } from "react";
import styles from "./latest.module.css";

const Latest = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMounted, setIsMounted] = useState(false);

  const getData = async () => {
    const data = await getData();
  };

  useEffect(() => {
    handleSetBlogs();
    getData();
  }, []);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  console.log(data);

  const handleSetBlogs = () => {
    const formattedData = data.posts.slice(5, 9);
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
            <div className="card shadow-sm border-0 rounded h-100 rounded-5">
              <img
                src={blog?.image}
                className={`card-img-top ${styles.image} rounded-top-5`}
                alt="..."
              />
              <div className="card-body">
                <div className="card-info d-flex justify-content-between mb-2">
                  <div
                    className={`card-date ${styles.bgBadge} badge rounded-pill px-3 py-1`}
                  >
                    {formatDate(blog?.releaseDate)}
                  </div>
                  <div
                    className={`card-author ${styles.bgBadge} badge rounded-pill px-3 py-1`}
                  >
                    {blog?.author}
                  </div>
                </div>
                <div className="card-content">
                  <h5 className="card-title">{blog?.title}</h5>
                  <p className="card-text ">
                    {" "}
                    {blog?.content?.split(".").slice(0, 1) + "."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
