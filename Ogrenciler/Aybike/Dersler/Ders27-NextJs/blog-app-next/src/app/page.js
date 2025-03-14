'use client'
import { BlogService } from '@/services/blogService'
import styles from './page.module.css'
import BlogCard from '@/components/BlogCard'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Home () {
  const { data: session } = useSession();
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
      <main className={styles.main}>
        <section className='blog-list'>
          <h1>Hoş Geldiniz!{session?.user.email}</h1>
          <div className='row'>
            {blogs &&
              blogs.map(blog => (
                <div key={blog.id} className='col-12 col-sm-6 '>
                  <BlogCard blog={blog} />
                </div>
              ))}
          </div>
        </section>
      </main>
    </div>
  )
}
