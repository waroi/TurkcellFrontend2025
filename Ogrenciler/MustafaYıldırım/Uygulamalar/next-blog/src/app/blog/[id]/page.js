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
        console.log("Fetching blog for ID:", params.id);
        const data = await blogId(parseInt(params.id, 10)); // ID'yi sayıya çevirerek gönder
        console.log("data:", data);
        setBlog(data);
      } catch (error) {
        console.error("Blog verisi alınırken hata oluştu:", error);
      } finally {
        setLoading(false); // Yüklenme bitti
      }
    };

    fetchBlog();
  }, [params.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  console.log(params.id);
  console.log(blog);

  return (
    <>
      <div className="bg-white">
        <div className="container py-4">
          <Link href="/blog" className="btn btn-outline-secondary mb-4">
            <i className="bi bi-arrow-left me-2"></i> Back to Blog
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
                className="object-fit-cover"
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
            <div className="prose">{blog.content}</div>
          </article>

          {/* <section className="mx-auto mt-5" style={{ maxWidth: "1000px" }}>
            <h2 className="h3 fw-bold mb-4">Related Articles</h2>
            <div className="row g-4">
              {relatedPosts.map((post) => (
                <div className="col-md-4" key={post.id}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-img-container">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={200}
                          className="card-img-top"
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-body">
                        <div className="d-flex align-items-center gap-2 meta-info mb-2">
                          <span>
                            <i className="bi bi-tag me-1"></i> {post.category}
                          </span>
                          <span>
                            <i className="bi bi-clock me-1"></i> {post.readTime}
                          </span>
                        </div>
                        <h3 className="card-title h6 fw-bold">{post.title}</h3>
                        <p className="card-text small text-muted">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
