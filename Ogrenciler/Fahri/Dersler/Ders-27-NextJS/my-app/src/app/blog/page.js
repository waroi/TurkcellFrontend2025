"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs } from "../redux/slice/blogSlice";
import Link from "next/link";

const BlogList = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:5000/blogs");
      const data = await response.json();
      // console.log("Bloglar geliyor mu:", data);
      dispatch(setBlogs(data));
    };

    fetchBlogs();
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="text-danger">Blog Listesi</h1>
        <Link href={"/blog/add"} className="text-danger">
          Blog Ekle
        </Link>
        <div className="row">
          {blogs && blogs.length > 0 ? (
            blogs.map((blog) => (
              <div className="col-lg-3 col-md-6 mt-5" key={blog.id}>
                <div className="card">
                  <img
                    src="https://picsum.photos/200"
                    className="card-img-top"
                    alt={blog.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {blog.title.substring(0, 20) + "..."}
                    </h5>
                    <p className="card-text">
                      {blog.content.substring(0, 50) + "..."}
                    </p>
                    <p className="card-text">
                      <strong>Yazar:</strong> {blog.author}
                    </p>
                    <Link
                      href={`/blog/${blog.id}`}
                      className="btn btn-outline-primary"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Blog yok veya yükleniyor!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
