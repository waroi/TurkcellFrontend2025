// import { create } from "zustand";
// import { createStore, useStore } from "zustand";

// import { getBlogs, addBlog as addBlogToServer, editBlog } from "./database";

// const initial = await getBlogs();

// const state = createStore((set) => ({
//   blogs: initial,

//   addBlog: (blog) => {
//     console.log("İMDAAAAAAAAAAT");
//     blog.id = Math.random().toString(36).substring(2);

//     addBlogToServer(blog);

//     return set((state) => ({
//       blogs: [...state.blogs, blog],
//     }));
//   },

//   editBlog: (blog) =>
//     set((state) => ({
//       blogs: state.blogs.map((selected) =>
//         blog.id == selected.id ? blog : selected
//       ),
//     })),

//   deleteBlog: (id) =>
//     set((state) => ({
//       blogs: state.blogs.filter((blog) => id != blog.id),
//     })),
// }));

// const useBookStore = () => useStore(state);

// export default useBookStore;

//////////////////////////////////////////////////////

import { create } from "zustand";
import { getBlogs, addBlog as addBlogToServer, editBlog } from "./database";
const useBlogStore2 = create((set) => ({
  blogs: [],
  fetchBlogs: async () => {
    const blogs = await getBlogs();
    set({ blogs });
  },
  addBlog: (blog) =>
    set((state) => {
      blog.id = Math.random().toString(36).substring(2);
      addBlogToServer(blog);
      return { blogs: [...state.blogs, blog] };
    }),
  editBlog: (blog) =>
    set((state) => ({
      blogs: state.blogs.map((selected) =>
        blog.id === selected.id ? blog : selected
      ),
    })),
  deleteBlog: (id) =>
    set((state) => ({
      blogs: state.blogs.filter((blog) => id !== blog.id),
    })),
}));

export default useBlogStore2;
