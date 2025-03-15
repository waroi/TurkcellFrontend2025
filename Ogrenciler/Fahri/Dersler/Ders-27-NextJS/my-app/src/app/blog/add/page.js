'use client'
import { use, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBlog, setUser } from "../../redux/slice/blogSlice"
import { useRouter } from "next/navigation"
import "./AddBlogForm.css"
import { BlogService } from "@/app/service/BlogService"
import { useSession } from "next-auth/react"
import { AuthService } from "@/app/service/AuthService"

const AddBlogForm = () => {
  const dispatch = useDispatch()
  const { data: session, status } = useSession()

  const userInfo = useSelector(state => state.blog.user)

  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [author, setAuthor] = useState(userInfo.username)
  const [poster, setPoster] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !content || !poster) {
      alert("Lütfen tüm alanları doldurun.")
      return;
    }

    const newBlog = {
      title,
      content,
      author,
      poster,
      pushedAt: new Date().toLocaleDateString("tr-TR"),
    }

    try {
      const addedBlog = await BlogService.addBlog({
        ...newBlog,
        id: crypto.randomUUID(),
      })

      dispatch(addBlog(addedBlog));

      setTitle("")
      setContent("")
      setAuthor(userInfo?.username || "Fahri")
      setPoster("")

      router.push("/blog")
    } catch (error) {
      console.error("Blog eklerken bir hata oluştuuuu", error)
      alert("Blog eklenirken bir hata ollluştuu")
    }
  }

  return (
    <>
      <div className="container mt-5">
        <a href="#" className="d-flex align-items-center gap-2" onClick={() => router.push('/blog')}>
          <svg width={17} height={17} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          Geri Dön
        </a>
      </div>
      <div className="blog-form-container">
        <form onSubmit={handleSubmit} className="blog-form">
          <h1 className="form-title">Yeni Blog Ekle</h1>
          <div className="form-group">
            <label className="form-label">Başlık:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Blog başlığını girin"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Yazar:</label>
            <input
              type="text"
              disabled
              value={userInfo.username}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Blog yazarını girin"
              className="form-input bg-dark"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Afiş (Poster):</label>
            <input
              type="text"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              placeholder="Afiş bağlantısını girin"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">İçerik:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Blog içeriğini yazın"
              className="form-textarea"
            />
          </div>

          <button type="submit" className="submit-button">
            Blog Ekle
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlogForm