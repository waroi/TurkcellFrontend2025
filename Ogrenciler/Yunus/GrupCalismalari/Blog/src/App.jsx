import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero'
import Blogs from './Components/Blogs/Blog'
import Navbar from './Components/Navbar'
import EditDeleteBlogModal from './Components/Modal/EditDeleteBlogModal'
import ViewBlogModal from './Components/Modal/ViewBlogModal'
import AddBlogModal from './Components/Modal/AddBlogModal'
import Footer from './Components/Footer'
import { getAllBlogs, addBlogPost, updateBlogPost, deleteBlogPost } from './service/blogService'

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
  const [randomPosts, setRandomPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const fetchAllBlogs = async () => {
    try {
      const data = await getAllBlogs();
      setBlogs(data);

      const shuffled = data.sort(() => 0.5 - Math.random());
      setRandomPosts(shuffled.slice(0, 3));
    } catch (error) {
      console.log("Blog verileri çekilirken hata oluştu:", error);
    }
  }

  const addBlog = async (event) => {
    event.preventDefault()
    try {
      const data = await addBlogPost(blog);
      setBlogs([...blogs, data]);
      setBlog(initialBlogData);

      const modal = document.getElementById('blogModal');
      const bsModal = bootstrap.Modal.getInstance(modal);
      bsModal.hide();
    } catch (error) {
      console.log("Blog eklenirken hata oluştu:", error);
    }
  }

  const handleUpdateBlog = async (id) => {
    try {
      await updateBlogPost(id, activePost);

      const updatedBlogs = blogs.map(blog =>
        blog.id === id ? activePost : blog
      );
      setBlogs(updatedBlogs);

      const modal = document.getElementById('editDeleteModal');
      const bsModal = bootstrap.Modal.getInstance(modal);
      bsModal.hide();
    } catch (error) {
      console.log("Blog güncellenirken hata oluştu:", error);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      try {
        const response = await deleteBlogPost(id);

        if (response.ok) {
          const updatedBlogs = blogs.filter(blog => blog.id !== id);
          setBlogs(updatedBlogs);

          const modal = document.getElementById('editDeleteModal');
          const bsModal = bootstrap.Modal.getInstance(modal);
          bsModal.hide();
        }
      } catch (error) {
        console.log("Blog silinirken hata oluştu:", error);
      }
    }
  };

  const updateBlog = event => setBlog({ ...blog, [event.target.id]: event.target.value })

  const removeTag = index => {
    blog.tags.splice(index, 1)
    setBlog({ ...blog, tags: blog.tags })
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    fetchAllBlogs();

    document.querySelectorAll('.modal').forEach(modalEl => {
      new bootstrap.Modal(modalEl);
    });
  }, [])

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
          updateBlogPost={handleUpdateBlog}
          deleteBlogPost={handleDeleteBlog}
        />
      </div>
      <Footer />
    </>
  )
}

export default App;