"use client"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setBlogs, removeBlog } from "@/app/redux/slice/blogSlice";
import { BlogService } from "@/app/service/BlogService";

export const useBlogDetail = (blogId) => {
    const dispatch = useDispatch()
    const router = useRouter()
    const blogs = useSelector((state) => state.blog.blogs)
    const userInfo = useSelector(state => state.blog.user)
    const [blogContent, setBlogContent] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            if (!blogs || blogs.length === 0) {
                const data = await BlogService.getAllBlogs()
                dispatch(setBlogs(data))
            }
            const blog = blogs.find((blog) => blog.id.toString() === blogId.toString())
            setBlogContent(blog || null)
        };

        fetchData();
    }, [blogId, blogs, dispatch])

    const handleDelete = async () => {
        try {
            await BlogService.deleteBlog(blogContent.id)
            dispatch(removeBlog(blogContent.id))
            router.push("/blog")
        } catch (error) {
            console.error("Blog silinirken hata oluştu", error)
            alert("Blog silinirken bir hata oluştu")
        }
    }

    const formatDate = (dateString) => {
        return dateString
            ? new Date(dateString).toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })
            : "5 Eylül 5999"
    }

    return {
        blogContent,
        userInfo,
        handleDelete,
        formatDate,
        router
    }
}