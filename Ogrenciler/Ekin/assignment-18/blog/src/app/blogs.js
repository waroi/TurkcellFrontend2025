import { createStore, useStore } from "zustand";

import {
  getBlogs as getBlogsFromServer,
  addBlog as addBlogToServer,
  editBlog as editBlogToServer,
  deleteBlog as deleteBlogFromServer,
} from "./database";

const state = createStore((set) => ({
  blogs: [],

  getBlogs: async () => {
    set({ blogs: await getBlogsFromServer() });
  },

  addBlog: (blog) => {
    blog.id = Math.random().toString(36).substring(2);

    addBlogToServer(blog);

    set((state) => ({
      blogs: [...state.blogs, blog],
    }));
  },

  editBlog: (blog) => {
    editBlogToServer(blog);

    set((state) => ({
      blogs: state.blogs.map((selected) =>
        blog.id == selected.id ? blog : selected
      ),
    }));
  },

  deleteBlog: (id) => {
    deleteBlogFromServer(id);

    set((state) => ({
      blogs: state.blogs.filter((blog) => id != blog.id),
    }));
  },
}));

const useBookStore = () => useStore(state);

export default useBookStore;
