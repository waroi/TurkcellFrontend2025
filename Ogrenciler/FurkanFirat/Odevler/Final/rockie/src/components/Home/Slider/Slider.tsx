'use client';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from '@/context/ThemeContext';

export default function Slider() {
  const t = useTranslations('HomePage.Slider');
  const { theme } = useTheme();

  return (
    <section
      className={`py-64 ${
        theme === 'dark' ? 'bg-dark2 text-white' : 'bg-surface'
      }`}
    >
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7 mb-5'>
            <h1 className='fw-bold mb-24 fs-64'>{t('title')}</h1>
            <p className=' col-lg-10 text-secondary fs-20 mb-48'>
              {t('description')}
            </p>
            <button className='btn btn-primary mb-48 px-20 py-8'>
              {t('getStarted')}
            </button>

            <div>
              <p className='fw-bold mb-20 fs-24'>{t('partners')}</p>
              <div className='d-flex flex-wrap gap-16 justify-content-center'>
                <Image
                  src='/partner-profitwell.svg'
                  alt='ProfitWell'
                  width={100}
                  height={40}
                />
                <Image
                  src='/partner-shipbob.svg'
                  alt='ShipBob'
                  width={100}
                  height={40}
                />
                <Image
                  src='/partner-subbly.svg'
                  alt='Subbly'
                  width={100}
                  height={40}
                />
                <Image
                  src='/partner-demio.svg'
                  alt='Demio'
                  width={100}
                  height={40}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-5 text-center'>
            <Image
              src='/slider-main.svg'
              alt='Rocket'
              width={500}
              height={500}
              className='img-fluid'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
