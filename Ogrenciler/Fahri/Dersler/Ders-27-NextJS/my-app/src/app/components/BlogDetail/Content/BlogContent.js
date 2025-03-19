"use client"

const BlogDetailContent = ({ blog }) => {
    return (
        <>
            <p className="readingingTime">

                Okuma süresi:    <strong>{blog.readingTime}</strong>
            </p>

            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-content">
                {blog.content}
            </div>
            <h6 className="blog-title fs-5 text-end">Yazar: {blog.author}</h6>
        </>
    )
}

export default BlogDetailContent