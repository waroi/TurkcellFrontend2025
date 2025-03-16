"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import useBlog from "@/store/blogs";
import { addBlog as addBlogFirebase } from "@/services/firebase";
import Layout from "@/components/Layout";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function Add() {
  const router = useRouter();
  const blogState = useBlog();

  const title = useRef();
  const image = useRef();
  const description = useRef();
  const banner = useRef();
  const content = useRef();

  function addBlog(blog) {
    blog = {
      author: blogState.user.id,
      title: title.current.value,
      description: description.current.value,
      content: content.current.value
        .split("\n\n")
        .map((paragraph) => paragraph.trim()),
      date: new Date().getTime(),
      image: image.current.value
        ? image.current.value
        : "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
      banner: banner.current.value
        ? banner.current.value
        : "https://coffective.com/wp-content/uploads/2018/06/default-featured-image.png.jpg",
    };

    addBlogFirebase(blog).then((id) => {
      blogState.addBlog({ ...blog, id });
      router.push("/");
    });
  }

  return (
    <Layout active="add">
      <div className="container pt-5">
        <Input ref={title} name="Title" type="text" />
        <Input ref={image} name="Card Image" type="text" />
        <TextArea ref={description} name="Description" />
        <Input ref={banner} name="Banner Image" type="text" />
        <TextArea ref={content} name="Content" />
        <Button onClick={addBlog}>Save</Button>
      </div>
    </Layout>
  );
}
