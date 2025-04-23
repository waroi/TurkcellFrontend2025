'use client';

import { usePortfolio } from '@/hooks/usePortfolio';
import { useTranslations } from 'next-intl';

export function PortfolioSummary() {
  const { portfolioValue, profitLoss, loading } = usePortfolio();
  const t = useTranslations('Portfolio');

  if (loading) return <div className="loading">{t('loading')}</div>;

  return (
    <div className="portfolio-summary">
      <div className="portfolio-value">
        <h3>{t('portfolioValue')}</h3>
        <h2>${portfolioValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
      </div>
      <div className={`profit-loss ${profitLoss >= 0 ? 'positive' : 'negative'}`}>
        {profitLoss >= 0 ? '+' : ''}
        ${Math.abs(profitLoss).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        <span className="percentage">
          ({((profitLoss / (portfolioValue - profitLoss)) * 100 >= 0 ? '+' : '')}
          {((profitLoss / (portfolioValue - profitLoss)) * 100)}%)
        </span>
      </div>
    </div>
  );
}