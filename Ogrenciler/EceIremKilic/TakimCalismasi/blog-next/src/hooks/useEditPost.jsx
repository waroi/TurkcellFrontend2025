import useBlogStore from "@/store/useBlogStore";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUserData } from "./useUserData";
import { useAddPost } from "./useAddPost";

export const useEditPost = (id) => {
  const [blog, setBlog] = useState(null);
  const { newPost, setNewPost, handleChange } = useAddPost();
  const { posts, getPosts, updatePost } = useBlogStore();
  const router = useRouter();

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
  useEffect(() => {
    if (blog) {
      setNewPost({
        title: blog.title || "",
        image: blog.image || "",
        author: blog.author || "",
        releaseDate: blog.releaseDate || "",
        content: blog.content || "",
      });
    }
  }, [blog]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (blog) {
      await updatePost(blog.id, newPost);
      router.push("/");
    }
  };
  return { blog, newPost, handleChange, handleSubmit };
};
