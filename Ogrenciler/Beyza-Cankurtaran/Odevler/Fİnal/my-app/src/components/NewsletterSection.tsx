'use client';

import React, { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../app/context/ThemeContext';
const NewsletterSection: React.FC = () => {
  const  t  = useTranslations('common');
  const [email, setEmail] = useState<string>('');
  const { theme } = useTheme();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <div className={`transition-colors duration-500${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
      <div className="position-relative bg-primary text-white dark:text-white rounded-4 px-5 py-4 mx-auto my-5" style={{ maxWidth: '1000px' }}>
        <div className="position-absolute top-0 end-0 pe-4 pt-2 opacity-25" style={{ fontSize: '10rem', zIndex: 0 }}>
          <strong>B</strong>
        </div>

        <div className="row align-items-center position-relative z-1">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold mb-2">{t('newsletter.title')}</h2>
            <p className="mb-0">{t('newsletter.description')}</p>
          </div>

          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row align-items-center gap-2">
              <input
                type="email"
                className="form-control rounded-pill px-4 py-2 bg-white dark:bg-zinc-900 text-black dark:text-white border border-gray-300 dark:border-gray-600"
                placeholder={t('newsletter.emailPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-light text-primary dark:bg-white dark:text-primary rounded-pill px-4 py-2 fw-semibold">
                {t('newsletter.subscribeButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
