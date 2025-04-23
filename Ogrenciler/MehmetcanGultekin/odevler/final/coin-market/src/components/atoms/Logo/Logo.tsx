import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss';

const Logo = (props: any) => {
  const { width = 32, height = 32 } = props;
  
  return (
    <Link href="/" className={styles.logo}>
      <Image 
        src="/logo.svg" 
        alt="Coin Market Logo" 
        width={width} 
        height={height} 
        priority
      />
    </Link>
  );
};

export default Logo;