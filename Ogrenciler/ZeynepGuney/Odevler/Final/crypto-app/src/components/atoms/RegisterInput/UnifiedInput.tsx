'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';
import styles from './UnifiedInput.module.scss';

type Props = {
  method: 'email' | 'mobile';
  email: string;
  phoneNumber: string;
  countryCode: string;
  onEmailChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onCountryCodeChange: (value: string) => void;
  emailLabel?: string;
  phoneLabel?: string;
  isRegisterForm?: boolean;
};

const UnifiedInput: React.FC<Props> = ({
  method,
  email,
  phoneNumber,
  countryCode,
  onEmailChange,
  onPhoneNumberChange,
  onCountryCodeChange,
  emailLabel,
  phoneLabel,
  isRegisterForm, 
}) => {
  const { t } = useTranslation('RegisterForm');
  const { theme } = useTheme();

  return method === 'email' ? (
    <div className={styles.inputGroup}>
      {emailLabel && <label className={`${styles.label} ${theme === 'dark' ? styles.dark : styles.light}`}>{emailLabel}</label>}
      <input
        type="email"
        value={email}
        onChange={(e) => onEmailChange(e.target.value)}
        placeholder={t('LoginForm.email')}
        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
      />
      {isRegisterForm && (
        <span className={styles.authButton}>
          {t('RegisterForm.authButton')}
        </span>
      )}
    </div>
  ) : (
    <div className={styles.inputGroup}>
      {phoneLabel && <label className={`${styles.label} ${theme === 'dark' ? styles.dark : styles.light}`}>{phoneLabel}</label>}

      <select
        value={countryCode}
        onChange={(e) => onCountryCodeChange(e.target.value)}
        className={`${styles.select} ${theme === 'dark' ? styles.dark : styles.light}`}
      >
        <option value="+90">🇹🇷 +90</option>
        <option value="+1">🇺🇸 +1</option>
        <option value="+44">🇬🇧 +44</option>
        <option value="+49">🇩🇪 +49</option>
        <option value="+33">🇫🇷 +33</option>
      </select>

      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => onPhoneNumberChange(e.target.value)}
        placeholder={t('LoginForm.mobile')}
        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
      />
      {isRegisterForm && (
        <span className={styles.authButton}>
          {t('RegisterForm.authButton')}
        </span>
      )}
    </div>
  );
};

export default UnifiedInput;
