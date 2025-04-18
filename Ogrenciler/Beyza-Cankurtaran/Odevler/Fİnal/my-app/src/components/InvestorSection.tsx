'use client';
import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTheme } from '../app/context/ThemeContext';
import { useParams } from 'next/navigation';

const InvestorSection = () => {
  const t = useTranslations('common');
  const { theme } = useTheme();
  const params = useParams();
  const locale = params.locale || 'en'; 
  const investorLogos = [
    { id: 1, logo: `/${locale}/logos/logo1.svg` },
    { id: 2, logo: `/${locale}/logos/logo2.svg` },
    { id: 3, logo: `/${locale}/logos/logo3.svg` },
    { id: 4, logo: `/${locale}/logos/logo4.svg` },
    { id: 5, logo: `/${locale}/logos/logo5.svg` },
    { id: 6, logo: `/${locale}/logos/logo6.svg` },
  ];

  return (
    <section className={`py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray text-dark'}`}>
      <div className="container">
        <h2 className={`text-center mb-5 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>
          {t('investors.title')}
        </h2>
        <div className="row align-items-center justify-content-center g-4">
          {investorLogos.map((investor) => (
            <div key={investor.id} className="col-6 col-md-4 col-lg-2">
              <div className="text-center">
                <Image
                  src={investor.logo}
                  alt={t(`investors.names.${investor.id}`)}
                  width={150}
                  height={50}
                  className="img-fluid opacity-75 hover:opacity-100 transition-opacity dark:invert"
                  unoptimized
                  onError={(e) => {
                    console.error(`Failed to load image: ${investor.logo}`);
                    e.currentTarget.src = investor.logo.replace(`/${locale}/`, '/');
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;