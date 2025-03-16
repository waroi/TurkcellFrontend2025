'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db } from '../../../../firebase/firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';

export default function CreateBlog() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [detail, setDetail] = useState('');
  const [image, setImage] = useState('');
  const [author, setAuthor] = useState('');

  const handleCreate = async () => {
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

  return (
    <div className='container mt-5'>
      <h1 className='mb-4 py-4'>Yeni Blog Oluştur</h1>
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

      <button className='btn btn-orange' onClick={handleCreate}>
        Blog Oluştur
      </button>
    </div>
  );
}
