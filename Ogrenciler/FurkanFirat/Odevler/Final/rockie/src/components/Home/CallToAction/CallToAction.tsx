'use client';

import { useTheme } from '@/context/ThemeContext';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function CallToAction() {
  const t = useTranslations('HomePage.CallToAction');
  const { theme } = useTheme();

  return (
    <section className={`py-56 ${theme === 'light' ? 'cta' : 'bg-dark-hover'}`}>
      <div className='container'>
        <div className='row align-items-center justify-content-between'>
          <div className='col-lg-8 mb-24 mb-lg-0'>
            <h2 className='fs-36 fw-bold text-white mb-12'>{t('title')}</h2>
            <p className='fs-16 text-white mb-0'>{t('subtitle')}</p>
          </div>

          <div className='col-lg-auto'>
            <Link
              href='/register'
              className='btn bg-white text-dark px-32 py-8 rounded-pill fw-semibold fs-16'
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
