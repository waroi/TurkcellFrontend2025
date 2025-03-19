import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlogs, setUser } from "../../redux/slice/blogSlice";
import { AuthService } from "../../service/AuthService";
import { BlogService } from "../../service/BlogService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useBlogData = () => {
    const { data: session, status } = useSession()
    const dispatch = useDispatch()
    const blogs = useSelector((state) => state.blog.blogs)
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("Tümü")
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const [categories, setCategories] = useState(["Tümü"])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await BlogService.getAllBlogs()
                dispatch(setBlogs(blogsData))
            } catch (error) {
                console.error("Bloglar alınırken hata:aaaaaaaaaaaaaaa", error)
            }
        }

        const fetchUser = async () => {
            if (status === "authenticated" && session?.user?.email) {
                try {
                    const user = await AuthService.getUser(session.user.email)
                    dispatch(setUser(user))
                } catch (error) {
                    console.error("Kullanıcı alınırken hata:", error)
                }
            } else if (status === "unauthenticated") {
                router.push("/login")
            }
        }

        fetchBlogs()
        fetchUser()
    }, [dispatch, session, status, router])

    useEffect(() => {
        if (blogs.length > 0) {
            const uniqueCategories = ["Tümü", ...new Set(blogs.map(blog => blog.category).filter(Boolean))]
            setCategories(uniqueCategories)

            filterBlogs()
        } else {
            setFilteredBlogs([])
        }
    }, [blogs, searchTerm, selectedCategory])

    const filterBlogs = () => {
        let result = [...blogs]

        if (selectedCategory !== "Tümü") {
            result = result.filter(blog => blog.category === selectedCategory)
        }

        if (searchTerm.trim() !== "") {
            const searchLower = searchTerm.toLowerCase()
            result = result.filter(blog =>
                blog.title?.toLowerCase().includes(searchLower) ||
                blog.content?.toLowerCase().includes(searchLower) ||
                blog.author?.toLowerCase().includes(searchLower)
            )
        }

        setFilteredBlogs(result)
    }

    const handleSearch = (value) => {
        setSearchTerm(value)
    }

    const handleCategoryChange = (category) => setSelectedCategory(category)

    return {
        blogs,
        status,
        filteredBlogs,
        categories,
        searchTerm,
        selectedCategory,
        handleSearch,
        handleCategoryChange
    }
}