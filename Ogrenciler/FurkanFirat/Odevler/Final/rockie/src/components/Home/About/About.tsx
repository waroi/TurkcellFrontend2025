'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export default function About() {
  const t = useTranslations('HomePage.About');

  return (
    <section className='py-64'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 mb-4 mb-lg-0'>
            <div>
              <Image
                src='/laptop.svg'
                alt='Laptop'
                width={600}
                height={450}
                className='img-fluid w-100'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <h2 className='fw-bold mb-16 fs-48'>{t('title')}</h2>
            <p className='mb-16 fs-16 text-secondary'>{t('description')}</p>

            <div className='d-flex mb-3'>
              <div className='me-8'>
                <i className='bi bi-check-circle-fill text-primary fs-5'></i>
              </div>
              <div>
                <h5 className='fw-bold mb-4 fs-24'>{t('feature1.title')}</h5>
                <p className='text-secondary'>{t('feature1.description')}</p>
              </div>
            </div>

            <div className='d-flex mb-16'>
              <div className='me-8'>
                <i className='bi bi-check-circle-fill text-primary'></i>
              </div>
              <div>
                <h5 className='fw-bold mb-4 fs-24'>{t('feature2.title')}</h5>
                <p className='fs-16 text-secondary'>
                  {t('feature2.description')}
                </p>
              </div>
            </div>

            <a href='#' className='btn btn-primary px-32 py-8 fs-16'>
              {t('button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
