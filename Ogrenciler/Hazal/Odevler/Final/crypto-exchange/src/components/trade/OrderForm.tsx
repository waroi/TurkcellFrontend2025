'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Label } from '@/components/common/Label';
import { CryptoCurrency } from '@/types/index';

export function OrderForm({ coin }: { coin: CryptoCurrency }) {
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [price, setPrice] = useState('');
  const { addOrder } = useStore();
  const t = useTranslations('Trade');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addOrder({
      coinId: coin.id,
      type: orderType,
      amount: parseFloat(amount),
      price: orderType === 'market' ? coin.current_price : parseFloat(price),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <div className="form-group">
        <Label htmlFor="order-type">{t('orderType')}</Label>
        <div className="order-type-selector">
          <button
            type="button"
            className={orderType === 'market' ? 'active' : ''}
            onClick={() => setOrderType('market')}
          >
            {t('marketOrder')}
          </button>
          <button
            type="button"
            className={orderType === 'limit' ? 'active' : ''}
            onClick={() => setOrderType('limit')}
          >
            {t('limitOrder')}
          </button>
        </div>
      </div>

      <div className="form-group">
        <Label htmlFor="amount">{t('amount')}</Label>
        <Input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          step="any"
          min="0"
          required
        />
      </div>

      {orderType === 'limit' && (
        <div className="form-group">
          <Label htmlFor="price">{t('price')}</Label>
          <Input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="any"
            min="0"
            required
          />
        </div>
      )}

      <Button type="submit" variant="primary">
        {orderType === 'market' ? t('buy') : t('placeOrder')} {coin.symbol.toUpperCase()}
      </Button>
    </form>
  );
}