import { useDispatch, useSelector } from "react-redux";
import BaseModal from "./BaseModal";
import { addedBlog, getUserBlogs } from "../../../../../firebase/dbController";
import { addAllBlog, resetBlog } from "@/app/redux/slices/blogSlice";

const AddModal = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      addedBlog(blog);
      const blogs = await getUserBlogs();
      dispatch(addAllBlog(blogs));
      dispatch(resetBlog());
    } catch (error) {
      alert("Blog Eklenmedi", error);
    }
  };
  return (
    <BaseModal
      title="☄️ Blog Ekle"
      id={"addModal"}
      handleClick={handleClick}
      blog={blog}
    />
  );
};

export default AddModal;
