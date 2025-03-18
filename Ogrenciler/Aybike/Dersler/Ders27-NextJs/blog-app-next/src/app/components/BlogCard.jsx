import Link from "next/link";

const BlogCard = ({ blog, edit }) => {
  return (
    <div>
      <Link href={`/blog/${blog.id}`}>
        <div className="card blog-card">
          <img
            src={blog.image}
            className="card-img-top blog-image"
            alt="Blog Picture"
            width={100}
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
          </div>
          <div className="card-footer bg-transparent">
            <p className="blog-date">
              {blog.date} | {blog.author}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
