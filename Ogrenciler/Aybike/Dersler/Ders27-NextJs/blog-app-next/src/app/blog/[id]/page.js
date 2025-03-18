'use client'
import { BlogService } from '@/app/services/blogService'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    console.log(id)
    const fetchBlog = async () => {
      try {
        const blogData = await BlogService.getBlogById(parseInt(id))
        setBlog(blogData)
        console.log(blogData)
      } catch (error) {
        console.error('Blog alınırken bir hata oluştu:', error)
      }
    }

    if (id) {
      fetchBlog()
    }
  }, [id])

  if (!blog) {
    return <p>Loading...</p>
  }

  return (
    <div>
      {blog && (
        <div className='detail-container d-flex flex-column align-items-center justify-content-center shadow-lg p-5 m-5'>
          <h1 className='py-3'>{blog.title}</h1>
          {blog.image && <img src={blog.image} alt='Blog Picture' height={500} />}
          <div className='detail-body'>
            <div className='py-5'>
              {Array.isArray(blog.content) ? (
                blog.content.map((content, index) => (
                  <div key={index}>
                    <p>{content}</p>
                  </div>
                ))
              ) : (
                <p>{blog.content}</p>
              )}
            </div>
            <div className='tags'>
              {Array.isArray(blog.tags) && blog.tags.length > 0 ? (
                blog.tags.map(tag => (
                  <span key={tag} className='tag badge me-2'>
                    #{tag}
                  </span>
                ))
              ) : (
                <p>No tags available</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BlogDetail
