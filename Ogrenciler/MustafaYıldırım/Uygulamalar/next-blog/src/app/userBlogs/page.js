"use client";
import { useEffect, useState } from "react";
import { getBlogs, addBlog, updateBlog, deleteBlog } from "../../api/Api";
import PostCard from "../../components/PostCard";
import { auth, db } from "../../api/firebaseAuth";
import { doc, getDoc } from "firebase/firestore";

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

  function openModal(blog = null) {
    setCurrentBlog(blog);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setCurrentBlog(null);
  }

  async function handleDelete(id) {
    await deleteBlog(id);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newBlog = {
      title: formData.get("title"),
      content: formData.get("content"),
      image: formData.get("image"),
      author: { name: user.publisher, photo: user.avatar },
      date: new Date().toISOString().split("T")[0],
      reading_time: "5 dk",
      category: formData.get("category"),
    };

    if (currentBlog) {
      await updateBlog(currentBlog.id, newBlog);
      setBlogs(
        blogs.map((blog) => (blog.id === currentBlog.id ? newBlog : blog))
      );
    } else {
      const addedBlog = await addBlog(newBlog);
      if (addedBlog) {
        setBlogs([...blogs, addedBlog]); // API'nin döndürdüğü blogu ekle
      }
    }

    closeModal();
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center fw-bold">Kendi Blogların</h2>
      <button className="btn btn-dark mb-3" onClick={() => openModal()}>
        Yeni Blog Ekle
      </button>
      {blogs.length > 0 ? (
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {blogs.map((blog) => (
            <div key={blog.id} className="card col-lg-3">
              <PostCard blog={blog} />
              <div className="card-body d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-warning"
                  onClick={() => openModal(blog)}
                >
                  Düzenle
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(blog.id)}
                >
                  Sil
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Henüz blog yazınız bulunmamaktadır.</p>
      )}

      <div
        className={`modal fade ${modalOpen ? "show d-block" : "d-none"}`}
        tabIndex="-1"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {currentBlog ? "Blog Düzenle" : "Yeni Blog Ekle"}
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={closeModal}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Başlık</label>
                  <input
                    className="form-control"
                    name="title"
                    defaultValue={currentBlog?.title || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">İçerik</label>
                  <textarea
                    className="form-control"
                    name="content"
                    defaultValue={currentBlog?.content || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Resim URL</label>
                  <input
                    className="form-control"
                    name="image"
                    defaultValue={currentBlog?.image || ""}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Kategori</label>
                  <input
                    className="form-control"
                    name="category"
                    defaultValue={currentBlog?.category || ""}
                    required
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-success">
                    Kaydet
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Kapat
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-backdrop fade show" onClick={closeModal}></div>
      )}
    </div>
  );
};

export default UserBlogs;
