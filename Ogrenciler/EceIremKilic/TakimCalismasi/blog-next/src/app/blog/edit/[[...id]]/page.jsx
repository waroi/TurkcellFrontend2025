"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }) => {
  const { id } = params; // params.id'yi doğrudan al
  const [date, setDate] = useState("");
  const router = useRouter();
  const { posts, getPosts, updatePost } = useBlogStore();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadPost = () => {
      const currentBlog = posts.find((post) => post.id === id);
      setBlog(currentBlog);
    };

    // posts yüklenmediyse, getPosts fonksiyonunu çağır
    if (posts.length === 0) {
      getPosts();
    } else {
      loadPost();
    }
  }, [id, posts, getPosts]);

  useEffect(() => {
    if (blog) {
      setDate(
        new Date(blog.releaseDate).toLocaleDateString("tr-TR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    }
  }, [blog]);

  const [editedPost, setEditedPost] = useState({
    title: blog?.title || "",
    image: blog?.image || "",
    author: blog?.author || "",
    releaseDate: blog?.releaseDate || "",
    content: blog?.content || "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setEditedPost({ ...editedPost, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (blog) {
      await updatePost(blog.id, editedPost);
      router.push("/");
    }
  };

  if (!blog) {
    return <div>Yazı yükleniyor...</div>;
  }

  return (
    <div className="container">
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <h5 className="display-6 fs-3 mb-5 text-center">
                  Post İçeriğini Düzenle
                </h5>
                <div className="mb-3">
                  <label htmlFor="img" className="form-label">
                    Post Görsel URL'i
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="img"
                    value={editedPost.image}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Post Başlığı
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={editedPost.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Post İçeriği
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    value={editedPost.content}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Post Yazarı
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    value={editedPost.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="release-date" className="form-label">
                    Post Yayınlanma Tarihi
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="release-date"
                    value={editedPost.releaseDate}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-warning">
                  Güncelle
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="preload">
              <div className="card">
                <img src={blog.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text badge bg-success mb-0">
                      {blog.author}
                    </p>
                    <p className="card-text badge bg-success">{date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
