import useBlogStore from "@/store/useBlogStore";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useUserData } from "./useUserData";

export const useAddPost = () => {
  const router = useRouter();
  const { userData } = useUserData();
  const { addPost } = useBlogStore();
  const [newPost, setNewPost] = useState({
    title: "",
    image: "",
    author: userData ? userData?.fullName : "",
    releaseDate: "",
    content: "",
  });

  const handleChange = useCallback((e) => {
    setNewPost((prevPost) => ({
      ...prevPost,
      [e.target.id]: e.target.value,
    }));
  }, []);

  useEffect(() => {
    if (userData) {
      setNewPost((prev) => ({ ...prev, author: userData.fullName }));
    }
  }, [userData]);

  const handleAdd = useCallback((newPost, e) => {
    e.preventDefault();
    addPost(newPost);
    console.log("added", newPost);
    router.push("/");
  });
  if (!newPost) return <Loading />;
  console.log("val:", newPost);

  return { newPost, setNewPost, handleChange, handleAdd };
};
