import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  const t = useTranslations();
  return (
    <div className='col-6 col-md-3 mb-32'>
      <h6 className='fw-bold mb-12 text-secondary2'>{t(title)}</h6>
      <ul className='list-unstyled d-flex flex-column gap-8'>
        {links.map((link) => (
          <li key={link}>
            <Link href='#' className='text-secondary fs-14'>
              {t(link)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
