'use client'
import styles from './page.module.css'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import useTodoStore from './store'
import BlogCard from './components/BlogCard'
import { BlogService } from './services/blogService'
import app from './firebase/firebase'

export default function Home () {
  const { blogs, setBlogs } = useTodoStore()
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await BlogService.getBlogs()
        setBlogs(blogsData)
      } catch (error) {
        console.error('Bloglar alınırken bir hata oluştu:', error)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className={styles.page}>
      <section className='blog-list'>
        <div className='container mt-5'>
          <div className='d-flex align-items-center gap-2 fs-3 mb-3 px-3'>
            <span>Hoş Geldiniz!</span>
            <span>aw</span>
          </div>
          <div className='row'>
            {blogs &&
              blogs.map((blog, index) => (
                <div key={index} className='col-12 col-sm-6 '>
                  <BlogCard blog={blog} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
