'use client';

import Link from 'next/link';

const BlogCard = ({ blog }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card h-100">
        <img src={blog.image} className="card-img-top" alt="Blog image" />
        <div className="card-body">
          <h5 className="card-title">{blog.title}</h5>
          <p className="card-text">{blog.detail}</p>
          <Link href={`/blog/${blog.id}`} className="btn btn-primary">
            Detaylar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
