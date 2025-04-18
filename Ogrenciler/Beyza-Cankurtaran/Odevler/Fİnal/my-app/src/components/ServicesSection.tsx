'use client';

import { Shield, Wallet, Percent, Gift, Zap, Lock, UserCheck, Clock } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../app/context/ThemeContext'; 

const ServicesSection = () => {
  const  t  = useTranslations('common');
  const { theme } = useTheme();

  const services = [
    {
      icon: <Shield className="text-primary" size={32} />,
      title: t('services.safety.title'),
      description: t('services.safety.description'),
    },
    {
      icon: <Wallet className="text-primary" size={32} />,
      title: t('services.deposit.title'),
      description: t('services.deposit.description'),
    },
    {
      icon: <Percent className="text-primary" size={32} />,
      title: t('services.charges.title'),
      description: t('services.charges.description'),
    },
    {
      icon: <Gift className="text-primary" size={32} />,
      title: t('services.bonus.title'),
      description: t('services.bonus.description'),
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: t('services.transactions.title'),
      description: t('services.transactions.description'),
    },
    {
      icon: <Lock className="text-primary" size={32} />,
      title: t('services.encryption.title'),
      description: t('services.encryption.description'),
    },
    {
      icon: <UserCheck className="text-primary" size={32} />,
      title: t('services.kyc.title'),
      description: t('services.kyc.description'),
    },
    {
      icon: <Clock className="text-primary" size={32} />,
      title: t('services.support.title'),
      description: t('services.support.description'),
    },
  ];

  return (
    <section className={`py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-primary">{t('services.heading.badge')}</span>
          <h2 className="display-5 fw-bold mt-2">{t('services.heading.title')}</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            {t('services.heading.description')}
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className={`card border-50 h-100 hover:bg-opacity-75 transition-all ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
                <div className="card-body p-4">
                  <div className="mb-4">{service.icon}</div>
                  <h5 className={`card-title ${theme === 'dark' ? 'text-white' : 'text-dark'}`}>{service.title}</h5>
                  <p className={`card-text ${theme === 'dark' ? 'text-white' : 'text-muted'}`}>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
