"use client";

import { use, useEffect, useRef } from "react";
import { getBlog } from "@/services/firebase";

import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";
import useBlog from "@/hooks/useBlog";
import Layout from "@/components/Layout";

const Edit = ({ params }) => {
  const { editBlog } = useBlog();
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

  return (
    <Layout>
      <div className="container pt-5">
        <Input ref={title} name="Title" type="text" />
        <Input ref={image} name="Card Image" type="text" />
        <TextArea ref={description} name="Description" />
        <Input ref={banner} name="Banner Image" type="text" />
        <TextArea ref={content} name="Content" />
        <Button
          onClick={() =>
            editBlog(
              id,
              title.current.value,
              image.current.value,
              description.current.value,
              banner.current.value,
              content.current.value
                .split("\n\n")
                .map((paragraph) => paragraph.trim())
            )
          }
        >
          Save
        </Button>
      </div>
    </Layout>
  );
};

export default Edit;
