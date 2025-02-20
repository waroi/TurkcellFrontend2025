import { useEffect, useState } from 'react'
import './App.css'

const initialBlogData = {
  title: '',
  description: '',
  category: '',
  tags: [],
  postUrl: '',
  author: '',
  relaseDate: new Date()
}

function App() {
  const [blog, setBlog] = useState(initialBlogData)
  const [blogs, setBlogs] = useState([])
  const baseUrl = 'http://localhost:3000/'


  const addBlog = async (event) => {
    event.preventDefault()

    await fetch(`${baseUrl}blog_posts`, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => console.log('okay', data))
      .catch(error => console.log(error))

    setBlog(initialBlogData)
  }

  const updateBlog = event => setBlog({ ...blog, [event.target.id]: event.target.value.trim() })

  const removeTag = index => {
    blog.tags.splice(index, 1)
    setBlog({ ...blog, tags: blog.tags })
  }

  useEffect(() => {
    getAllBlogs()
  }, [])

  const getAllBlogs = async () => {
    const response = await fetch(`${baseUrl}blog_posts`)
    const data = await response.json()
    setBlogs(data)
  }

  return (
    <>
      <div className="container">
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#blogModal">
          Launch demo modal
        </button>

        <div className="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="blogModalLabel">Modal title
                </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form onSubmit={addBlog}>
                  <div className="form-floating mb-3">
                    <input type="text" defaultValue={blog.title} onChange={updateBlog} className="form-control" id="title" placeholder="name@example.com" />
                    <label htmlFor="title">Başlık</label>
                  </div>

                  <div className="form-floating mb-3">
                    <textarea className="form-control" onChange={updateBlog} defaultValue={blog.description} placeholder="Bir Açıklama Girin" id="description"></textarea>
                    <label htmlFor="description">Açıklama</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" defaultValue={blog.category} onChange={updateBlog} className="form-control" id="category" placeholder="Kategori" />
                    <label htmlFor="category">Kategori</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" className="form-control mb-2" onKeyUp={(event) => {
                      if (event.key == 'Enter') {
                        setBlog({ ...blog, tags: [...blog.tags, event.target.value] })
                        event.target.value = ''
                      }
                    }} id="tags" placeholder="Etiketler(# ile ayırın)" />
                    <label htmlFor="tags">Etiketler(# ile ayırın)</label>
                    {blog.tags.map((tag, index) => <span key={index} className="badge rounded-pill text-bg-primary" onClick={() => removeTag(index)}>{tag}</span>
                    )}
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" defaultValue={blog.postUrl} onChange={updateBlog} className="form-control" id="postUrl" placeholder="Görsel URL" />
                    <label htmlFor="postUrl">Görsel URL</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="text" defaultValue={blog.author} onChange={updateBlog} className="form-control" id="author" placeholder="Yazar" />
                    <label htmlFor="author">Yazar</label>
                  </div>

                  <div className="modal-footer border-0">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        <div className="row mt-5">

          {blogs.map((blog, index) => {
            return (
              <div key={index} className="col-lg-3 my-3">
                <div className="card h-100">
                  <img src={blog.image_url} className="card-img-top" alt="..." />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">
                      {blog.title}
                    </h5>
                    <p className="card-text">
                      {blog.content}
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            )
          })}


          {/* <div className="col-lg-3">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div> */}



        </div>
      </div >
    </>
  )
}

export default App
