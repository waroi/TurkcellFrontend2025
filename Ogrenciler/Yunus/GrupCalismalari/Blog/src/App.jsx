import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Blogs from './Components/Blogs/Blog'
import Navbar from './Components/Navbar'
import EditDeleteBlogModal from './Components/Modal/EditDeleteBlogModal'
import ViewBlogModal from './Components/Modal/ViewBlogModal'
import AddBlogModal from './Components/Modal/AddBlogModal'
import Footer from './Components/Footer'

const initialBlogData = {
  title: '',
  description: '',
  category: '',
  tags: [],
  image_url: '',
  author: '',
  date: new Date().toLocaleDateString('tr-TR')
}

function App() {
  const [blog, setBlog] = useState(initialBlogData)
  const [blogs, setBlogs] = useState([])
  const baseUrl = 'http://localhost:3000/'
  const [randomPosts, setRandomPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const addBlog = async (event) => {
    event.preventDefault()
    await fetch(`${baseUrl}blog_posts`, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => {
        setBlogs([...blogs, data])
        setBlog(initialBlogData)
        const modal = document.getElementById('blogModal')
        const bsModal = bootstrap.Modal.getInstance(modal)
        bsModal.hide()
      })
      .catch(error => console.log(error))
  }

  const updateBlog = event => setBlog({ ...blog, [event.target.id]: event.target.value })

  const removeTag = index => {
    blog.tags.splice(index, 1)
    setBlog({ ...blog, tags: blog.tags })
  }

  useEffect(() => {
    getAllBlogs()

    document.querySelectorAll('.modal').forEach(modalEl => {
      new bootstrap.Modal(modalEl);
    });
  }, [])

  const getAllBlogs = async () => {
    const response = await fetch(`${baseUrl}blog_posts`)
    const data = await response.json()
    setBlogs(data)

    const shuffled = data.sort(() => 0.5 - Math.random());
    setRandomPosts(shuffled.slice(0, 3))
  }

  const updateBlogPost = async (id) => {
    await fetch(`${baseUrl}blog_posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(activePost),
      headers: { "Content-Type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(data => {
        const updatedBlogs = blogs.map(blog =>
          blog.id === id ? activePost : blog
        );
        setBlogs(updatedBlogs);

        const modal = document.getElementById('editDeleteModal');
        const bsModal = bootstrap.Modal.getInstance(modal);
        bsModal.hide();
      })
      .catch(error => console.log(error));
  };

  const deleteBlogPost = async (id) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      await fetch(`${baseUrl}blog_posts/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            const updatedBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(updatedBlogs);

            const modal = document.getElementById('editDeleteModal');
            const bsModal = bootstrap.Modal.getInstance(modal);
            bsModal.hide();
          }
        })
        .catch(error => console.log(error));
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase())
    : blogs;


  return (
    <>
      <Navbar selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      <div className="container mt-5">
        <AddBlogModal
          setBlog={setBlog}
          blog={blog}
          updateBlog={updateBlog}
          addBlog={addBlog}
          removeTag={removeTag}
        />

        <Hero posts={randomPosts} />
        <Blogs selectedCategory={selectedCategory} blogs={filteredBlogs} setActivePost={setActivePost} />

        <ViewBlogModal activePost={activePost} />
        <EditDeleteBlogModal
          activePost={activePost}
          setActivePost={setActivePost}
          updateBlogPost={updateBlogPost}
          deleteBlogPost={deleteBlogPost}
        />
      </div>
      <Footer />
    </>
  )
}

export default App;
