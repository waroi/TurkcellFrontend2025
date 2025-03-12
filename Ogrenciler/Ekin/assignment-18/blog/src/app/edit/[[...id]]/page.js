"use client";

import { use, useState, useEffect } from "react";
import { getBlog } from "@/app/database";

const Edit = ({ params }) => {
  const { id } = use(params);
  const [blog, setBlog] = useState({});

  console.log(id);

  useEffect(() => {
    try {
      getBlog(id).then((response) => {
        title.current.value = response.title;
        image.current.value = response.image;
        description.current.value = response.description;
        banner.current.value = response.banner;
        content.current.value = response.content;
      });
    } catch {}
  }, []);

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
};

export default Edit;
