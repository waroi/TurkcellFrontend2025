import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],

  blog: {
    title: "",
    author: "",
    body: "",
    image: "",
    created_at: "",
    topic: "",
    id: "",
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
      state.blog = {
        ...state.blog,
        title: "",
        author: "",
        body: "",
        image: "",
        created_at: "",
        topic: "",
        id: "",
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
        created_at: "",
        topic: "",
        id: "",
      };
    },
    setblog: (state, action) => {
      state.blog = action.payload;
    },
    setupdateBlog: (state, action) => {
      state.blog = { ...state.blog, ...action.payload };
    },
    resetblog: (state) => {
      state.blog = {
        ...state.blog,
        title: "",
        author: "",
        body: "",
        image: "",
        created_at: "",
        topic: "",
        id: "",
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
} = blogSlice.actions;

export default blogSlice.reducer;
