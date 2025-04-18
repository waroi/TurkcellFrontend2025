'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import React from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

interface PageHeaderProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  const { theme } = useTheme();

  return (
    <div className={`w-100 ${theme === 'light' ? 'bg-surface' : 'bg-dark'}`}>
      <div className='container'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-56'>
          <h1 className='fs-48 fw-bold'>{title}</h1>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              {breadcrumbs.map((item, index) => (
                <li
                  key={index}
                  className={`breadcrumb-item ${
                    !item.href ? 'active text-secondary' : ''
                  }`}
                  aria-current={!item.href ? 'page' : undefined}
                >
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    item.label
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
