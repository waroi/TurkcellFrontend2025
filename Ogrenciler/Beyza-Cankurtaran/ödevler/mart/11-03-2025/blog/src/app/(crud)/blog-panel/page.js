'use client';
import { useEffect } from 'react';
import { useAuth } from '../../../context/authContext';
import { useBlogPanel } from './useBlogPanel';
import BlogList from './BlogList';

export default function BlogPanel() {
  const { isLoggedIn } = useAuth();
  const { blogs, loading, handleDelete, router } = useBlogPanel();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  return (
    <div className="container mt-5 vh-100">
      <h1 className="mb-4 py-4">Blog Yönetim Paneli</h1>
      <button className="btn btn-orange mb-3" onClick={() => router.push('blog-create')}>
        Yeni Blog Oluştur
      </button>
      {loading ? <p>Loading...</p> : <BlogList blogs={blogs} onDelete={handleDelete} onEdit={(id) => router.push(`blog-update/${id}`)} />}
    </div>
  );
}

