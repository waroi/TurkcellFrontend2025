"use client";
import React, { useEffect, useState, use } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import Loading from "@/components/Loading";
import Card from "@/components/Card";

const EditBlog = ({ params }) => {
  const unwrappedParams = use(params);
  const { id } = unwrappedParams;
  const router = useRouter();
  const { posts, getPosts, updatePost } = useBlogStore();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const loadPost = () => {
      const currentBlog = posts.find((post) => post.id === id[0]);
      setBlog(currentBlog);
    };
    if (posts.length === 0) {
      getPosts();
    } else {
      loadPost();
    }
  }, [id, posts, getPosts]);

  const [editedPost, setEditedPost] = useState({
    title: "",
    image: "",
    author: "",
    releaseDate: "",
    content: "",
  });

  useEffect(() => {
    if (blog) {
      setEditedPost({
        title: blog.title || "",
        image: blog.image || "",
        author: blog.author || "",
        releaseDate: blog.releaseDate || "",
        content: blog.content || "",
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    e.preventDefault();
    setEditedPost({ ...editedPost, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (blog) {
      await updatePost(blog.id, editedPost);
      router.push("/");
    }
  };

  if (!blog) {
    return <Loading />;
  }

  return (
    <div className="container">
      <div className="d-flex py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <Form
              value={editedPost}
              onChange={handleChange}
              onSubmit={handleSubmit}
              btnText="Güncelle"
            />
          </div>
          <div className="col-lg-5">
            <div className="preload">
              <Card blog={editedPost || blog} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
