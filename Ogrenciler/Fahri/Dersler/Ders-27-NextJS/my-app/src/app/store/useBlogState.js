import { create } from "zustand";

const useBlogState = create((set) => ({
  blogs: [
    {
      id: 1,
      title: "React ile Modern Web Uygulamaları Geliştirmek",
      content:
        "React, modern web uygulamaları oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir...",
      author: "Fahri",
      date: "2025-03-11",
    },
    {
      id: 2,
      title: "Node.js ile Backend Geliştirme",
      content:
        "Node.js, asenkron ve olay güdümlü yapısıyla yüksek performanslı backend uygulamaları oluşturmayı sağlar...",
      author: "Fahri",
      date: "2025-03-10",
    },
  ],
  addBlog: (blog) =>
    set((state) => ({
      blogs: [...state.blogs, { id: self.crypto.randomUUID(), ...blog }],
    })),
  removeBlog: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => blog.id !== id),
    })),
  updateBlog: (id, newBlog) =>
    set((state) => ({
      //   blogId: state.blogs.findIndex((blog) => blog.id == id),
      blogs: state.blogs.map((blog) => {
        blog.id.toString() == id ? { ...newBlog } : blog;
      }),
    })),
}));

export default useBlogState;
