import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { db } from '../../firebase/firebaseconfig';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import useFetchBlog from './useFetchBlog';

export function useBlogUpdate() {
  const { id } = useParams();
  const router = useRouter();
  const { blog } = useFetchBlog(id[0]);

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    date: '',
    detail: '',
    image: '',
    author: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        date: blog.date || '',
        detail: blog.detail || '',
        image: blog.image || '',
        author: blog.author || '',
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const blogRef = doc(db, 'blogs', id[0]);
      await updateDoc(blogRef, {
        ...formData,
        date: serverTimestamp(),
      });
      console.log('Blog güncellendi');
      router.push('/blog-panel');
    } catch (error) {
      console.error('Blog update hata:', error);
    } finally {
      setLoading(false);
    }
  };

  return { formData, handleChange, handleUpdate, loading };
}
