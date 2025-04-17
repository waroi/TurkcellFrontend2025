import React from 'react';
import { useFormContext, Controller, FieldValues, Path } from 'react-hook-form';
import './form.scss';

interface FormProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit?: (data: T) => void;
  className?: string;
}

interface FormItemProps {
  children: React.ReactNode;
  className?: string;
}

interface FormLabelProps {
  children: React.ReactNode;
  className?: string;
}

interface FormControlProps {
  children: React.ReactNode;
}

interface FormMessageProps {
  children?: React.ReactNode;
}

interface FormFieldProps<T extends FieldValues> {
  control: any;
  name: Path<T>;
  render: (props: { field: any }) => React.ReactNode;
}

export function Form<T extends FieldValues>({ 
  children, 
  onSubmit, 
  className = '' 
}: FormProps<T>) {
  return (
    <form onSubmit={onSubmit} className={`form ${className}`}>
      {children}
    </form>
  );
}

export function FormItem({ children, className = '' }: FormItemProps) {
  return <div className={`form-item ${className}`}>{children}</div>;
}

export function FormLabel({ children, className = '' }: FormLabelProps) {
  return <label className={`form-label ${className}`}>{children}</label>;
}

export function FormControl({ children }: FormControlProps) {
  return <div className="form-control">{children}</div>;
}

export function FormMessage({ children }: FormMessageProps) {
  return <p className="form-message">{children}</p>;
}

export function FormField<T extends FieldValues>({ 
  control, 
  name, 
  render 
}: FormFieldProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {render({ field })}
          {fieldState.error && (
            <FormMessage>{fieldState.error.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
} 