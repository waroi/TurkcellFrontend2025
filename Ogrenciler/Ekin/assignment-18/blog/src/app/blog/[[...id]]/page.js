"use client";

import { use, useState, useEffect } from "react";
import { getBlog } from "@/app/database";

const Blog = ({ params }) => {
  const { id } = use(params);
  const [blog, setBlog] = useState({});

  console.log(id);

  useEffect(() => {
    try {
      getBlog(id).then((response) => setBlog(response));
    } catch {}
  }, []);

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
      </div>
    </>
  );
};

export default Blog;
