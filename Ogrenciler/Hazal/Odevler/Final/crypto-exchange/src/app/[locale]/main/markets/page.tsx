import { MarketFilter } from '@/components/markets/MarketFilter';
import { MarketTable } from '@/components/markets/MarketTable';
import { fetchMarketData } from '@/lib/api/market';
import { useTranslations } from 'next-intl';

  
export default async function MarketsPage() {
    const t = useTranslations('Markets');
    const marketData = await fetchMarketData();
  
    const handleSearch = (term: string) => {
      console.log('Search term:', term);
    };
  
    const handleFilterChange = (filter: string) => {
      console.log('Selected filter:', filter);
    };

  return (
    <div className="markets-page">
      <h1 className="page-title">{t('title')}</h1>
      <MarketFilter onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <MarketTable data={marketData} />
    </div>
  );
}