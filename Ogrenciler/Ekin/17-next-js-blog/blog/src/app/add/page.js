"use client";

import { useRef } from "react";

import useBlog from "@/hooks/useBlog";

import Layout from "@/components/Layout";
import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import Button from "@/components/Button";

export default function Add() {
  const { addBlog } = useBlog();

  const title = useRef();
  const image = useRef();
  const description = useRef();
  const banner = useRef();
  const content = useRef();

  return (
    <Layout active="add">
      <div className="container pt-5">
        <Input ref={title} name="Title" type="text" />
        <Input ref={image} name="Card Image" type="text" />
        <TextArea ref={description} name="Description" />
        <Input ref={banner} name="Banner Image" type="text" />
        <TextArea ref={content} name="Content" />
        <Button
          onClick={() =>
            addBlog(
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
}
