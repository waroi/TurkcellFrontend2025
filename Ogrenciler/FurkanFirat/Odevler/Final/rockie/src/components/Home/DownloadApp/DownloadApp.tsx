'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

export default function DownloadApp() {
  const t = useTranslations('HomePage.DownloadApp');
  const { theme } = useTheme();

  return (
    <section
      className={`py-100 ${
        theme === 'dark' ? 'bg-dark2 text-white' : 'bg-surface'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 mb-48 mb-lg-0'>
            <h2 className='fw-bold fs-48 mb-12'>{t('title')}</h2>
            <p className='text-secondary fs-20 mb-24'>{t('subtitle')}</p>

            <div className='d-flex align-items-start mb-16'>
              <i className='bi bi-check-circle-fill text-primary fs-20 me-12'></i>
              <div>
                <h5 className='fs-20 fw-bold mb-4'>
                  {t('features.feature1.title')}
                </h5>
                <p className='text-secondary fs-16 mb-0'>
                  {t('features.feature1.description')}
                </p>
              </div>
            </div>

            <div className='d-flex align-items-start mb-32'>
              <i className='bi bi-check-circle-fill text-primary fs-20 me-12'></i>
              <div>
                <h5 className='fs-20 fw-bold mb-4'>
                  {t('features.feature2.title')}
                </h5>
                <p className='text-secondary fs-16 mb-0'>
                  {t('features.feature2.description')}
                </p>
              </div>
            </div>

            <div className='d-flex gap-12'>
              <Image
                src='/googleplay.svg'
                alt='Google Play'
                width={140}
                height={42}
              />
              <Image
                src='/appstore.svg'
                alt='App Store'
                width={140}
                height={42}
              />
            </div>
          </div>

          <div className='col-lg-6  '>
            <div>
              <Image
                src='/scan.svg'
                alt='App Phone'
                width={300}
                height={600}
                className='img-fluid w-100'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
