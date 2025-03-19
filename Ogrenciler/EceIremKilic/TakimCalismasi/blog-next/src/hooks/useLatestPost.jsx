import { useState, useEffect } from "react";
import useBlogStore from "@/store/useBlogStore";

const useLatestPost = () => {
  const { posts, getPosts } = useBlogStore();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    getPosts();
    setIsMounted(true);
  }, []);

  const filtredItem = posts.slice(8, 12);
  return { filtredItem, isMounted };
};

export default useLatestPost;
