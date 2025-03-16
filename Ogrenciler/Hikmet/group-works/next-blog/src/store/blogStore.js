import { create } from "zustand";

const useBlogStore = create((set) => ({
	blogs: [],
	filteredBlogs: [],
	theme: "light",
	searchInput: "",

	setInputValue: (searchInput) => { set({ searchInput }) },
	setBlogs: (blogs) => set({ blogs }),
	toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),

	fetchBlogs: async () => {
		try {
			const response = await fetch("http://localhost:3000/blogs");
			const data = await response.json();
			set({ blogs: data });
		} catch (error) {
			console.error("Blog verileri alınamadı:", error);
		}
	},

	filterBlogs: async (filterText) => {
		try {
			const response = await fetch("http://localhost:3000/blogs");
			const data = await response.json();
			const filteredData = data.filter(blog => blog.title.toLowerCase().includes(filterText.toLowerCase()))
			set({ filteredBlogs: filteredData });
		} catch (error) {
			console.error("Blog verileri alınamadı:", error);
		}
	},

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
					blogs: [...state.blogs, newBlog],
				}));
				return true;
			}
			return false;
		} catch (error) {
			console.error("Blog eklenirken hata:", error);
			return false;
		}
	},

	deleteBlog: async (id) => {
		try {
			const response = await fetch(`http://localhost:3000/blogs/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				set((state) => ({
					blogs: state.blogs.filter((blog) => blog.id !== id),
				}));
				return true;
			}
			return false;
		} catch (error) {
			console.error("Blog silinirken hata:", error);
			return false;
		}
	},

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
					blogs: state.blogs.map((blog) =>
						blog.id === id ? updatedBlog : blog
					),
				}));
				return true;
			}
			return false;
		} catch (error) {
			console.error("Blog güncellenirken hata:", error);
			return false;
		}
	},


}));

export default useBlogStore;
