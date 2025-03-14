"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

const BlogDetails = () => {
  const [date, setDate] = useState("");
  const router = useRouter();
  const { deletePost, getPostById } = useBlogStore();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.id ? params.id[0] : null; 
  useEffect(() => {
      const fetchBlog = async () => {
          try {
              if (id) {
                  const fetchedBlog = await getPostById(id);
                  if (fetchedBlog) {
                      setBlog(fetchedBlog);
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
              } else {
                  setIsLoading(false);
              }
          } catch (error) {
              console.error("BlogDetail getirme hatası:", error);
              setIsLoading(false);
          } finally {
              setIsLoading(false);
          }
      };
      fetchBlog();
  }, [id, getPostById, router]);

    const handleDelete = (id) => {
        deletePost(id);
        router.push("/");
    };

    if (isLoading) {
        return <div>Yükleniyor...</div>;
    }

    if (!blog) {
        return <div>Blog bulunamadı</div>;
    }

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