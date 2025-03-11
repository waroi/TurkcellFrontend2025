import { create } from "zustand";
import { getBlogs, addBlog, editBlog } from "./database";

const initial = await (async () => ({ blogs: await getBlogs() }))();

const state = create((set) => ({
  ...initial,

  addBlog: (blog) =>
    set((state) => {
      blog.id = Math.random().toString(36).substring(2);

      addBlog(blog);

      return {
        blogs: [...state.blogs, blog],
      };
    }),

  editBlog: (blog) =>
    set((state) => ({
      blogs: state.blogs.map((selected) =>
        blog.id == selected.id ? blog : selected
      ),
    })),

  deleteBlog: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => id != blog.id),
    })),
}));

export default state;
