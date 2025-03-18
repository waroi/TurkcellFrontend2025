'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import BlogCard from '@/app/components/BlogCard'
import { getBlogsByAuthor } from '@/app/services/logServices'
import useTodoStore from '@/app/store'

export default function Page () {
  const { id } = useParams()
  const { blogsByAuthor, setBlogsByAuthor } = useTodoStore()
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsData = await getBlogsByAuthor(id)
        setBlogsByAuthor(blogsData)
      } catch (error) {
        console.error('Bloglar alınırken bir hata oluştu:', error)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div>
      <section className='blog-list'>
        <div className='container mt-5'>
          <div className='d-flex align-items-center gap-2 fs-3 mb-3 px-3'>
            <span>Hoş Geldiniz!</span>
            <span>aw</span>
          </div>
          <div className='row'>
            {blogsByAuthor &&
              blogsByAuthor.map((blog, index) => (
                <div key={index} className='col-12 col-sm-6 '>
                  <BlogCard blog={blog} edit={true}/>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
