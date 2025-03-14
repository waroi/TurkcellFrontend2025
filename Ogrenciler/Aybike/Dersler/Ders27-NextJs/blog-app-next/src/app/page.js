'use client'
import { BlogService } from '@/services/blogService'
import styles from './page.module.css'
import BlogCard from '@/components/BlogCard'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Home () {
  const { data: session } = useSession()
  const [blogs, setBlogs] = useState([])
  console.log(session?.user)
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await BlogService.getBlogs()
        setBlogs(blogsData)
        console.log(blogsData)
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
            <span>{session?.user.email}</span>
          </div>
          <div className='row'>
            {blogs &&
              blogs.map(blog => (
                <div key={blog.id} className='col-12 col-sm-6 '>
                  <BlogCard blog={blog} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
