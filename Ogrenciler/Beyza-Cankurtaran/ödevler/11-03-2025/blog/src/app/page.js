'use client';
import BlogCard from '../component/BlogCard';
import { useSearch } from '@/context/searchContext';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebaseconfig';
import { useState, useEffect } from 'react';
import { Modal } from 'bootstrap';

export default function Home() {
  const { searchQuery } = useSearch();
  const [blogs, setBlogs] = useState([]);
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [newBlog, setNewBlog] = useState({
    author: "",
    date: "",
    title: "",
    detail: "",
    content: "",
    image: ""
  });

  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const unsubscribe = onSnapshot(blogsCollectionRef, (snapshot) => {
      const blogsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    });
    return () => unsubscribe();
  }, []);


  const handleAddBlog = async () => {
    if (!newBlog.title || !newBlog.content) return;
    try {
      await addDoc(blogsCollectionRef, newBlog);
      setNewBlog({ author: "", date: "", title: "", detail: "", content: "", image: "" });
      closeModal("addModal");
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };


  const openModal = (modalId, blog = null) => {
    if (blog) {
      setEditingBlog(blog);
      setNewBlog(blog);
    }
    const modalElement = document.getElementById(modalId);
    const modalInstance = new Modal(modalElement);
    modalInstance.show();
  };

  const closeModal = (modalId) => {
    const modalElement = document.getElementById(modalId);
    const modalInstance = Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  };

  return (
    <>
      <div className='container'>
        <h1 className='text-center mt-2 mb-3'>Bloglarımız</h1>
        <button className="btn btn-primary my-3" onClick={() => openModal("addModal")}>
          Yeni Blog Ekle
        </button>

        <div className='row gy-3 mb-5'>
          {filteredBlogs.map((blog) => (
            <div key={blog.id} className="col-md-4">
              <BlogCard blog={blog} />

            </div>
          ))}
        </div>

        {/* Add Modal */}
        <div className="modal fade" id="addModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Yeni Blog Ekle</h5>
                <button type="button" className="btn-close" onClick={() => closeModal("addModal")}></button>
              </div>
              <div className="modal-body">
                {Object.keys(newBlog).map((key) => (
                  <input
                    key={key}
                    type={key === "date" ? "date" : "text"}
                    className="form-control mb-2"
                    placeholder={key}
                    value={newBlog[key]}
                    onChange={(e) => setNewBlog({ ...newBlog, [key]: e.target.value })}
                  />
                ))}
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={handleAddBlog}>Ekle</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}