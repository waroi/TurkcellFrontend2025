"use client";

import { useRouter } from "next/navigation";

import { use, useState, useEffect } from "react";

import useBlog from "@/store/blogs";
import { getBlog, deleteBlog as deleteBlogFirebase } from "@/services/firebase";
import Layout from "@/components/Layout";

const Blog = ({ params }) => {
  const router = useRouter();
  const blogState = useBlog();
  const id = use(params).id;
  const [blog, setBlog] = useState({});

  useEffect(() => {
    getBlog(id).then(setBlog);
  }, []);

  function deleteBlog() {
    if (confirm("Are you sure you want to delete the blog?"))
      deleteBlogFirebase(id).then(() => {
        blogState.deleteBlog(id);
        router.push("/");
      });
  }
  //! ********************************************************************************************
  return (
    <Layout active="add" bodyClassName="blog-body" fill>
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
    </Layout>
  );
};

export default Blog;
