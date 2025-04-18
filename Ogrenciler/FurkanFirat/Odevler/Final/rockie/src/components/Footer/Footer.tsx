'use client';

import { useTheme } from '@/context/ThemeContext';
import FooterColumn from './FooterColumn';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const t = useTranslations('footer');

  return (
    <footer
      className={`${
        isDark ? 'bg-dark text-white' : 'bg-surface-main text-on-surface'
      } pt-64`}
    >
      <div className='container d-flex flex-column flex-lg-row justify-content-between gap-40'>
        <div>
          <div className='d-flex align-items-center gap-8 mb-16'>
            <Image src='/logo.svg' alt='Rocket' width={32} height={32} />
            <h4 className='fw-bold fs-20'>Rocket</h4>
          </div>
          <p className='fw-semibold mb-8'>{t('contact-us')}</p>
          <p className='text-secondary2 fs-14 mb-4'>+98 902 353 2926</p>
          <p className='text-secondary2 fs-14 mb-4'>
            sinahosseini379@gmail.com
          </p>
          <p className='text-secondary2 fs-14'>
            {isDark
              ? 'Free For All Of The World People'
              : 'Copyright © 2022 Free For World People'}
          </p>
        </div>

        <div className='row w-100 mt-40 mt-lg-0'>
          <FooterColumn
            title='footer.products'
            links={[
              'footer.spot',
              'footer.inverse',
              'footer.usdt',
              'footer.exchange',
              'footer.launchpad',
              'footer.binance',
            ]}
          />
          <FooterColumn
            title='footer.services'
            links={[
              'footer.buy',
              'footer.markets',
              'footer.fee',
              'footer.affiliate',
              'footer.referral',
              'footer.api',
            ]}
          />
          <FooterColumn
            title='footer.support'
            links={[
              'footer.learn',
              'footer.help',
              'footer.feedback',
              'footer.request',
              'footer.docs',
              'footer.rules',
            ]}
          />
          <FooterColumn
            title='footer.about'
            links={[
              'footer.aboutus',
              'footer.authenticity',
              'footer.careers',
              'footer.contacts',
              'footer.blog',
            ]}
          />
        </div>
      </div>

      <div className={`${isDark ? 'bg-dark-hover' : 'bg-surface'} mt-64 py-24`}>
        <div className='container d-flex flex-column flex-md-row justify-content-between align-items-center gap-16'>
          <p className='text-secondary2 fs-14 m-0'>
            {isDark
              ? 'Copyright © 2022 Free For All Of The World People'
              : 'Copyright © 2022 Free For World People'}
          </p>
          <div className='d-flex gap-16'>
            <a href='#' className='text-secondary2'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='#' className='text-secondary2'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='#' className='text-secondary2'>
              <i className='bi bi-instagram'></i>
            </a>
            <a href='#' className='text-secondary2'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
