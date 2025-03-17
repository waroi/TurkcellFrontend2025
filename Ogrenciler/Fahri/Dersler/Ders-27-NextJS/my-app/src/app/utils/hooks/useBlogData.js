import { useEffect } from "react";
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

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const blogsData = await BlogService.getAllBlogs()
                dispatch(setBlogs(blogsData))
            } catch (error) {
                console.error("Bloglar alınırken hata:", error)
            }
        }

        const fetchUser = async () => {
            if (status === "authenticated" && session?.user?.email) {
                try {
                    const user = await AuthService.getUser(session.user.email);
                    console.log("Fetched user:", user);
                    dispatch(setUser(user));
                } catch (error) {
                    console.error("Kullanıcı alınırken hata:", error);
                }
            } else if (status === "unauthenticated") {
                console.log("Kullanıcı giriş yapmamış, redirect ediliyor...")
                router.push("/login");
            }
        };

        fetchBlogs()
        fetchUser()
    }, [dispatch, session, status, router])

    return { blogs, status }
}