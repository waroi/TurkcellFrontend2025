import React from "react";
import BaseModal from "./BaseModal";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "@/app/redux/slices/blogSlice";
import { updateFbBlog } from "../../../../../firebase/dbController";

const UpdateModal = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  const handleClick = async () => {
    try {
      await updateFbBlog(blog);
      dispatch(updateBlog());
    } catch (error) {
      alert("Blog güncellenirken hata oluştu:", error);
    }
  };
  return (
    <BaseModal
      title="Blog Düzenle"
      id={"updateModal"}
      handleClick={handleClick}
      blog={blog}
    />
  );
};

export default UpdateModal;
