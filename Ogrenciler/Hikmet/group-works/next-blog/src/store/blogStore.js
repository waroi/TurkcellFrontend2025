import { createClient } from "@/utils/supabase/client";
import { create } from "zustand";

const useBlogStore = create((set) => ({
	blogs: [],
	filteredBlogs: [],
	theme: "light",
	searchInput: "",

	setInputValue: (searchInput) => {
		set({ searchInput });
	},
	setBlogs: (blogs) => set({ blogs }),
	toggleTheme: () =>
		set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),

	fetchBlogs: async () => {
		const supabase = createClient();
		try {
			let { data: blogs, error } = await supabase.from("blogs").select("*");
			if (error) {
				console.error("Supabase'den veri çekerken hata:", error);
				return;
			}
			set({ blogs });
			set({ filteredBlogs: blogs });
		} catch (error) {
			console.error("Blog verileri alınamadı:", error);
		}
	},
	fetchBlogById: async (id) => {
		const supabase = createClient();
		try {
			let { data: blog, error } = await supabase
				.from("blogs")
				.select("*")
				.eq("id", id)
				.single();
			if (error) {
				console.error("Supabase'den veri çekerken hata:", error);
				return;
			}
			return blog;
		} catch (error) {
			console.error("Blog verisi alınamadı:", error);
		}
	},

	filterBlogs: async (filterText) => {
		try {
			const response = await fetch("http://localhost:3000/blogs");
			const data = await response.json();
			const filteredData = data.filter((blog) =>
				blog.title.toLowerCase().includes(filterText.toLowerCase())
			);
			set({ filteredBlogs: filteredData });
		} catch (error) {
			console.error("Blog verileri alınamadı:", error);
		}
	},

	createBlog: async (blogData) => {
		try {
			const supabase = createClient();
			const { data, error } = await supabase.from("blogs").insert(blogData);

			if (error) {
				console.error("Supabase'de blog eklenirken hata:", error);
				return false;
			}

			set((state) => ({
				blogs: [...state.blogs, blogData],
				filteredBlogs: [...state.filteredBlogs, blogData],
			}));
			return true;
		} catch (error) {
			console.error("Blog eklenirken hata:", error);
			return false;
		}
	},

	deleteBlog: async (id) => {
		const supabase = createClient();
		try {
			const { data, error } = await supabase
				.from("blogs")
				.delete()
				.eq("id", id);

			if (error) {
				console.error("Supabase'de blog silinirken hata:", error);
				return false;
			}

			set((state) => ({
				blogs: state.blogs.filter((blog) => blog.id !== id),
				filteredBlogs: state.filteredBlogs.filter((blog) => blog.id !== id),
			}));
			return true;
		} catch (error) {
			console.error("Blog silinirken hata:", error);
			return false;
		}
	},

	updateBlog: async (id, blogData) => {
		const supabase = createClient();
		try {
			const { data, error } = await supabase
				.from("blogs")
				.update(blogData)
				.eq("id", id);

			if (error) {
				console.error("Supabase'de blog güncellenirken hata:", error);
				return false;
			}

			set((state) => ({
				blogs: state.blogs.map((blog) =>
					blog.id === id ? { ...blog, ...blogData } : blog
				),
				filteredBlogs: state.filteredBlogs.map((blog) =>
					blog.id === id ? { ...blog, ...blogData } : blog
				),
			}));
			return true;
		} catch (error) {
			console.error("Blog güncellenirken hata:", error);
			return false;
		}
	},
}));

export default useBlogStore;
