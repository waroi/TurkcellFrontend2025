'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/authContext';
import { useCreateBlog } from './useCreateBlog';
import BlogForm from './BlogFrom';

export default function CreateBlog() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { createBlog } = useCreateBlog();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  return <BlogForm onSubmit={createBlog} />;
}
