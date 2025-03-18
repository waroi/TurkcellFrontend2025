import { useRouter } from 'next/navigation';
import { db } from '../../firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export function useCreateBlog() {
  const router = useRouter();

  const createBlog = async ({ title, content, date, detail, image, author }) => {
    if (!title || !content || !date || !detail || !image || !author) {
      alert('Form alanları zorunlu.');
      return;
    }

    try {
      await addDoc(collection(db, 'blogs'), {
        title,
        content,
        date,
        detail,
        image,
        author,
      });
      console.log('Blog oluşturuldu');
      router.push('/blog-panel');
    } catch (error) {
      console.error('create blog hata:', error);
    }
  };

  return { createBlog };
}
