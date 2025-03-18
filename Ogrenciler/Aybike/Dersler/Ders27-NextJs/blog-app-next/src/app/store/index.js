import { create } from 'zustand'

const useTodoStore = create(set => ({
  blogs: [],
  blogsByAuthor: [],
  setBlogs: blogs =>
    set(state => ({
      blogs: blogs
    })),
  setBlogsByAuthor: blogs =>
    set(state => ({
      blogsByAuthor: blogs
    })),
  addBlog: blog =>
    set(state => ({
      blogs: [...state.blogs, blog]
    })),
  removeBlog: id =>
    set(state => ({
      blogs: state.blogs.filter(blog => blog.id !== id)
    }))
}))

export default useTodoStore
