'use client';
import { useEffect } from 'react';
import { useAuth } from '../../../../context/authContext';
import { useBlogUpdate } from '../../../../hooks/useBlogUpdate';
import BlogUpdateForm from './BlogUpdateForm';
import { useRouter } from 'next/navigation';

export default function BlogUpdate() {
  const { isLoggedIn } = useAuth();
  const { formData, handleChange, handleUpdate, loading } = useBlogUpdate();

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn, router]);

  return <BlogUpdateForm formData={formData} handleChange={handleChange} handleUpdate={handleUpdate} loading={loading} />;
}
