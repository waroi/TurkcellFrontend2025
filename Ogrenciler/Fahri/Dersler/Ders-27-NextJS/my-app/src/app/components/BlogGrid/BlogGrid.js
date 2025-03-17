import Link from "next/link";

const BlogGrid = ({ blogs }) => {
    return (
        <div className="blog-grid">
            {blogs && blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div className="blog-card" key={blog.id}>
                        <div className="blog-card-image">
                            <img
                                src={blog.poster || 'https://picsum.photos/200'}
                                alt={blog.title}
                            />
                        </div>
                        <div className="blog-card-content">
                            <h5 className="blog-card-title">
                                {blog.title.substring(0, 20) + "..."}
                            </h5>
                            <p className="blog-card-excerpt">
                                {blog.content.substring(0, 50) + "..."}
                            </p>
                            <p className="blog-card-author">
                                <strong>Yazar:</strong> {blog.author}
                            </p>
                            <Link
                                href={`/blog/${blog.id}`}
                                className="view-blog-button"
                            >
                                Daha fazla
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p className="no-blogs-message">Blog yok veya yükleniyor!</p>
            )}
        </div>
    );
};

export default BlogGrid;