'use client';

import { useStore } from '@/store/useStore';
import { useTranslations } from 'next-intl';

const currencies = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'TRY', symbol: '₺', name: 'Turkish Lira' },
];

export function CurrencySelector() {
  const currentCurrency = useStore((state) => state.currentCurrency);
  const setCurrentCurrency = useStore((state) => state.setCurrentCurrency);
  const t = useTranslations('Common');

  return (
    <div className="currency-selector">
      <label htmlFor="currency-select">{t('currency')}: </label>
      <select
        id="currency-select"
        value={currentCurrency}
        onChange={(e) => setCurrentCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.code} - {currency.name}
          </option>
        ))}
      </select>
    </div>
  );
}