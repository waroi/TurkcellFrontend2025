"use client";
import React, { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import Loading from "../Loading";
import Card from "../Card";
import Title from "./atoms/title";

const Latest = () => {
  const { posts, getPosts } = useBlogStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    getPosts();
    setIsMounted(true);
  }, []);

  const filtredItem = posts.slice(8, 12);

  if (!isMounted) {
    return <Loading />;
  }
  return (
    <div className="container" id="latest">
      <Title title={"Son Yayımlanan Bloglar"} />
      <div className="row">
        {filtredItem?.map((blog, index) => (
          <Card blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Latest;
