'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Cookie from 'js-cookie';

const LanguageSelector: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [locale, setLocale] = useState<string>(currentLocale);

  useEffect(() => {
    const savedLocale = Cookie.get('locale');
    if (savedLocale && savedLocale !== currentLocale) {
      setLocale(savedLocale);
    }
  }, [currentLocale]);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    Cookie.set('locale', newLocale, { expires: 365 });

    const pathWithoutLocale = pathname.replace(/^\/(en|tr)/, ''); 
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    
    router.replace(newPath);
  };

  return (
    <div className="d-flex gap-2">
      <button
        className="btn btn-outline-secondary"
        onClick={() => handleLanguageChange('en')}
      >
        EN
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => handleLanguageChange('tr')}
      >
        TR
      </button>
    </div>
  );
};

export default LanguageSelector;
