'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from './auth/hooks/useAuth';
import HeroSection from './components/Hero/Hero';

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!loading) {
  //     if (user) router.push('/dashboard');
  //   }
  // }, [user, loading, router]);

  if (loading) {
    return <div className='container p-5'>Yükleniyor...</div>;
  }

  return (
    <>
      <HeroSection />
    </>
  )

}