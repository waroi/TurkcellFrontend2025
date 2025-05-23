import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  user: {}
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
    addBlog: (state, action) => {
      state.blogs.push({ id: crypto.randomUUID(), ...action.payload });
    },
    removeBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    updateBlog: (state, action) => {
      const index = state.blogs.findIndex(
        (blog) => blog.id === action.payload.id
      )
      if (index !== -1) {
        state.blogs[index] = {
          ...state.blogs[index],
          ...action.payload.newBlog,
        }
      }
    },
    setUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    }
  },
})

export const { setBlogs, addBlog, removeBlog, updateBlog, setUser } = blogSlice.actions;

export default blogSlice.reducer;
