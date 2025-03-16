"use client";
import React, { useEffect, useState, use } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";
import formatDate from "@/utils/FormatDate";
import Loading from "@/components/Loading";

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
            />
          </div>
          <div className="col-lg-5">
            <div className="preload">
              <div className="card">
                <img
                  src={editedPost.image || blog.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {editedPost.title || blog.title}
                  </h5>
                  <p className="card-text">
                    {editedPost.content || blog.content}
                  </p>
                  <div className="d-flex justify-content-between">
                    <p className="card-text badge bg-success mb-0">
                      {editedPost.author || blog.author}
                    </p>
                    <p className="card-text badge bg-success">
                      {formatDate(editedPost.releaseDate) ||
                        formatDate(blog.releaseDate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
