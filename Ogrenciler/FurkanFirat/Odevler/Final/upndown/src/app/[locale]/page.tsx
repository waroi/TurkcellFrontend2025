import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <main>
        <Image
          src='/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <button className='btn btn-primary'>sa</button>
        <ol>
          <li>
            <h1>{t('title')}</h1>
          </li>
          <li>
            <Link href='/about'>{t('about')}</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}
