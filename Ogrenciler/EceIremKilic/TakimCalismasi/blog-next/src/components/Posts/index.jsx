"use client";
import React, { useEffect, useState } from "react";
import styles from "./posts.module.css";
import useBlogStore from "../../store/useBlogStore";
import Link from "next/link";

const Posts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { posts } = useBlogStore();

  useEffect(() => {
    setIsMounted(true);
    if (posts && posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  console.log("posts", posts);

  if (!isMounted) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="container py-5" id="posts">
        <h2 className="my-5">Bloglar Yükleniyor...</h2>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5" id="posts">
      <h2 className="my-5">Tüm Bloglar</h2>
      <div className="row">
        {posts?.map((blog, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch"
            key={index}
          >
            <Link
              href={`/blog/${blog.id}`}
              className="text-decoration-none w-100 mb-4"
            >
              <div className="card shadow-sm border-0 rounded mb-4 rounded-4 h-100 ">
                <img
                  src={blog?.image}
                  className={`card-img-top object-fit-cover rounded-top-4 img-fluid ${styles.image}`}
                  alt="..."
                />
                <div className="card-body ">
                  <div className="card-info d-flex justify-content-between mb-2">
                    <h6
                      className={`card-author badge ${styles.bgGreen} text-dark  rounded-pill px-3 py-1`}
                    >
                      {formatDate(blog?.releaseDate)}
                    </h6>
                    <h6
                      className={`card-author badge ${styles.bgGreen} text-dark  rounded-pill px-3 py-1`}
                    >
                      {blog?.author}
                    </h6>
                  </div>
                  <h5 className="card-title">{blog?.title}</h5>
                  <p className="card-text">
                    {blog?.content?.split(".").slice(0, 1) + "."}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;