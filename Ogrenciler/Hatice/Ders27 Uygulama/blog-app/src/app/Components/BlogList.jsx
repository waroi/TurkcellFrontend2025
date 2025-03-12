import BlogCard from "./BlogCard";

const BlogList = ({ blogs }) => {
  return (
    <>
      <div className="row g-4 mb-4">
        {blogs && blogs?.map((blog) => <BlogCard key={blog.id} blog={blog} />)};
      </div>
    </>
  );
};

export default BlogList;
