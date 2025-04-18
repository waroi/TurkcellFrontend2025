'use client';
import Image from 'next/image';
import Link from 'next/link';
export default function Logo() {
  return (
    <Link href='/' className='navbar-brand'>
      <div className='d-flex align-items-center gap-8 fw-bold'>
        <Image src='/logo.svg' alt='Rocket Logo' width={32} height={32} />
        <span>Rocket</span>
      </div>
    </Link>
  );
}
