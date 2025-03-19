import { useState, useEffect } from "react";
import useBlogStore from "@/store/useBlogStore";

const usePosts = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { posts } = useBlogStore();

  useEffect(() => {
    setIsMounted(true);
    if (posts && posts.length > 0) {
      setIsLoading(false);
    }
  }, [posts]);
  return { isLoading, isMounted, posts };
};

export default usePosts;
