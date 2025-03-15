"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "../../store/useBlogStore";
import Card from "../utils/Card";
import Loading from "../utils/Loading";

const Posts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { posts } = useBlogStore();

  useEffect(() => {
    setIsMounted(true);
    if (posts && posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);

  if (!isMounted) {
    return null;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container py-5" id="posts">
      <h2 className="mb-5">Tüm Postlar</h2>
      <div className="row">
        {posts?.map((blog, index) => (
          <Card blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
