"use client";
import {useEffect, useState} from "react";
import {getBlogs, addBlog, updateBlog, deleteBlog} from "../../api/Api";
import {auth, db} from "../../api/firebaseAuth";
import {doc, getDoc} from "firebase/firestore";
import UserBlogCard from "@/components/UserBlogs/UserBlogCard";
import BlogModal from "@/components/UserBlogs/BlogModal";

const UserBlogs = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (!currentUser) return;

      const userRef = doc(db, "users", currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        console.log(userData);
        setUser(userData);

        const allBlogs = await getBlogs();
        if (allBlogs) {
          const userBlogs = allBlogs.filter(
            (blog) => blog.author.name === userData.publisher
          );
          setBlogs(userBlogs);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const openModal = (blog = null) => {
    setCurrentBlog(blog);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentBlog(null);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBlog = {
      title: formData.get("title"),
      content: formData.get("content"),
      image: formData.get("image"),
      author: {name: user.publisher, photo: user.avatar},
      date: new Date().toISOString().split("T")[0],
      reading_time: "5 dk",
      category: formData.get("category"),
    };

    if (currentBlog) {
      await updateBlog(currentBlog.id, newBlog);
      setBlogs(
        blogs.map((blog) =>
          blog.id === currentBlog.id ? {...newBlog, id: currentBlog.id} : blog
        )
      );
    } else {
      const addedBlog = await addBlog(newBlog);
      if (addedBlog) {
        setBlogs([...blogs, addedBlog]);
      }
    }

    closeModal();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold">Kendi Blogların</h2>

      <button className="btn btn-dark mb-3" onClick={() => openModal()}>
        Yeni Blog Ekle
      </button>

      {blogs.length > 0 ? (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {blogs.map((blog) => (
            <UserBlogCard
              key={blog.id}
              blog={blog}
              onEdit={openModal}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p>Henüz blog yazınız bulunmamaktadır.</p>
      )}

      <BlogModal
        isOpen={modalOpen}
        currentBlog={currentBlog}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default UserBlogs;
