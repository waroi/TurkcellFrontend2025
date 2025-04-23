'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const pathname = usePathname();
  const t = useTranslations('Common');

  const switchLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="language-switcher">
      <Link href={switchLanguage('en')} locale="en">
        {t('english')}
      </Link>
      <span> | </span>
      <Link href={switchLanguage('tr')} locale="tr">
        {t('turkish')}
      </Link>
    </div>
  );
}