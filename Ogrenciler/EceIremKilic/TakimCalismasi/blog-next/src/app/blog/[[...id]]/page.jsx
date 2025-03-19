"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useBlogDetails } from "@/hooks/useBlogDetails";
import { useBlogActions } from "@/hooks/useBlogActions";
import { BlogHeader } from "@/app/blog/components/BlogHeader";
import { BlogContent } from "@/app/blog/components/BlogContent";
import { BlogActions } from "@/app/blog/components/BlogActions";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";

const BlogDetails = () => {
  const params = useParams();
  const id = params.id ? params.id[0] : null;
  const { blog, isLoading, error } = useBlogDetails(id);
  const { handleDelete } = useBlogActions();

  if (isLoading) {
    return <Loading />;
  }

  if (error || !blog) {
    return <NotFound text="Aradığınız blog bulunamadı!" />;
  }

  return (
    <div className="container">
      <BlogHeader blog={blog} />
      <BlogContent content={blog.content} />
      <BlogActions blogId={blog.id} onDelete={handleDelete} />
    </div>
  );
};

export default BlogDetails;
