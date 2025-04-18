import React from 'react';
import styles from './Button.module.scss';

const Button = (props: any) => {
  const {
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
  } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${fullWidth ? styles.fullWidth : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;