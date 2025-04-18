'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchPortfolio } from '@/store/slices/portfolioSlice';
import { PortfolioSummary } from '@/components/pages/Portfolio/PortfolioSummary';
import { PortfolioAssets } from '@/components/pages/Portfolio/PortfolioAssets';
import { PortfolioHistory } from '@/components/pages/Portfolio/PortfolioHistory';

export default function PortfolioPage() {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { assets, loading, error } = useAppSelector((state) => state.portfolio);

  useEffect(() => {
    if (user) {
      dispatch(fetchPortfolio(user.uid));
    }
  }, [user, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="portfolio-page">
      <PortfolioSummary assets={assets} />
      <PortfolioAssets assets={assets} />
      <PortfolioHistory userId={user?.uid} />
    </div>
  );
}