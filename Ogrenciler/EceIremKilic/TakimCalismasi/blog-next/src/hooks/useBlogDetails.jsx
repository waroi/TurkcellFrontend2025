import { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";

export const useBlogDetails = (id) => {
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getPostById } = useBlogStore();

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const fetchedBlog = await getPostById(id);
        setBlog(fetchedBlog);
      } catch (error) {
        console.error("Blog getirme hatası:", error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlogById();
    } else {
      setIsLoading(false);
      setError(new Error("Blog ID bulunamadı"));
    }
  }, [id, getPostById]);

  return { blog, isLoading, error };
};
