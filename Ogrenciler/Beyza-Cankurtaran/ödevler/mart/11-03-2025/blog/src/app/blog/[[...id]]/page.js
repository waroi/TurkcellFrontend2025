"use client";

import data from "../../../data/blog.json";
import { useEffect, useState, use } from "react";
import DetailCard from "../../../component/DetailCard";

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);

  const { id } = use(params);

  useEffect(() => {
    if (id) {
      const IDBlog = data.find((blog) => blog.id === Number(id));

      setBlog(IDBlog);
      console.log("IDBlog:", IDBlog);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-warning py-4">
          <h1 className="display-5">Blog Bulunamadı!</h1>
          <p className="lead mt-3">
            The requested blog post could not be found.
          </p>
          <a href="/" className="btn btn-outline-warning mt-3">
            Ana Sayfaya Dön
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 blog-detail">
      <DetailCard blog={blog} />
    </div>
  );
}
