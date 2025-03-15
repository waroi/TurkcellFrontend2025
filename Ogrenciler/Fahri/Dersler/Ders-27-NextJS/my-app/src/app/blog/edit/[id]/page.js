"use client"

import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/navigation"
import { updateBlog } from "@/app/redux/slice/blogSlice"
import "./EditBlogForm.css"
import { BlogService } from "@/app/service/BlogService"
import { useSession } from "next-auth/react"

const EditBlogForm = ({ params }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const blogs = useSelector((state) => state.blog.blogs)
    const { data: session, status } = useSession()

    const userInfo = useSelector(state => state.blog.user)

    const [editBlog, setEditBlog] = useState({
        title: "",
        content: "",
        author: "",
        poster: "",
        blogId: "",
    })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchBlog = async () => {
            const id = params.id
            if (!id) {
                alert("Düzenlenecek blog ID'si bulunamadı.")
                router.push("/blog")
                return
            }

            const blogToEdit = blogs.find((blog) => blog.id === id)

            if (blogToEdit) {
                setEditBlog({
                    title: blogToEdit.title,
                    content: blogToEdit.content,
                    author: userInfo.username,
                    poster: blogToEdit.poster,
                    blogId: id,
                })
                setIsLoading(false)
            } else {
                try {
                    const data = await BlogService.getBlogById(id)
                    setEditBlog({
                        title: data.title,
                        content: data.content,
                        author: userInfo.username,
                        poster: data.poster,
                        blogId: id,
                    })
                } catch (error) {
                    console.error("Blog yüklenirken hata oluştu aaaaaaaaaa:", error)
                    alert("Blog bulunamadı veya yüklenirken hata oluştu kankaaaaa")
                    router.push("/blog")
                } finally {
                    setIsLoading(false)
                }
            }
        }

        fetchBlog()
    }, [blogs, params.id, router])

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setEditBlog((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!editBlog.title || !editBlog.content || !editBlog.author || !editBlog.poster) {
            alert("Lütfen tüm alanları doldurun.")
            return
        }

        const updatedBlog = {
            id: editBlog.blogId,
            title: editBlog.title,
            content: editBlog.content,
            author: editBlog.author,
            poster: editBlog.poster,
            updatedAt: new Date().toLocaleDateString("tr-TR"),
        }

        dispatch(updateBlog(updatedBlog))

        try {
            await BlogService.updateBlog(updatedBlog)
            alert("Blog başarıyla güncellendi")
            router.push("/blog")
        } catch (error) {
            console.error("Güncelleme hatasıııııııııııı:", error)
            alert("Blog güncellenirken bir hata oluştuuuuuuuuuuuuuuuuu")
        }
    }

    if (isLoading) return <div className="loading">Yükleniyor...</div>

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
                    <h1 className="form-title">Blog Düzenle</h1>
                    <div className="form-group">
                        <label className="form-label">Başlık:</label>
                        <input
                            type="text"
                            value={editBlog.title}
                            name="title"
                            onChange={onChangeHandler}
                            placeholder="Blog başlığını girin"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Yazar:</label>
                        <input
                            type="text"
                            name="author"
                            disabled
                            value={editBlog.author}
                            onChange={onChangeHandler}
                            placeholder="Blog yazarını girin"
                            className="form-input bg-dark"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Afiş (Poster):</label>
                        <input
                            type="text"
                            name="poster"
                            value={editBlog.poster}
                            onChange={onChangeHandler}
                            placeholder="Afiş bağlantısını girin"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">İçerik:</label>
                        <textarea
                            value={editBlog.content}
                            name="content"
                            onChange={onChangeHandler}
                            placeholder="Blog içeriğini yazın"
                            className="form-textarea"
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Güncelle
                    </button>
                </form>
            </div>
        </>
    )
}

export default EditBlogForm