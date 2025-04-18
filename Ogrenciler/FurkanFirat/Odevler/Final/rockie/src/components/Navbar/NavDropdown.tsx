'use client';

import { useTranslations } from 'next-intl';

type Props = {
  label: string;
};
export default function NavDropdown({ label }: Props) {
  const t = useTranslations('Navbar');

  return (
    <li className='nav-item dropdown'>
      <a
        className='nav-link dropdown-toggle'
        href='#'
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        {t(label)}
      </a>
      <ul className='dropdown-menu'>
        <li>
          <a className='dropdown-item' href='#'>
            Action
          </a>
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Another action
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li>
          <a className='dropdown-item' href='#'>
            Something else here
          </a>
        </li>
      </ul>
    </li>
  );
}
