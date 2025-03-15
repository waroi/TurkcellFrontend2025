"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import formatDate from "@/utils/FormatDate";
import CustomButton from "@/components/CustomButton";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";

const BlogDetails = () => {
  const router = useRouter();
  const { deletePost, getPostById } = useBlogStore();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const id = params.id ? params.id[0] : null;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await getPostById(id);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("BlogDetail getirme hatası:", error);
        setIsLoading(false);
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlog();
  }, [id, getPostById]);

  const handleDelete = (id) => {
    deletePost(id);
    router.push("/");
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!blog) {
    return <NotFound text="Aradığınız blog bulunamadı!" />;
  }

  return (
    <div className="container">
      <img src={blog?.image} className="w-100 mb-4" alt={blog?.title} />
      <div className="d-flex">
        <p className="badge bg-success px-4 py-2 me-3 rounded-pill">
          {blog?.author}
        </p>
        <p className="badge bg-success px-4 py-2 rounded-pill">
          {formatDate(blog?.releaseDate)}
        </p>
      </div>
      <h1>{blog?.title}</h1>
      <div className="my-4 display-6 fs-5">{blog?.content}</div>
      <CustomButton
        buttonText="Sil"
        variant="danger"
        className="me-3"
        onClick={() => handleDelete(blog?.id)}
      />
      <Link href={`edit/${blog?.id}`}>
        <CustomButton buttonText="Güncelle" variant="warning" />
      </Link>
    </div>
  );
};

export default BlogDetails;
