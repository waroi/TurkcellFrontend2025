"use client";

import { use, useState, useEffect } from "react";

import { getBlog } from "@/services/firebase";
import Layout from "@/components/Layout";
import Link from "next/link";

import useBlog from "@/hooks/useBlog";
import Button from "@/components/Button";

import useStore from "@/store/blogs";

const Blog = ({ params }) => {
  const store = useStore();

  const { deleteBlog } = useBlog();

  const id = use(params).id;

  const [blog, setBlog] = useState({});

  useEffect(() => {
    getBlog(id).then(setBlog);
  }, []);

  return (
    <Layout active="add" mainClass="blog">
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
        {store.user && store.user.id == blog.author ? (
          <>
            <Link href={`/edit/${id}`} className="btn btn-warning me-3">
              Edit
            </Link>
            <Button variant="danger" onClick={() => deleteBlog(id)}>
              Delete
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </Layout>
  );
};

export default Blog;
