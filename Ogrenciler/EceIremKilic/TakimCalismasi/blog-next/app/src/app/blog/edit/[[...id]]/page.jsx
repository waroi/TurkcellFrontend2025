"use client";
import React, { use, useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }) => {
  const nonPromiseParams = use(params);
  const [date, setDate] = useState("");
  const router = useRouter();
  const { posts, updatePost } = useBlogStore();
  const blog = posts.filter(
    (post) => post.id.toString() == nonPromiseParams.id
  );

  useEffect(() => {
    setDate(
      new Date(blog[0]?.releaseDate).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  });

  const [editedPost, setEditedPost] = useState({
    title: blog[0].title,
    image: blog[0].image,
    author: blog[0].author,
    releaseDate: blog[0].releaseDate,
    content: blog[0].content,
  });
  const handleChange = (e) => {
    e.preventDefault();
    console.log(editedPost);

    setEditedPost({ ...editedPost, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    setDate(
      new Date(blog[0]?.releaseDate).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  });

  return (
    <div className="container">
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="form">
              <form>
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
                    defaultValue={blog[0].image}
                    onChange={(e) => handleChange(e)}
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
                    aria-describedby="emailHelp"
                    defaultValue={blog[0].title}
                    onChange={(e) => handleChange(e)}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Post İçeriği
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="content"
                    defaultValue={blog[0].content}
                    onChange={(e) => handleChange(e)}
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
                    defaultValue={blog[0].author}
                    onChange={(e) => handleChange(e)}
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
                    defaultValue={blog[0].releaseDate}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-warning"
                  onClick={() => {
                    updatePost(blog[0].id, editedPost);
                    router.push("/");
                  }}
                >
                  Güncelle
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="preload">
              <div className="card">
                <img src={blog[0].image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{blog[0].title}</h5>
                  <p className="card-text">{blog[0].content}</p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text badge bg-success mb-0">
                      {blog[0].author}
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
