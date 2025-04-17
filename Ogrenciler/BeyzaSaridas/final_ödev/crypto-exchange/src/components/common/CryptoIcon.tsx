'use client'

import React from 'react';
import { combineClasses } from '../../lib/utils';
import './CryptoIcon.scss';

interface CryptoIconProps {
  symbol: string;
  size?: number;
  text?: string;
  className?: string;
}

interface IconSvgType {
  [key: string]: React.ReactNode;
}

const CryptoIcon: React.FC<CryptoIconProps> = ({
  symbol,
  size = 24,
  text,
  className = ''
}) => {
  const formattedSymbol = symbol.toLowerCase();

  const iconSvg: IconSvgType = {
    btc: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#F7931A"/>
        <path d="M22.3073 14.1053C22.5717 12.0121 20.9114 10.9912 18.676 10.2839L19.3361 7.89111L17.8046 7.48999L17.1605 9.82541C16.7594 9.72978 16.3491 9.63882 15.9405 9.54855L16.5887 7.19879L15.0586 6.79767L14.3977 9.19048C14.0622 9.11818 13.7328 9.04656 13.4138 8.9707L13.4159 8.96138L11.2636 8.40666L10.8373 9.99848C10.8373 9.99848 11.9365 10.2489 11.9127 10.2607C12.5112 10.4123 12.6165 10.8251 12.6021 11.1512L11.84 13.9139C11.8886 13.9261 11.9504 13.9431 12.0174 13.9725C11.9603 13.9588 11.8994 13.9444 11.8364 13.9306L10.7692 17.8089C10.6988 17.9996 10.5112 18.2881 10.0957 18.1844C10.1097 18.2026 9.01942 17.9162 9.01942 17.9162L8.21484 19.6332L10.2583 20.1594C10.6272 20.2476 10.9887 20.3395 11.3432 20.4261L10.6766 22.8489L12.2061 23.25L12.8662 20.8565C13.2851 20.9635 13.6938 21.0623 14.0936 21.1546L13.4349 23.538L14.9664 23.9391L15.633 21.5195C18.6338 22.0673 20.8643 21.8603 21.8269 19.1604C22.6098 17.009 21.9158 15.7819 20.4348 14.9803C21.5264 14.7473 22.3498 14.0484 22.3073 14.1053ZM18.5823 18.1323C18.0234 20.2835 14.6372 19.2119 13.5447 18.9374L14.4399 15.6955C15.5324 15.9708 19.1647 15.9042 18.5823 18.1323ZM19.1411 14.0765C18.6277 16.0294 15.8095 15.1243 14.9062 14.8972L15.7192 11.9481C16.6225 12.1752 19.674 12.0511 19.1411 14.0765Z" fill="white"/>
      </svg>
    ),
    eth: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#627EEA"/>
        <path d="M16.0006 6.5V13.0667L21.5006 15.5541L16.0006 6.5Z" fill="white" fillOpacity="0.602"/>
        <path d="M16.0006 6.5L10.5 15.5541L16.0006 13.0667V6.5Z" fill="white"/>
        <path d="M16.0006 21.6453V25.4975L21.5047 17.376L16.0006 21.6453Z" fill="white" fillOpacity="0.602"/>
        <path d="M16.0006 25.4975V21.6453L10.5 17.376L16.0006 25.4975Z" fill="white"/>
        <path d="M16.0006 20.3328L21.5006 16.0628L16.0006 13.5781V20.3328Z" fill="white" fillOpacity="0.2"/>
        <path d="M10.5 16.0628L16.0006 20.3328V13.5781L10.5 16.0628Z" fill="white" fillOpacity="0.602"/>
      </svg>
    ),
    ltc: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#BFBBBB"/>
        <path d="M11.5781 16.9876L10.0781 17.6126L10.6781 15.1376L12.2031 14.5001L14.0281 7.80762H18.6281L17.3031 12.5626L18.8781 11.9001L18.3031 14.3876L16.7156 15.0376L15.9031 17.8501H22.0031L21.2031 20.9501H10.9406L11.5781 16.9876Z" fill="white"/>
      </svg>
    ),
    xrp: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#23292F"/>
        <path d="M21.9595 10.0003H24.0002L19.2548 14.7841C17.8147 16.2334 15.4948 16.2334 14.0547 14.7841L9.30933 10.0003H11.35L15.0519 13.7352C15.9417 14.6321 17.3679 14.6321 18.2577 13.7352L21.9595 10.0003Z" fill="white"/>
        <path d="M11.3503 21.9984H9.30957L14.0836 17.1781C15.5236 15.7288 17.8436 15.7288 19.2836 17.1781L24.0577 21.9984H22.0169L18.288 18.227C17.3983 17.3301 15.972 17.3301 15.0822 18.227L11.3503 21.9984Z" fill="white"/>
      </svg>
    ),
    doge: (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="16" fill="#C2A633"/>
        <path d="M13.2482 22.0828H17.4698C17.4698 22.0828 17.4896 22.0828 17.5083 22.0828C20.485 22.0828 22.8991 19.6687 22.8991 16.6909C22.8991 13.7142 20.485 11.3001 17.5083 11.3001C17.4896 11.3001 17.4698 11.3001 17.4501 11.3001H13.2482V16.2253H12.1001V18.031H13.2482V22.0828ZM15.1728 13.2062H17.371C17.3897 13.2062 17.4095 13.2062 17.4292 13.2062C19.4192 13.2062 21.0119 14.7988 21.0119 16.79C21.0119 18.78 19.4192 20.3727 17.4292 20.3727C17.4095 20.3727 17.3897 20.3727 17.371 20.3727H15.1728V18.0508H16.9174V16.2253H15.1728V13.2062Z" fill="white"/>
      </svg>
    ),

  };

  const renderIcon = () => {
    if (iconSvg[formattedSymbol]) {
      return iconSvg[formattedSymbol];
    }

    return (
      <div className="crypto-icon__default" style={{ width: size, height: size }}>
        {symbol.slice(0, 3).toUpperCase()}
      </div>
    );
  };

  return (
    <div className={combineClasses('crypto-icon', className)} style={{ width: size, height: size }}>
      {renderIcon()}
      {text && <span className="crypto-icon__text">{text}</span>}
    </div>
  );
};

export default CryptoIcon;