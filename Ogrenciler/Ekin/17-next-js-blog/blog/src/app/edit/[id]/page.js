"use client";

import { use, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getBlog } from "@/services/firebase";

import useBlog from "@/store/blogs";
import { editBlog as editBlogFirebase } from "@/services/firebase";
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
      <Input ref={title} name="Title" type="text" />
      <Input ref={image} name="Card Image" type="text" />
      <TextArea ref={description} name="Description" />
      <Input ref={banner} name="Banner Image" type="text" />
      <TextArea ref={content} name="Content" />
      <Button onClick={editBlog}>Save</Button>
    </Layout>
  );
};

export default Edit;
