import React from 'react';

interface RocketLogoProps {
  size?: number;
  className?: string;
}

const RocketLogo: React.FC<RocketLogoProps> = ({ size = 48, className = '' }) => {
  return (
    <div 
      className={`rocket-logo ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 5.5-5.27 10-10 10z" />
        <path d="M15.96 12a22 22 0 0 1-3.96 3.96" />
        <path d="M6.16 18.44a6 6 0 0 0 1.4 1.4" />
      </svg>
    </div>
  );
};

export default RocketLogo;