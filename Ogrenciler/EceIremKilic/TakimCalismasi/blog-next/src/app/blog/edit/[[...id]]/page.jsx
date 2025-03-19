"use client";
import React, { use } from "react";
import Form from "@/components/Form";
import Loading from "@/components/Loading";
import Card from "@/components/Card";
import { useEditPost } from "@/hooks/useEditPost";

const EditBlog = ({ params }) => {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const { blog, newPost, handleChange, handleSubmit } = useEditPost(id);

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Form
              value={newPost}
              onChange={handleChange}
              onSubmit={handleSubmit}
              btnText="Güncelle"
            />
          </div>
          <div className="col-lg-5">
            <div className="preload">
              <Card blog={newPost || blog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
