import BlogCard from "./Card/BlogCard"

const Blogs = ({ blogs }) => {
    return (
        <>
            {blogs && blogs.length > 0 && blogs.map((blog, index) => (
                <BlogCard card={blog} key={index} />
            ))}
        </>
    )
}

export default Blogs