'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-light text-dark pt-5 border-top fs-5">
      <div className="container-fluid px-3 px-md-4">
        <div className="row gy-4 text-center text-md-start">
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-3">
              <span style={{ fontSize: '1.5rem' }}>🔷</span>
              <span className="h5 mb-0 text-onsurface fs-32 fw-bold">Rocket</span>
            </div>
            <p className="fw-bold text-onsurface fs-2">{t('contact_title')}</p>
            <p className='text-onsurface fs-4'>+98 902 353 2926</p>
            <p className='text-onsurface fs-4'>Sinahosseini379@Gmail.Com</p>
            <p className="text-muted small text-onsurface fs-4">{t('copyright')}</p>
          </div>

          <div className="col-12 col-md-8">
            <div className="row row-cols-2 row-cols-md-4 g-4">
              <div>
                <h6 className="fw-bold mb-4 text-onsurface">{t('products_title')}</h6>
                <ul className="list-unstyled text-secondary">
                  <li className='mb-3'>{t('products_spot')}</li>
                  <li className='mb-3'>{t('products_inverse')}</li>
                  <li className='mb-3'>{t('products_usdt')}</li>
                  <li className='mb-3'>{t('products_exchange')}</li>
                  <li className='mb-3'>{t('products_launchpad')}</li>
                  <li className='mb-3'>{t('products_binance')}</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold mb-4 text-onsurface">{t('services_title')}</h6>
                <ul className="list-unstyled text-secondary">
                  <li className='mb-3'>{t('services_buy')}</li>
                  <li className='mb-3'>{t('services_markets')}</li>
                  <li className='mb-3'>{t('services_fee')}</li>
                  <li className='mb-3'>{t('services_affiliate')}</li>
                  <li className='mb-3'>{t('services_referral')}</li>
                  <li>{t('services_api')}</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold mb-4 text-onsurface">{t('support_title')}</h6>
                <ul className="list-unstyled text-secondary">
                  <li className='mb-3'>{t('support_learn')}</li>
                  <li className='mb-3'>{t('support_help')}</li>
                  <li className='mb-3'>{t('support_feedback')}</li>
                  <li className='mb-3'>{t('support_submit')}</li>
                  <li className='mb-3'>{t('support_docs')}</li>
                  <li>{t('support_rules')}</li>
                </ul>
              </div>
              <div>
                <h6 className="fw-bold mb-4 text-onsurface">{t('about_title')}</h6>
                <ul className="list-unstyled text-secondary">
                  <li className='mb-3'>{t('about')}</li>
                  <li className='mb-3'>{t('about_auth')}</li>
                  <li className='mb-3'>{t('about_careers')}</li>
                  <li className='mb-3'>{t('about_contacts')}</li>
                  <li>{t('about_blog')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center border-top py-4 mt-4 text-center text-md-start">
          <p className="mb-3 mb-md-0 text-muted small w-100">
            {t('copyright')}
          </p>
          <div className="d-flex justify-content-center justify-content-md-end gap-3 w-100">
            <a href="#">
              <Image src="/facebook.svg" alt="Facebook" width={16} height={16} />
            </a>
            <a href="#">
              <Image src="/twitter.svg" alt="Twitter" width={16} height={16} />
            </a>
            <a href="#">
              <Image src="/instagram.svg" alt="Instagram" width={16} height={16} />
            </a>
            <a href="#">
              <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
