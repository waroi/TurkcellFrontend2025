'use client';

import { useAuth } from '@/context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function RegisterForm() {
  const { register, isLoading } = useAuth();
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('Register');

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required(t('errors.required_fullname')),
      email: Yup.string()
        .email(t('errors.invalid_email'))
        .required(t('errors.required_email')),
      password: Yup.string()
        .min(6, t('errors.password_min'))
        .required(t('errors.required_password')),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], t('errors.password_mismatch'))
        .required(t('errors.required_confirm')),
    }),
    onSubmit: async (values) => {
      setError(null);
      try {
        await register(values.fullName, values.email, values.password);
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      }
    },
  });

  return (
    <>
      <div className={`w-100 ${theme === 'light' ? 'bg-surface' : 'bg-dark'}`}>
        <div className='container'>
          <div className='d-flex flex-column flex-md-row justify-content-between align-items-center py-56'>
            <h1 className='fs-48 fw-bold'>{t('title')}</h1>
            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link href='/'>{t('Home')}</Link>
                </li>
                <li
                  className='breadcrumb-item active text-secondary'
                  aria-current='page'
                >
                  {t('title')}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className='container d-flex justify-content-center align-items-center my-100'>
        <div className='w-100' style={{ maxWidth: 480 }}>
          <h1 className='text-center fw-bold mb-16 fs-48'>{t('title')}</h1>
          <p className='text-center text-secondary mb-24'>{t('subtitle')}</p>

          <form
            onSubmit={formik.handleSubmit}
            noValidate
            className='d-flex flex-column gap-16'
          >
            <div>
              <label className='form-label text-secondary'>
                {t('fullname')}
              </label>
              <input
                type='text'
                name='fullName'
                className={`form-control border-0 ${
                  theme === 'light'
                    ? 'bg-surface-main text-secondary2'
                    : 'bg-dark-hover text-secondary'
                }`}
                placeholder={t('fullname_placeholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <div className='text-critical fs-12 mt-4'>
                  {formik.errors.fullName}
                </div>
              )}
            </div>

            <div>
              <label className='form-label text-secondary'>{t('email')}</label>
              <input
                type='email'
                name='email'
                className={`form-control border-0 ${
                  theme === 'light'
                    ? 'bg-surface-main text-secondary2'
                    : 'bg-dark-hover text-secondary'
                }`}
                placeholder={t('email_placeholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className='text-critical fs-12 mt-4'>
                  {formik.errors.email}
                </div>
              )}
            </div>

            <div>
              <label className='form-label text-secondary'>
                {t('password')}
              </label>
              <input
                type='password'
                name='password'
                className={`form-control border-0 ${
                  theme === 'light'
                    ? 'bg-surface-main text-secondary2'
                    : 'bg-dark-hover text-secondary'
                }`}
                placeholder={t('password_placeholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div className='text-critical fs-12 mt-4'>
                  {formik.errors.password}
                </div>
              )}
            </div>

            <div>
              <label className='form-label text-secondary'>
                {t('confirm_password')}
              </label>
              <input
                type='password'
                name='confirmPassword'
                className={`form-control border-0 ${
                  theme === 'light'
                    ? 'bg-surface-main text-secondary2'
                    : 'bg-dark-hover text-secondary'
                }`}
                placeholder={t('confirm_password_placeholder')}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className='text-critical fs-12 mt-4'>
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </div>

            {error && <div className='text-critical fs-14'>{error}</div>}

            <button
              type='submit'
              className='btn btn-primary rounded-pill py-8 mt-12'
              disabled={isLoading}
            >
              {isLoading ? (
                <span
                  className='spinner-border spinner-border-sm text-white'
                  role='status'
                  aria-hidden='true'
                ></span>
              ) : (
                t('submit')
              )}
            </button>
          </form>

          <p className='text-center mt-16 fs-14 text-secondary'>
            {t('already_have_account')}{' '}
            <Link href='/login' className='text-primary fw-semibold'>
              {t('login_link')}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
