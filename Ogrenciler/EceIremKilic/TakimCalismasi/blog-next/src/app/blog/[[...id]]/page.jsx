"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }) => {
  const [date, setDate] = useState("");
  const router = useRouter();
  const { posts, deletePost, getPostById } = useBlogStore();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("params.id:", params.id); // params.id'yi kontrol et

    const fetchBlog = async () => {
      const fetchedBlog = await getPostById(blog.id);
      if (fetchedBlog) {
        setBlog(fetchedBlog);
        setIsLoading(true);
        setDate(
          new Date(fetchedBlog.releaseDate).toLocaleDateString("tr-TR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })
        );
      } else {
        router.push("/");
      }
    };

    fetchBlog();
  }, [params.id, getPostById, router]);

  console.log("posts:", posts); // posts dizisini kontrol et

  useEffect(() => {
    if (blog) {
      console.log("blog:", blog); // blog değişkenini kontrol et
      console.log("params.id:", params.id);
      setIsLoading(false);
    }
  }, [blog]);

  const handleDelete = (id) => {
    deletePost(id);
    router.push("/");
  };

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  } else
    return (
      <div className="container">
        <img src={blog?.image} className="w-100 mb-4" alt={blog?.title} />
        <div className="d-flex">
          <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
            {blog?.author}
          </p>
          <p className="badge bg-success px-4 py-2 rounded-pill">{date}</p>
        </div>
        <h1>{blog?.title}</h1>
        <div className="my-4 display-6 fs-5">{blog?.content}</div>
        <button
          className="btn btn-danger me-3"
          onClick={() => handleDelete(blog?.id)}
        >
          Sil
        </button>
        <Link href={`edit/${blog?.id}`}>
          <button className="btn btn-warning">Güncelle</button>
        </Link>
      </div>
    );
};

export default BlogDetails;
