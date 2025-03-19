"use client";
import Form from "@/components/Form";
import Card from "@/components/Card";
import { useAddPost } from "@/hooks/useAddPost";

const AddBlog = () => {
  const { newPost, handleChange, handleAdd } = useAddPost();

  return (
    <div className="container">
      <div className="d-flex py-5 w-100">
        <div className="row align-items-center w-100">
          <div className="col-lg-7">
            <Form
              value={newPost}
              onChange={handleChange}
              onSubmit={(e) => handleAdd(newPost, e)}
              btnText="Ekle"
              className="w-100"
            />
          </div>
          <div className="col-lg-5">
            <Card blog={newPost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
