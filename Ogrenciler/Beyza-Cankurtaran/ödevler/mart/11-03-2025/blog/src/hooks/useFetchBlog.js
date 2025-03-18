import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';

export default function useFetchBlog(id) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;

      try {
        const blogRef = doc(db, 'blogs', id);
        const blogSnap = await getDoc(blogRef);

        if (blogSnap.exists()) {
          setBlog({ id: blogSnap.id, ...blogSnap.data() });
        } else {
          setBlog(null);
        }
      } catch (error) {
        console.error('Blog verisi alınırken hata:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return { blog, loading };
}
