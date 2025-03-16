'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebaseconfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function BlogPanel() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error('blog delete hata:', error);
    }
  };

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 py-4'>Blog Yönetim Paneli</h1>
      <button
        className='btn btn-orange mb-3'
        onClick={() => router.push('blog-create')}
      >
        Yeni Blog Oluştur
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className='table table-bordered table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Başlık</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>
                  <button
                    className='btn btn-success me-2'
                    onClick={() => router.push(`blog-update/${blog.id}`)}
                  >
                    Düzenle
                  </button>
                  <button
                    className='btn btn-danger'
                    onClick={() => handleDelete(blog.id)}
                  >
                    Sil
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
