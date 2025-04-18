import React from 'react';
import styles from './Badge.module.scss';

const Badge = (props: any) => {
  const { 
    variant = 'info', 
    children, 
    className = '' 
  } = props;
  
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;