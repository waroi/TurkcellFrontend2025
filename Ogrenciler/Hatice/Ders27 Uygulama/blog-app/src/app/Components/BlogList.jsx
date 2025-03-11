import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="row">
        {blogs && blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)};
      </div>
    </>
  );
};

export default BlogList;
