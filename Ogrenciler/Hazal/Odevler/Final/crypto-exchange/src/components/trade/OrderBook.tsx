'use client';

import { useTranslations } from 'next-intl';

type OrderBookEntry = {
  price: number;
  amount: number;
  total: number;
};

export function OrderBook({
  buys,
  sells,
}: {
  buys: OrderBookEntry[];
  sells: OrderBookEntry[];
}) {
  const t = useTranslations('Trade');

  return (
    <div className="order-book">
      <div className="order-book-section">
        <h3>{t('buyOrders')}</h3>
        <div className="order-book-header">
          <span>{t('price')}</span>
          <span>{t('amount')}</span>
          <span>{t('total')}</span>
        </div>
        <div className="order-book-entries buy-orders">
          {buys.map((order, index) => (
            <div key={`buy-${index}`} className="order-book-entry">
              <span className="price">{order.price.toFixed(2)}</span>
              <span>{order.amount.toFixed(4)}</span>
              <span>{order.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="order-book-section">
        <h3>{t('sellOrders')}</h3>
        <div className="order-book-header">
          <span>{t('price')}</span>
          <span>{t('amount')}</span>
          <span>{t('total')}</span>
        </div>
        <div className="order-book-entries sell-orders">
          {sells.map((order, index) => (
            <div key={`sell-${index}`} className="order-book-entry">
              <span className="price">{order.price.toFixed(2)}</span>
              <span>{order.amount.toFixed(4)}</span>
              <span>{order.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}