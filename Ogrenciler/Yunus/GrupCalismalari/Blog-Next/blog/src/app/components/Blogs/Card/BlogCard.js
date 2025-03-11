
const BlogCard = ({ blog }) => {
    return (
        <>
            {blog && <div className="col-lg-3 rounded">
                <div className="card p-3 h-100">
                    <Image src={blog.poster || "./file.svg"} height={272} width={100} className="rounded card-img-top img-fluid" alt={`${blog.title} Adlı Resim`} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {blog.title}
                        </h5>
                        <p className="card-text">{
                            blog.content}</p>
                    </div>
                    <div className="card-footer border-top-0">
                        <Link href={`/blog/${blog.id}`} className="btn btn-primary">Daha fazlası</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default BlogCard