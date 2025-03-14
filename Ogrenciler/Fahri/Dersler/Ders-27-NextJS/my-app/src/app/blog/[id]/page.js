"use client";

import { removeBlog } from "@/app/redux/slice/blogSlice";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setBlogs } from "@/app/redux/slice/blogSlice";
import "./BlogDetail.css";
import { BlogService } from "@/app/service/BlogService";
import { useSession } from "next-auth/react";

const BlogDetail = ({ params }) => {
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blogs)

  const { data: session, status } = useSession()
  const userInfo = useSelector(state => state.blog.user)

  const [blogContent, setBlogContent] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const blogId = await params.id
      if (!blogs || blogs.length === 0) {
        const response = await fetch("http://localhost:5000/blogs")
        const data = await response.json()
        dispatch(setBlogs(data))
      }
      const blog = blogs.find((blog) => blog.id.toString() === blogId.toString())
      setBlogContent(blog || null)
    };

    fetchData()
  }, [params.id, blogs, dispatch])

  const handleDelete = async () => {
    const blogId = blogContent.id
    try {
      await BlogService.deleteBlog(blogId)
      dispatch(removeBlog(blogId))
      router.push("/blog")
    } catch (error) {
      console.error("Blog silinirken hata oluşt", error)
      alert("Blog silinirken bir hata olluştuu")
    }
  };

  if (!blogContent) {
    return <div className="loading-message">Blog yükleniyor veya bulunamadı...</div>;
  }

  const formattedDate = blogContent.pushedAt
    ? new Date(blogContent.pushedAt).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    : "5 Eylül 5999"

  return (
    <div className="blog-detail-container">
      <div className="blog-detail-card">
        <div className="blog-detail-header">
          <div className="blog-poster-image">
            <img
              src={blogContent.poster}
              alt={blogContent.title}
            />
          </div>
          <div className="blog-metadata">
            <div className="blog-author">
              <span className="author-label">Yazar:</span>
              <span className="author-name">{blogContent.author}</span>
            </div>
            {formattedDate && (
              <div className="blog-date">
                <span className="date-label">Tarih:</span>
                <span className="date-value">{formattedDate}</span>
              </div>
            )}
          </div>
        </div>

        <div className="blog-detail-content">
          <h1 className="blog-title">{blogContent.title}</h1>
          <div className="blog-content">
            {blogContent.content}
          </div>
          <h6 class="blog-title fs-5 text-end">Yazar: {blogContent.author} </h6>
          <div className="blog-actions">
            <Link href="/blog" className="blog-back-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
              </svg>
              Geri Dön
            </Link>
            {userInfo.username === blogContent.author &&
              <div className="d-flex gap-3">
                <button className="blog-delete-button" onClick={() => router.push(`/blog/edit/${blogContent.id}`)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512" width={16} height={16}><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" /></svg>
                  Düzenle
                </button>
                <button className="blog-delete-button" onClick={handleDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                  </svg>
                  Sil
                </button>
              </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail