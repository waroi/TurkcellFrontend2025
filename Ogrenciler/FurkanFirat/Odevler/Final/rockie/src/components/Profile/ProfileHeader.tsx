import { useTheme } from '@/context/ThemeContext';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ProfileHeader() {
  const { theme } = useTheme();
  const t = useTranslations('Profile');
  return (
    <div className={`w-100 ${theme === 'light' ? 'bg-surface' : 'bg-dark'}`}>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-56'>
          <h1 className='fs-48 fw-bold'>{t('title')}</h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <Link href='/'>{t('home')}</Link>
              </li>
              <li
                className='breadcrumb-item active text-secondary'
                aria-current='page'
              >
                {t('title')}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
