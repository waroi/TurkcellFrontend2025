'use client';

import { useTranslations } from 'next-intl';

export default function WalletButton() {
  const t = useTranslations('Navbar');

  return (
    <button className='btn btn-outline-primary rounded-pill px-12 w-100 '>
      {t('Wallet')}
    </button>
  );
}
