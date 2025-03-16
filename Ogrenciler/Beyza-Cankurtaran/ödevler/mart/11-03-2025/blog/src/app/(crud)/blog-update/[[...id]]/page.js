'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../../firebase/firebaseconfig';
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { useParams } from 'next/navigation';

export default function BlogUpdate() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [detail, setDetail] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    if (
      !title.trim() ||
      !content.trim() ||
      !date.trim() ||
      !detail.trim() ||
      !image.trim() ||
      !author.trim()
    ) {
      alert('Form alanları zorunlu.');
      return;
    }

    setLoading(true);

    try {
      const blogRef = doc(db, 'blogs', id[0]);
      await updateDoc(blogRef, {
        title,
        content,
        date: serverTimestamp(),
        detail,
        image,
        author,
      });
      console.log('Blog güncellendi');
      router.push('/blog-panel');
    } catch (error) {
      console.error('blog update hata:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1 className='mb-4 py-5 text-center'>Güncelleniyor...</h1>;
  }

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 py-4'>Blog Güncelle</h1>
      <div className='mb-3'>
        <label className='form-label'>Başlık</label>
        <input
          type='text'
          className='form-control'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>İçerik</label>
        <textarea
          className='form-control'
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <div className='mb-3'>
        <label className='form-label'>Detay</label>
        <input
          type='text'
          className='form-control'
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Date</label>
        <input
          type='text'
          className='form-control'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Yazar</label>
        <input
          type='text'
          className='form-control'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Resim</label>
        <input
          type='text'
          className='form-control'
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>

      <button className='btn btn-orange' onClick={handleUpdate}>
        Güncelle
      </button>
    </div>
  );
}
