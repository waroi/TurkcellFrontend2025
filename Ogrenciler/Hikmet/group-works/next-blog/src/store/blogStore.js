import { create } from "zustand";

const useBlogStore = create((set) => ({
    blogs: [],
    setBlogs: (blogs) => set({ blogs }),
    
    // Tüm blogları getir
    fetchBlogs: async () => {
        try {
            const response = await fetch("http://localhost:3000/blogs");
            const data = await response.json();
            set({ blogs: data });
        } catch (error) {
            console.error("Blog verileri alınamadı:", error);
        }
    },

    // Yeni blog ekle
    createBlog: async (blogData) => {
        try {
            const response = await fetch("http://localhost:3000/blogs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogData),
            });

            if (response.ok) {
                const newBlog = await response.json();
                set((state) => ({ 
                    blogs: [...state.blogs, newBlog] 
                }));
                return true;
            }
            return false;
        } catch (error) {
            console.error("Blog eklenirken hata:", error);
            return false;
        }
    },

    // Blog sil
    deleteBlog: async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}`, {
                method: "DELETE",
            });

            if (response.ok) {
                set((state) => ({
                    blogs: state.blogs.filter(blog => blog.id !== id)
                }));
                return true;
            }
            return false;
        } catch (error) {
            console.error("Blog silinirken hata:", error);
            return false;
        }
    },

    // Blog güncelle
    updateBlog: async (id, blogData) => {
        try {
            const response = await fetch(`http://localhost:3000/blogs/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(blogData),
            });

            if (response.ok) {
                const updatedBlog = await response.json();
                set((state) => ({
                    blogs: state.blogs.map(blog => 
                        blog.id === id ? updatedBlog : blog
                    )
                }));
                return true;
            }
            return false;
        } catch (error) {
            console.error("Blog güncellenirken hata:", error);
            return false;
        }
    }
}));

export default useBlogStore;