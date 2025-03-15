import { create } from "zustand";

export default create((set) => ({
  blogs: [],
  user: null,

  //* User ====================================================================================================

  setUser: (user) => {
    set({ user });
  },

  //* Blog ====================================================================================================

  setBlogs: (blogs) => {
    set({ blogs });
  },

  addBlog: (blog) => {
    set((state) => ({
      blogs: [...state.blogs, blog],
    }));
  },

  editBlog: (blog) => {
    set((state) => ({
      blogs: state.blogs.map((selected) =>
        blog.id == selected.id ? blog : selected
      ),
    }));
  },

  deleteBlog: (id) => {
    set((state) => ({
      blogs: state.blogs.filter((blog) => id != blog.id),
    }));
  },
}));
