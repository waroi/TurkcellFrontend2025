"use client";

import { use, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getBlog } from "@/firebase";

import useBlog from "@/blogs";
import { editBlog as editBlogFirebase } from "@/firebase";
import Layout from "@/components/Layout";

const Edit = ({ params }) => {
  const router = useRouter();
  const blogState = useBlog();
  const { id } = use(params);

  useEffect(() => {
    getBlog(id).then((response) => {
      title.current.value = response.title;
      image.current.value = response.image;
      description.current.value = response.description;
      banner.current.value = response.banner;
      content.current.value = response.content
        .reduce((content, paragraph) => content + "\n\n" + paragraph, "")
        .substring(2);
    });
  }, []);

  const title = useRef();
  const image = useRef();
  const description = useRef();
  const banner = useRef();
  const content = useRef();

  function editBlog(blog) {
    blog = {
      id: id,
      title: title.current.value,
      description: description.current.value,
      banner: banner.current.value,
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

    editBlogFirebase(blog).then(() => {
      blogState.editBlog(blog);
    });
    router.push(`/blog/${id}`);
  }

  return (
    <Layout>
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
      <button className="btn btn-primary" onClick={editBlog}>
        Save
      </button>
    </Layout>
  );
};

export default Edit;
