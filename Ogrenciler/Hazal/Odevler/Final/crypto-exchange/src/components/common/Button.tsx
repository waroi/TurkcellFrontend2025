import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

export function Button({
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
  className = '',
}: {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  const t = useTranslations('Common');
  
  return (
    <button
      type={type}
      className={`btn ${variant} ${className}`}
      disabled={disabled}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {disabled ? t('loading') : children}
    </button>
  );
}