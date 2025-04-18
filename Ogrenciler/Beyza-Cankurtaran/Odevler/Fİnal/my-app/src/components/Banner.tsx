'use client';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../app/context/ThemeContext';

const Banner = () => {
  const t = useTranslations('common');
  const { theme } = useTheme();

  return (
    <div className={`py-5 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              {t('banner.title1')}
              <br />
              <span className="text-primary">{t('banner.title2')}</span>
            </h1>
            <p className="lead mb-4">
              {t('banner.description')}
            </p>
            <Link href="/register" className="btn btn-primary btn-lg px-4">
              {t('banner.button')}
            </Link>

            <div className="mt-5 d-flex flex-wrap gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="partner-logo">
                  <img
                    src={`/en/logo${i}.png`} 
                    width={120}
                    height={40}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    alt={`logo${i}`}
                  />
                </div>
              ))}
            </div>
          </div>
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
                  opacity: 0.1,
                }}
              ></div>
              <img
                src="en/banner.png" 
                width={800}
                height={600}
                className="rounded-4 position-relative"
                style={{
                  width: '100%',
                  height: 'auto',
                  zIndex: 1,
                }}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
