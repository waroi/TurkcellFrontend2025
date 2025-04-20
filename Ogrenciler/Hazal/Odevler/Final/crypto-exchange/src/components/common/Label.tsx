import { LabelHTMLAttributes } from 'react';

export function Label({
  className = '',
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
    </label>
  );
}