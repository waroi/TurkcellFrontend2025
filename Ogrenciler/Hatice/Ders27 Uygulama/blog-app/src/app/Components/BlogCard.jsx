"use client";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
  const myLoader = (src) => {
    return src;
  };
  return (
    <>
      {blog && (
        <div className="col-lg-4 rounded">
          <div className="card p-3 h-100">
            <Image
              src={"/noImage.png"}
              height={50}
              width={150}
              className="rounded card-img-top img-fluid w-100 h-100"
              alt="Adlı Resim"
              loader={() => myLoader(blog?.poster)}
            />
            {/* <img
              src={blog?.poster || "/noImage.png"}
              alt={`${blog?.title} Adlı Resim`}
              className="rounded card-img-top img-fluid w-100 h-100"
            /> */}
            <div className="card-body bg-transparent">
              <h5 className="card-title fw-bold">{blog.title}</h5>
              <p className="card-text text-muted">
                {blog.content.substring(0, 100)}
              </p>
            </div>
            <div className="card-footer border-top-0 bg-transparent ">
              <Link href={`blog/${blog.id}`} className="btn btn-primary">
                Daha fazlası
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
