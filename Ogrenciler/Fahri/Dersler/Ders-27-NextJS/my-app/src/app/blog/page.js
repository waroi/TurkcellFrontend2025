"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs, setUser } from "../redux/slice/blogSlice";
import Link from "next/link";
import "./BlogList.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { AuthService } from "../service/AuthService";
import FunSection from "../components/FuncSection/FunSection";

const BlogList = () => {
  const { data: session, status } = useSession()
  const dispatch = useDispatch()
  const blogs = useSelector((state) => state.blog.blogs)

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("http://localhost:5000/blogs")
      const blogsData = await response.json()
      dispatch(setBlogs(blogsData))
    };
    fetchBlogs()

    const fetchUser = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          const user = await AuthService.getUser(session.user.email)
          console.log("Fetched user:", user)
          dispatch(setUser(user))
        } catch (error) {
          console.error("Kullanıcı alınırken hata:", error)
        }
      } else if (status === "unauthenticated") {
        console.log("Kullanıcı giriş yapmamış, redirect ediliyor...")
        router.push("/login")
      }
    }

    fetchUser()

  }, [dispatch, session, status])

  return (
    <div className="blog-list-container">
      <div className="blog-list-header">
        <h1 className="blog-list-title fw-bold fst-italic">PESPEMBE BLOG</h1>
        {status !== "authenticated" &&
          <div className="d-flex gap-3">
            <Link href={'/login'} className="add-blog-link">
              Giriş Yap
            </Link>
            <Link href={"/register"} className="add-blog-link">
              Kayıt Ol
            </Link>
          </div>
          || <div className="d-flex gap-3">
            <Link href={"/blog"} onClick={signOut} className="add-blog-link">
              Çıkış Yap
            </Link>
            <Link href={"/blog/add"} className="add-blog-link">
              Blog Ekle
            </Link>
          </div>
        }

      </div>

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

      <FunSection />

    </div>
  );
};

export default BlogList