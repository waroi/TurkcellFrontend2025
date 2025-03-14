"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import useBlog from "@/store/blogs";
import { addBlog as addBlogFirebase } from "@/services/firebase";
import Layout from "@/components/Layout";

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
      author: blogState.user,
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
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          ref={title}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="image"
          placeholder="Card Image"
          ref={image}
        />
        <label htmlFor="image">Card Image</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          type="text"
          className="form-control"
          id="description"
          placeholder="Description"
          ref={description}
        />
        <label htmlFor="description">Description</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="banner"
          placeholder="Banner Image"
          ref={banner}
        />
        <label htmlFor="banner">Banner Image</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          type="text"
          className="form-control"
          id="content"
          placeholder="Content"
          ref={content}
        />
        <label htmlFor="content">Content</label>
      </div>
      <button className="btn btn-primary" onClick={addBlog}>
        Save
      </button>
    </Layout>
  );
}
