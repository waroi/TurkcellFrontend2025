'use client';

import { usePortfolio } from '@/hooks/usePortfolio';
import { useTranslations } from 'next-intl';
import { Asset } from '@/types/index';

export function AssetList() {
  const { chartData, loading } = usePortfolio();
  const t = useTranslations('Portfolio');

  if (loading) return <div className="loading">{t('loading')}</div>;
  if (chartData.length === 0) return <div className="empty">{t('noAssets')}</div>;

  return (
    <div className="asset-list">
      <h3>{t('yourAssets')}</h3>
      <table>
        <thead>
          <tr>
            <th>{t('asset')}</th>
            <th>{t('amount')}</th>
            <th>{t('avgPrice')}</th>
            <th>{t('currentValue')}</th>
            <th>{t('profitLoss')}</th>
          </tr>
        </thead>
        <tbody>
          {chartData.map((asset: Asset) => (
            <tr key={asset.coinId}>
              <td>{asset.name}</td>
              <td>{asset.amount}</td>
              <td>${asset.buyPrice.toFixed(2)}</td>
              <td>${asset.value.toFixed(2)}</td>
              <td className={asset.profit >= 0 ? 'positive' : 'negative'}>
                ${Math.abs(asset.profit).toFixed(2)} ({asset.profit >= 0 ? '+' : ''}
                {((asset.profit / (asset.value - asset.profit)) * 100)}%)
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}