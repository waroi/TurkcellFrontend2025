"use client"

const BlogDetailHeader = ({ blog, formattedDate }) => {
    return (
        <div className="blog-detail-header">
            <div className="infos">
                <p className="category-paragraph">
                    {blog.category}
                </p>
            </div>
            <div className="blog-poster-image">
                <img src={blog.poster} alt={blog.title} />
            </div>
            <div className="blog-metadata">
                <div className="blog-author">
                    <span className="author-label">Yazar:</span>
                    <span className="author-name">{blog.author}</span>
                </div>
                {formattedDate && (
                    <div className="blog-date">
                        <span className="date-label">Tarih:</span>
                        <span className="date-value">{formattedDate}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogDetailHeader