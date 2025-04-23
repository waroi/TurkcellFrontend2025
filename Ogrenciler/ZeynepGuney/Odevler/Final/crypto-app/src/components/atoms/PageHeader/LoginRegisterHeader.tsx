'use client';

import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import styles from './LoginRegisterHeader.module.scss';

const LoginRegisterHeader = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const pathname = usePathname();

  const isLogin = pathname === '/login';
  const isRegister = pathname === '/register';
  const isProfile = pathname.startsWith('/profile');


  const title = isLogin
    ? t('LoginRegisterHeader.loginTitle', 'Login')
    : isRegister
    ? t('LoginRegisterHeader.registerTitle', 'Register')
    : isProfile
    ? t('LoginRegisterHeader.profileTitle', 'User Profile')
    : '';

  const breadcrumb = isLogin
    ? t('LoginRegisterHeader.loginBreadcrumb', 'Home / Login')
    : isRegister
    ? t('LoginRegisterHeader.registerBreadcrumb', 'Home / Register')
    : isProfile
    ? t('LoginRegisterHeader.profileBreadcrumb', 'Home / User')
    : '';

  return (
    <div className={`${styles.loginHeader} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.loginContainer}>
        <div className={styles.loginTitle}>
          <h2>{title}</h2>
          <p>{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterHeader;
