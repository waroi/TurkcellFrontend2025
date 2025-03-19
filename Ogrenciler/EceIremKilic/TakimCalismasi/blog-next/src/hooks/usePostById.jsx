import { useEffect, useState } from "react";
import useBlogStore from "@/store/useBlogStore";
import { useRouter } from "next/navigation";

const usePostById = (id) => {
  const [blogById, setBlogById] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { getPostById } = useBlogStore();
  const router = useRouter();

  useEffect(() => {
    const fetchBlogById = async () => {
      if (!id) return;

      try {
        console.log("id2", id);
        const fetchedBlog = await getPostById(id);

        if (!fetchedBlog) {
          console.error("Blog bulunamadı!");
          router.push("/");
        } else {
          setBlogById(fetchedBlog);
        }
      } catch (error) {
        console.error("Blog getirme hatası:", error);
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogById();
  }, [id, getPostById, router]);

  return { blogById, isLoading };
};

export default usePostById;
