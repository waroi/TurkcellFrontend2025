"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../redux/slice/blogSlice";
import Link from "next/link";
import "./BlogList.css";

const BlogList = () => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:5000/blogs")
      const data = await response.json()
      dispatch(setBlogs(data))
    };

    fetchBlogs()
  }, [dispatch])

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h1 className="blog-list-title fw-bold fst-italic">PESPEMBE BLOG</h1>
        <Link href={"/blog/add"} className="add-blog-link">
          Blog Ekle
        </Link>
      </div>

      <div className="blog-grid">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-card-image">
                <img
                  src={blog.poster || 'https://picsum.photos/200'}
                  alt={blog.title}
                />
              </div>
              <div className="blog-card-content">
                <h5 className="blog-card-title">
                  {blog.title.substring(0, 20) + "..."}
                </h5>
                <p className="blog-card-excerpt">
                  {blog.content.substring(0, 50) + "..."}
                </p>
                <p className="blog-card-author">
                  <strong>Yazar:</strong> {blog.author}
                </p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="view-blog-button"
                >
                  Daha fazla
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-blogs-message">Blog yok veya yükleniyor!</p>
        )}
      </div>
    </div>
  );
};

export default BlogList