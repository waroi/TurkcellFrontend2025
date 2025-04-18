'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../app/context/ThemeContext'; 

const WindowsIcon = '/en/windows.svg';
const AppleIcon = '/en/apple.svg';
const PlayStoreIcon = '/en/playstore.svg';
const AppStoreIcon = 'en/App_Store.svg';

const TradeAnywhereSection = () => {
  const  t  = useTranslations('common');
  const { theme } = useTheme(); 

  const isDark = theme === 'dark';

  const platforms = [
    {
      iconSrc: WindowsIcon,
      name: t('tradeAnywhere.platforms.windows.name'),
      description: t('tradeAnywhere.platforms.windows.description'),
    },
    {
      iconSrc: AppleIcon,
      name: t('tradeAnywhere.platforms.mac.name'),
      description: t('tradeAnywhere.platforms.mac.description'),
    },
    {
      iconSrc: PlayStoreIcon,
      name: t('tradeAnywhere.platforms.googlePlay.name'),
      description: t('tradeAnywhere.platforms.googlePlay.description'),
    },
    {
      iconSrc: AppStoreIcon,
      name: t('tradeAnywhere.platforms.appStore.name'),
      description: t('tradeAnywhere.platforms.appStore.description'),
    },
  ];

  return (
    <section className={`py-5 ${isDark ? 'bg-black text-white' : 'bg-light text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <div
                className="bg-primary rounded-4 position-absolute"
                style={{
                  width: '100%',
                  height: '100%',
                  top: '40px',
                  left: '40px',
                  zIndex: 0,
                  opacity: 0.1
                }}
              ></div>
              <Image
                src="/trade.png"
                alt={t('tradeAnywhere.image.alt')}
                width={800}
                height={600}
                className="rounded-4 position-relative"
                style={{
                  width: '100%',
                  height: 'auto',
                  zIndex: 1
                }}
              />
            </div>
          </div>
          <div className="col-lg-6 ps-lg-5">
            <span className="text-primary">
              {t('tradeAnywhere.heading.badge')}
            </span>
            <h2 className="display-5 fw-bold mt-2">
              {t('tradeAnywhere.heading.title')}
            </h2>
            <p className="lead mb-5">
              {t('tradeAnywhere.heading.description')}
            </p>

            <div className="row g-4">
              {platforms.map((platform, index) => (
                <div key={index} className="col-6">
                  <div className={`card border-0 h-100 ${isDark ? 'bg-dark text-white' : 'bg-white text-dark'} shadow-sm`}>
                    <div className="card-body d-flex align-items-center p-3">
                      <div className="me-3">
                        <Image
                          src={platform.iconSrc}
                          alt={platform.name}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">{platform.name}</h6>
                        <small>{platform.description}</small>
                      </div>
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

export default TradeAnywhereSection;
