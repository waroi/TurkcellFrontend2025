import { PortfolioSummary } from '@/components/portfolio/PortfolioSummary';
import { PortfolioAnalytics } from '@/components/portfolio/PortfolioAnalytics';
import { AssetList } from '@/components/portfolio/AssetList';
import { useTranslations } from 'next-intl';

export default function PortfolioPage() {
  const t = useTranslations('Portfolio');
  
  return (
    <div className="portfolio-page">
      <h1>{t('title')}</h1>
      <PortfolioSummary />
      <PortfolioAnalytics />
      <AssetList />
    </div>
  );
}