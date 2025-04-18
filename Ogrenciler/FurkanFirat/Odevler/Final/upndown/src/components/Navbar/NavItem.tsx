'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface NavItemProps {
  label: string;
  href?: string;
}

export default function NavItem({ label, href = '#' }: NavItemProps) {
  const t = useTranslations('Navbar');

  return (
    <li className='nav-item'>
      <Link href={href} className='nav-link'>
        {t(label)}
      </Link>
    </li>
  );
}
