"use client";
import Link from "next/link";
import Image from "next/image";
import { myLoader } from "@/utils/functions";
import Button from "./Button";
import { deleteBlog } from "@/utils/services/helpers";

const BlogCard = ({ blog, getBlogs }) => {
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
              priority
            />
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
              <Button
                className="btn btn-danger ms-2"
                onClick={() => {
                  deleteBlog(blog?.id);
                  getBlogs();
                }}
              >
                Sil
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
