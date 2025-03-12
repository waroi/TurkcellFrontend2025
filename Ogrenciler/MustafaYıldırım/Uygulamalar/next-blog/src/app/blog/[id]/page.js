"use client";
import { blogId } from "@/api/Api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogId(params.id);
        setBlog(data);
      } catch (error) {
        console.error("Blog verisi alınırken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="bg-white">
        <div className="container py-4">
          <Link href="/blog" className="btn btn-outline-secondary mb-4">
            <i className="bi bi-arrow-left me-2"></i> Bloglara Dön
          </Link>

          <article className="mx-auto" style={{ maxWidth: "800px" }}>
            <header className="text-center mb-4">
              <div className="d-flex justify-content-center align-items-center gap-3 meta-info mb-3">
                <span className="category-badge">{blog.category}</span>
                <span>
                  <i className="bi bi-calendar me-1"></i> {blog.date}
                </span>
                <span>
                  <i className="bi bi-clock me-1"></i> {blog.reading_time}
                </span>
              </div>
              <h1 className="display-5 fw-bold mb-4">{blog.title}</h1>
            </header>

            <div
              className="position-relative mb-4 rounded overflow-hidden"
              style={{ height: "400px" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                fill
                className="object-fit-cover img-fluid"
              />
            </div>

            <div className="d-flex align-items-center p-3 bg-light rounded mb-4">
              <img
                src={blog.author.photo}
                alt={blog.author.name}
                width={48}
                height={48}
                className="rounded-circle me-3"
              />
              <div>
                <p className="fw-medium mb-0">{blog.author.name}</p>
                <p className="text-muted small">{blog.date}</p>
              </div>
            </div>
            <div className="prose" style={{ whiteSpace: "pre-line" }}>{blog.content}</div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Blog;
