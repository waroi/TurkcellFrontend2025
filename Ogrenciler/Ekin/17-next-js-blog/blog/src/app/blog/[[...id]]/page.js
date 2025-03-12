"use client";

import { use, useState, useEffect } from "react";
import { getBlog } from "@/app/database";
import { useRouter } from "next/navigation";
import useBlog from "../../blogs";

const Blog = ({ params }) => {
  const router = useRouter();
  const blogState = useBlog();

  const id = use(params).id[0];
  const [blog, setBlog] = useState({});

  useEffect(() => {
    try {
      getBlog(id).then((response) => setBlog(response));
    } catch {}
  }, []);

  function deleteBlog() {
    if (confirm("Are you sure you want to delete the blog?")) {
      blogState.deleteBlog(id);
      router.push("/");
    }
  }

  return (
    <>
      <img src={blog.banner} className="banner w-100 object-fit-cover mb-5" />
      <div className="container pb-5">
        <h1 className="mt-5 mb-5">{blog.title}</h1>
        {typeof blog.content == "string" ? (
          <p className="fs-5 mb-5">{blog.content}</p>
        ) : (
          blog.content?.map((paragraph, index) => (
            <p key={index} className="fs-5 mb-5">
              {paragraph}
            </p>
          ))
        )}
        <a href={`/edit/${id}`} className="btn btn-warning me-3">
          Edit
        </a>
        <button className="btn btn-danger" onClick={deleteBlog}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Blog;
