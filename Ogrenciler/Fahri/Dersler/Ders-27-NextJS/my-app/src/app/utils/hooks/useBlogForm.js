"use client"

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../../redux/slice/blogSlice";
import { useRouter } from "next/navigation";
import { BlogService } from "@/app/service/BlogService";

export const useBlogForm = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const userInfo = useSelector(state => state.blog.user)

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [author, setAuthor] = useState(userInfo?.username || "")
    const [poster, setPoster] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !content || !poster) {
            alert("Lütfen tüm alanları doldurun.");
            return
        }

        const newBlog = {
            title,
            content,
            author: userInfo?.username || author,
            poster,
            pushedAt: new Date().toLocaleDateString("tr-TR"),
        }

        try {
            const addedBlog = await BlogService.addBlog({
                ...newBlog,
                id: crypto.randomUUID(),
            })

            dispatch(addBlog(addedBlog))

            setTitle("")
            setContent("")
            setAuthor(userInfo?.username || "")
            setPoster("")

            router.push("/blog");
        } catch (error) {
            console.error("Blog eklerken bir hata ollluştu", error)
            alert("Blog eklenirken bir hata olluştu")
        }
    }

    return {
        title, setTitle,
        content, setContent,
        author, setAuthor,
        poster, setPoster,
        userInfo,
        handleSubmit
    }
}