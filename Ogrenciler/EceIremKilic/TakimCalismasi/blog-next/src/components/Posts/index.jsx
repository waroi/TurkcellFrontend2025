"use client";
import React from "react";
import Card from "../Card";
import Loading from "../Loading";
import Title from "./atoms/title";
import usePosts from "@/hooks/usePosts";

const Posts = () => {
  const { isLoading, isMounted, posts } = usePosts();
  if (!isMounted) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container py-5" id="posts">
      <Title title={"Tüm Postlar"} />
      <div className="row">
        {posts?.map((blog) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch"
            key={blog.id}
          >
            <Card blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
