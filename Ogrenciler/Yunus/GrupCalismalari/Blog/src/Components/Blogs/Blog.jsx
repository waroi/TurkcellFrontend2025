import BlogItem from "./Item/BlogItem"

const Blogs = ({ blogs, setActivePost }) => {
    return (
        <div className="row mt-5">

            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <BlogItem
                        setActivePost={setActivePost}
                        blog={blog}
                        key={blog.id || Math.random().toString()}
                    />
                ))
            ) : (
                <div className="col-lg-12 text-center">
                    <p>BLOG YOK BRAH</p>
                </div>
            )}
        </div>
    )
}

export default Blogs