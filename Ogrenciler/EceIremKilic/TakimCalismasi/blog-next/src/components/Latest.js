"use client";
import React, { useEffect, useState } from "react";
import data from "../data/data.json";

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
    setBlogs(data);
    console.log("blogs:", blogs);
  };
  if (!isMounted) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        {data?.map((blog, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
            <div className="card">
              <img src={blog?.image} className="card-img-top" alt="..." />
              <div className="card-body">
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
