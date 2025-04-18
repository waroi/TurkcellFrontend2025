'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageToggleIcon() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'tr' : 'en';

    const linkParts = pathname.split('/');
    linkParts[1] = newLocale;

    const newPath = linkParts.join('/');
    router.replace(newPath);
  };

  return (
    <span className='btn btn-outline-secondary' onClick={toggleLocale}>
      {locale === 'en' ? 'tr' : 'en'}
    </span>
  );
}
