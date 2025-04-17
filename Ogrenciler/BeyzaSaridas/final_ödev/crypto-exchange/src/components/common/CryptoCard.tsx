'use client'

import React from 'react';
import { combineClasses, formatCurrency, formatPercentage } from '../../lib/utils';
import CryptoIcon from './CryptoIcon';
import { ArrowUp, ArrowDown, Star } from 'lucide-react';
import './CryptoCard.scss';

interface CryptoCardProps {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change: number;
  image?: string;
  inWatchlist?: boolean;
  onAddToWatchlist?: () => void;
  onRemoveFromWatchlist?: () => void;
  onClick?: () => void;
  className?: string;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  name,
  symbol,
  price,
  change,
  image,
  inWatchlist = false,
  onAddToWatchlist,
  onRemoveFromWatchlist,
  onClick,
  className = ''
}) => {
  const isPositive = change >= 0;
  
  const handleWatchlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWatchlist) {
      if (onRemoveFromWatchlist) {
        onRemoveFromWatchlist();
      }
    } else {
      if (onAddToWatchlist) {
        onAddToWatchlist();
      }
    }
  };
  
  return (
    <div className={combineClasses('crypto-card', className)} onClick={onClick}>
      <div className="crypto-card__main">
        <div className="crypto-card__icon">
          {image ? 
            <img src={image} alt={symbol} className="crypto-card__image" /> : 
            <CryptoIcon symbol={symbol} size={40} />
          }
        </div>
        <div className="crypto-card__info">
          <h3 className="crypto-card__name">{name}</h3>
          <p className="crypto-card__symbol">{symbol.toUpperCase()}</p>
        </div>
      </div>
      <div className="crypto-card__data">
        <div className="crypto-card__price">
          {formatCurrency(price)}
        </div>
        <div className={combineClasses(
          'crypto-card__change',
          isPositive ? 'crypto-card__change--positive' : 'crypto-card__change--negative'
        )}>
          {isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
          {formatPercentage(Math.abs(change))}
        </div>
      </div>
      {(onAddToWatchlist || onRemoveFromWatchlist) && (
        <button 
          className={combineClasses(
            'crypto-card__watchlist',
            inWatchlist ? 'crypto-card__watchlist--active' : ''
          )}
          onClick={handleWatchlistClick}
          aria-label={inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'}
        >
          <Star size={18} className="crypto-card__watchlist-icon" />
        </button>
      )}
    </div>
  );
};

export default CryptoCard;