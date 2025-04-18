'use client';
import Image from 'next/image';
export default function Avatar() {
  return (
    <div className='user-avatar'>
      <Image
        src='/avatar.svg'
        alt='User avatar'
        className={`rounded-circle `}
        width={32}
        height={32}
      />
    </div>
  );
}
