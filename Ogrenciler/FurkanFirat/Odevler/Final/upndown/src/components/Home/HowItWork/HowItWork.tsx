'use client';
import { useTheme } from '@/context/ThemeContext';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const steps = [
  {
    step: 'STEP 1',
    title: 'Download',
    imageAlt: 'Download Icon',
    imageSrc: '/step1.svg',
  },
  {
    step: 'STEP 2',
    title: 'Connect Wallet',
    imageAlt: 'Wallet Icon',
    imageSrc: '/step2.svg',
  },
  {
    step: 'STEP 3',
    title: 'Start Trading',
    imageAlt: 'Trading Icon',
    imageSrc: '/step3.svg',
  },
  {
    step: 'STEP 4',
    title: 'Earn Money',
    imageAlt: 'Earn Icon',
    imageSrc: '/step4.svg',
  },
];

export default function HowItWork() {
  const { theme } = useTheme();
  const t = useTranslations('HomePage.HowItWork');

  return (
    <section
      className={`py-100 text-center ${
        theme === 'dark' ? 'bg-dark2 text-white' : 'bg-surface'
      }`}
    >
      <div className='container'>
        <h1 className=' fw-bold mb-12 fs-48'>{t('title')}</h1>
        <p
          className='text-secondary mx-auto fs-20'
          style={{ maxWidth: '600px' }}
        >
          {t('description')}
        </p>
        <div className='row mt-48'>
          {steps.map((step, i) => (
            <div key={i} className='col-12 col-sm-6 col-md-3 mb-48'>
              <div className=' px-12'>
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  width={64}
                  height={64}
                  className='mb-12'
                />
                <p className='fs-12 text-uppercase text-secondary2 small fw-semibold'>
                  {step.step}
                </p>
                <h5 className='fs-16 fw-bold mb-8'>{step.title}</h5>
                <p className='fs-20 text-secondary'>{t('description')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
