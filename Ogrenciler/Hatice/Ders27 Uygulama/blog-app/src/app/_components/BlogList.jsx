import { deleteBlog } from "@/utils/services/helpers";
import BlogCard from "./BlogCard";
import  Card  from "./Card";

const BlogList = ({ blogs, getBlogs, onUpdate}) => {
  return (
    <>
      <div className="row g-4 mb-4">
        {blogs &&
          blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} getBlogs={getBlogs} onUpdate={onUpdate}/>
          ))}
        ;
      </div>
    </>
  );
};

export default BlogList;
