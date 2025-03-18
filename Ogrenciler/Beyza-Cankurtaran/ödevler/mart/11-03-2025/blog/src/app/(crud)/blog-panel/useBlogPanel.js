import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebaseconfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export function useBlogPanel() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
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
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error('Blog delete error:', error);
    }
  };

  return { blogs, loading, handleDelete, router };
}
