"use client";

import { removeBlog } from "@/app/redux/slice/blogSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setBlogs } from "@/app/redux/slice/blogSlice";

const BlogDetail = ({ params }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const [blogContent, setBlogContent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const blogId = await params.id;
      if (!blogs || blogs.length === 0) {
        //! veri gelmiyorsa db'den çek
        const response = await fetch("http://localhost:5000/blogs");
        const data = await response.json();
        dispatch(setBlogs(data));
      }
      const blog = blogs.find((b) => b.id.toString() === blogId.toString());
      setBlogContent(blog || null);
    };

    fetchData();
  }, [params.id, blogs, dispatch]);

  const handleDelete = async () => {
    const blogId = blogContent.id;
    await fetch(`http://localhost:5000/blogs/${blogId}`, {
      method: "DELETE",
    });
    dispatch(removeBlog(blogId));
    router.push("/blog");
  };

  if (!blogContent) {
    return <div>Blog yükleniyor veya bulunamadı...</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <img
              src="https://picsum.photos/200"
              className="card-img-top"
              alt={blogContent.title}
            />
            <div className="card-body">
              <h5 className="card-title">{blogContent.title}</h5>
              <p className="card-text">{blogContent.content}</p>
              <p className="card-text">{blogContent.author}</p>
              <Link href="/blog" className="btn btn-outline-danger">
                Geri Dön
              </Link>
              <button className="btn btn-outline-danger" onClick={handleDelete}>
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
