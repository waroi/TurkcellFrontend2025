'use client';

import { usePortfolio } from '@/hooks/usePortfolio';
import { useTranslations } from 'next-intl';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';

export function PortfolioAnalytics() {
  const { chartData, loading } = usePortfolio();
  const t = useTranslations('Portfolio');

  if (loading) return <div className="loading">{t('loading')}</div>;

  return (
    <div className="portfolio-analytics">
      <h3>{t('allocation')}</h3>
      <div className="chart-container">
        <PieChart data={chartData} />
      </div>
      
      <h3>{t('performance')}</h3>
      <div className="chart-container">
        <BarChart data={chartData} />
      </div>
    </div>
  );
}