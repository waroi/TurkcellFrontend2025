'use client';
import React from 'react';
import PageHeader from '../PageHeader.tsx/PageHeader';
import { useTranslations } from 'next-intl';
import MarketUpdateTable from '../Home/MarketUpdateTable/MarketUpdateTable';
import { useTheme } from '@/context/ThemeContext';

export default function WalletComp() {
  const t = useTranslations('Wallet');
  const { theme } = useTheme();

  return (
    <>
      <PageHeader
        title={t('title')}
        breadcrumbs={[{ label: t('Home'), href: '/' }, { label: t('title') }]}
      />
      <div className='container my-100'>
        <div className='row'>
          {/* left */}
          <div className='col-12 col-lg-2 border-end border-secondary pe-24'>
            <div className='d-flex flex-column align-items-center'>
              <ul className='list-unstyled '>
                <li
                  className={`btn btn-outline-primary w-100 mb-8 text-start  `}
                >
                  <i className='bi bi-person me-2' /> {t('overview')}
                </li>
                <li
                  className={`btn btn-outline-secondary w-100 mb-8 text-start `}
                >
                  {t('buy_crypto')}
                </li>
                <li
                  className={`btn btn-outline-secondary w-100 mb-8 text-start `}
                >
                  {t('sell_crypto')}
                </li>
              </ul>
            </div>
          </div>

          {/* right */}
          <div className='col-12 col-lg-10 ps-48'>
            <div
              className={`row mb-48 p-12 rounded-3 ${
                theme === 'light' ? 'bg-surface' : 'bg-dark'
              }`}
            >
              <div className='col-12 d-flex flex-column flex-sm-row justify-content-between align-items-center align-items-md-center'>
                <div>
                  <h1 className='fs-36 fw-bold '>{t('overview')}</h1>
                  <p className='text-secondary2 fs-16'>{t('total_balance')}</p>
                  <h2 className=' fs-24'>
                    0.79253864 <span className='badge bg-success'>BTC</span>
                  </h2>
                  <p className='text-secondary2'>$12,068.83</p>
                </div>

                <div className='d-flex flex-column gap-12 w-50'>
                  <div className='input-group'>
                    <input
                      type='text'
                      className={`form-control border-0 ${
                        theme === 'light'
                          ? 'bg-surface-main text-dark'
                          : 'bg-dark-hover text-white'
                      }`}
                      placeholder={t('search')}
                    />
                  </div>
                  <button
                    type='button'
                    className='btn btn-primary rounded-pill px-24'
                  >
                    {t('show_balance')}
                  </button>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <MarketUpdateTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
