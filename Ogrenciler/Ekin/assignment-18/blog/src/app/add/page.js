"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";

import blog from "../blogs";

export default function Add() {
  const router = useRouter();

  const blogState = blog();

  const title = useRef();
  const image = useRef();
  const description = useRef();
  const banner = useRef();
  const content = useRef();

  function addBlog() {
    blogState.addBlog({
      title: title.current.value,
      image: image.current.value,
      description: description.current.value,
      banner: banner.current.value,
      content: content.current.value,
    });
    router.push("/");
  }

  return (
    <>
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
        Add Blog
      </button>
    </>
  );
}
