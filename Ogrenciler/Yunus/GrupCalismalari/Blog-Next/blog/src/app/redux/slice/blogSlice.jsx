import { createSlice } from '@reduxjs/toolkit'

export const blogSlice = createSlice({
    name: "blogs",
    initialState: { blogs: [] },
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = [...action.payload]
        },
        addBlog: (state, action) => {
            state.blogs = [...state.blogs, { id: self.crypto.randomUUID(), ...action.payload }]
        },
        removeBlog: (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        }
    }
})

export const { addBlog, removeBlog, setBlogs } = blogSlice.actions
export default blogSlice.reducer