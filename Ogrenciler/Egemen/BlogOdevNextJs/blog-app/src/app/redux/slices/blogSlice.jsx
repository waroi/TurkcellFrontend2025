import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  blogs: [],
  blog: {
    title: "",
    author: "",
    body: "",
    image: "",
    created_at: `${new Date().toJSON().slice(0, 10)}`,
    topic: "",
    userId: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setSearchTermRedux: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchBlogs: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchTerm = searchTerm;
      console.log("search", action.payload);
      console.log("searcht", searchTerm);
      state.blogs = state.blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm) ||
          blog.author.toLowerCase().includes(searchTerm)
      );
    },
    addBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      state.blog = {
        ...state.blog,
        title: "",
        author: "",
        body: "",
        image: "",
        created_at: `${new Date().toJSON().slice(0, 10)}`,
        topic: "",
        userId: "",
      };
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    addAllBlog: (state, action) => {
      state.blogs = action.payload;
    },
    updateBlog: (state) => {
      const blogIndex = state.blogs.findIndex(
        (blog) => blog.id === state.blog.id
      );
      state.blogs[blogIndex] = { ...state.blogs[blogIndex], ...state.blog };
      state.blog = {
        ...state.blog,
        title: "",
        author: "",
        body: "",
        image: "",
        created_at: `${new Date().toJSON().slice(0, 10)}`,
        topic: "",
        userId: "",
      };
    },
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
    setUpdateBlog: (state, action) => {
      state.blog = { ...state.blog, ...action.payload };
    },
    resetBlog: (state) => {
      state.blog = {
        ...state.blog,
        title: "",
        author: "",
        body: "",
        image: "",
        created_at: `${new Date().toJSON().slice(0, 10)}`,
        topic: "",
        userId: "",
      };
    },
  },
});

export const {
  addBlog,
  deleteBlog,
  addAllBlog,
  updateBlog,
  setBlog,
  setUpdateBlog,
  resetBlog,
  searchBlogs,
  setSearchTermRedux,
} = blogSlice.actions;

export default blogSlice.reducer;
