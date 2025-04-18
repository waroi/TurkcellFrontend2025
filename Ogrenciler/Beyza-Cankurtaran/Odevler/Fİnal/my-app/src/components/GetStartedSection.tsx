'use client';

import { UserPlus2, ShieldCheck, Wallet, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../app/context/ThemeContext'; 

const steps = [
  {
    icon: <UserPlus2 className="text-primary" size={32} />,
    title: 'Create an Account',
    description: 'Sign up with your email and mobile in just 5 minutes',
  },
  {
    icon: <ShieldCheck className="text-primary" size={32} />,
    title: 'Verify Bank Account',
    description: 'Verify Your Bank Account in Easy Way',
  },
  {
    icon: <Wallet className="text-primary" size={32} />,
    title: 'Add Funds to Wallet',
    description: 'Quickly add money to your investment wallet',
  },
  {
    icon: <TrendingUp className="text-primary" size={32} />,
    title: 'Start Trading Instantly',
    description: 'Buy & Sell a variety of top coins at the best prices',
  },
];

const GetStartedSection = () => {
  const t = useTranslations('common');
  const { theme } = useTheme();

  return (
    <section className={`py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-gray text-dark'}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <span className="text-primary">{t('getStarted.label')}</span>
            <h2 className="display-4 fw-bold mt-2 mb-4">{t('getStarted.heading')}</h2>
            <p className="text mb-4" style={{ maxWidth: '500px' }}>
            {t('getStarted.description')}
            </p>
            <Link 
              href="/trade" 
              className="d-inline-flex align-items-center text-primary text-decoration-none"
            >{t('getStarted.cta')}
              <div className="ms-2 d-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" 
                style={{ width: '24px', height: '24px' }}
              >
                →
              </div>
            </Link>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {steps.map((step, index) => (
                <div key={index} className="col-md-6">
                  <div className={`card border border-secondary border-opacity-25 rounded-4 h-100 ${
                    theme === 'dark' ? 'bg-black text-white' : 'bg-light text-dark'
                  }`}>
                    <div className="card-body p-4">
                      <div className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10" 
                        style={{ width: '48px', height: '48px' }}
                      >
                        {step.icon}
                      </div>
                      <h5 className="card-title mb-3">
                        {step.title}</h5>
                      <p className={`card-text mb-0 ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
