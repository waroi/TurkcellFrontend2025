import React from "react";
import BaseModal from "./BaseModal";
import { useDispatch, useSelector } from "react-redux";
import { updateBlog } from "@/app/redux/slices/blogSlice";
import { updateFbBlog } from "../../../../../firebase/dbController";

const UpdateModal = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  console.log(blog + "dfg");
  const handleClick = async () => {
    try {
      console.log("Güncellenen blog:", blog);
      await updateFbBlog(blog);
      dispatch(updateBlog());
      console.log("Blog güncelleme başarılı");
    } catch (error) {
      console.error("Blog güncellenirken hata oluştu:", error);
    }
  };
  return (
    <BaseModal
      id={"updateModal"}
      handleClick={handleClick}
      title="Blog Düzenle"
      blog={blog}
    />
  );
};

export default UpdateModal;
