"use client";
import React, { use, useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }) => {
  const [date, setDate] = useState("");
  const router = useRouter();
  const { posts, deletePost } = useBlogStore();
  const blog = posts.filter((post) => post.id.toString() == params.id);

  useEffect(() => {
    setDate(
      new Date(blog[0]?.releaseDate).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    );
  });

  const handleDelete = (id) => {
    deletePost(id);
    router.push("/");
  };

  return (
    <div className="container">
      <img src={blog[0]?.image} className="w-100 mb-4" />
      <div className="d-flex">
        <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
          {blog[0]?.author}
        </p>
        <p className="badge bg-success px-4 py-2 rounded-pill">{date}</p>
      </div>
      <h1>{blog[0]?.title}</h1>
      <div className="my-4 display-6 fs-5">{blog[0]?.content}</div>
      <button
        className="btn btn-danger me-3"
        onClick={() => handleDelete(blog[0].id)}
      >
        Sil
      </button>
      <Link href={`edit/${blog[0]?.id}`}>
        <button className="btn btn-warning">Güncelle</button>
      </Link>
    </div>
  );
};

export default BlogDetails;
