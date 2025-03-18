"use client";

import { useParams } from "next/navigation";
import { useFetchBlog } from "../../../hooks/useFetchBlog";
import ErrorAlert from "./ErrorAlert";
import LoadingSpinner from "./LoadingSpinner";
import DetailCard from "./DetailCard";

export default function BlogDetail() {
  const { id } = useParams();
  const { blog, loading } = useFetchBlog(id[0]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!blog) {
    return <ErrorAlert />;
  }

  return (
    <div className="container my-5 blog-detail">
      <DetailCard blog={blog} />
    </div>
  );
}
