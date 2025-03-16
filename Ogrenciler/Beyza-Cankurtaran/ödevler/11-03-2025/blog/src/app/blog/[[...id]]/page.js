'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebaseconfig';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../globals.css';
import DetailCard from '../../../component/DetailCard';
import { Modal } from 'bootstrap';

export default function BlogDetail({ params }) {
  const [blog, setBlog] = useState(null);
  const [editBlog, setEditBlog] = useState(null);
  const router = useRouter();
  
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const docRef = doc(db, 'blogs', id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setBlog({ id: docSnap.id, ...docSnap.data() });
          } else {
            setBlog(null);
          }
        } catch (error) {
          console.error('Error fetching blog:', error);
        }
      };

      fetchBlog();
    }
  }, [id]);

  const handleDeleteBlog = async () => {
    if (confirm('Bu blogu silmek istediğinize emin misiniz?')) {
      try {
        await deleteDoc(doc(db, 'blogs', id));
        router.push('/');
      } catch (error) {
        console.error('Error deleting document:', error);
      }
    }
  };

  const openEditModal = () => {
    setEditBlog(blog); 
    const modalElement = document.getElementById('editModal');
    const modalInstance = new Modal(modalElement);
    modalInstance.show();
  };

  const closeEditModal = () => {
    const modalElement = document.getElementById('editModal');
    const modalInstance = Modal.getInstance(modalElement);
    if (modalInstance) modalInstance.hide();
  };

  const handleEditBlog = async () => {
    if (!editBlog || !editBlog.title || !editBlog.content) return;
    try {
      const blogDocRef = doc(db, 'blogs', editBlog.id);
      await updateDoc(blogDocRef, editBlog);
      setBlog(editBlog);
      closeEditModal();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  if (!blog) {
    return (
      <div className="container my-5 text-center">
        <div className="alert alert-warning py-4">
          <h1 className="display-5">Blog Bulunamadı!</h1>
          <p className="lead mt-3">
            The requested blog post could not be found.
          </p>
          <button className="btn btn-outline-warning mt-3" onClick={() => router.push('/')}>
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5 blog-detail">
      <DetailCard blog={blog} />
      
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-warning me-2" onClick={openEditModal}>
          Düzenle
        </button>
        <button className="btn btn-danger" onClick={handleDeleteBlog}>
          Sil
        </button>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Blogu Düzenle</h5>
              <button type="button" className="btn-close" onClick={closeEditModal}></button>
            </div>
            <div className="modal-body">
              {editBlog &&
                Object.keys(editBlog).map((key) => (
                  <input
                    key={key}
                    type={key === 'date' ? 'date' : 'text'}
                    className="form-control mb-2"
                    placeholder={key}
                    value={editBlog[key]}
                    onChange={(e) => setEditBlog({ ...editBlog, [key]: e.target.value })}
                  />
                ))}
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" onClick={handleEditBlog}>
                Güncelle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
