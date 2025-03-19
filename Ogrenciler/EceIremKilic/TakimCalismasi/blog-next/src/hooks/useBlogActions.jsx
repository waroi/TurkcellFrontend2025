"use client";
import { useRouter } from "next/navigation";
import useBlogStore from "@/store/useBlogStore";

export const useBlogActions = () => {
  const router = useRouter();
  const { deletePost } = useBlogStore();

  const handleDelete = (id) => {
    deletePost(id);
    router.push("/");
  };

  return { handleDelete };
};
