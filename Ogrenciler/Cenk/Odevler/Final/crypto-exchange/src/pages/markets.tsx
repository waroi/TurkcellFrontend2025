'use client';

import LearnAndEarn from '@/components/sections/LearnAndEarn';
import MarketHero from '@/components/sections/MarketHero';
import MarketTable from '@/components/sections/MarketTable';

export default function MarketsPage() {
  return (
    <>
      <MarketHero />
      <MarketTable />
      <LearnAndEarn />
    </>
  );
}
