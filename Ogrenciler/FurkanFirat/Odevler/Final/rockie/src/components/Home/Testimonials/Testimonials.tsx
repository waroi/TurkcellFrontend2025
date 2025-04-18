'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

export default function Testimonials() {
  const t = useTranslations('HomePage.Testimonials');
  const { theme } = useTheme();

  return (
    <section className='py-100'>
      <div className='container'>
        <div className='row align-items-center'>
          {/* Left */}
          <div className='col-lg-5 mb-48 mb-lg-0'>
            <h2 className='fs-48 fw-bold mb-12 '>{t('title')}</h2>
            <h5 className='fs-20 fw-semibold mb-12'>{t('subtitle')}</h5>
            <p className='fs-16 text-secondary mb-24'>{t('description')}</p>

            <div className='d-flex flex-column   gap-12'>
              <div className='d-flex'>
                <div
                  className='rounded-circle bg-secondary me-8'
                  style={{ width: '48px', height: '48px' }}
                ></div>
                <div
                  className='rounded-circle bg-secondary me-8'
                  style={{ width: '48px', height: '48px' }}
                ></div>
                <div
                  className='rounded-circle bg-secondary'
                  style={{ width: '48px', height: '48px' }}
                ></div>
              </div>
              <p className='fs-12 fw-medium  mb-0'>
                <span className='fs-12 text-primary'>30+</span> {t('reviews')}
              </p>
            </div>
          </div>

          {/* right*/}
          <div className='col-lg-7'>
            <div
              className={`${
                theme === 'light' ? 'bg-surface-main' : 'bg-dark-hover'
              }rounded p-32 shadow-sm position-relative`}
            >
              <span className='position-absolute top-0 end-0 fs-48 text-primary pe-16 pt-8'>
                &rdquo;
              </span>
              <p className='fs-20  mb-24'>{t('quote')}</p>

              <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>
                  <div
                    className='rounded-circle bg-secondary me-8'
                    style={{ width: '48px', height: '48px' }}
                  ></div>
                  <div>
                    <p className='mb-0 fw-bold  fs-16'>Johnny Andro</p>
                    <p className='mb-0 text-secondary fs-14'>{t('position')}</p>
                  </div>
                </div>
                <Image
                  src='/partner-shipbob.svg'
                  alt='Logo'
                  width={100}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
