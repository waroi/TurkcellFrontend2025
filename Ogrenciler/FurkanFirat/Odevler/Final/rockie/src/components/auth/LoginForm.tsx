'use client';

import { useAuth } from '@/context/AuthContext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function LoginForm() {
  const { login, isLoading } = useAuth();
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(null);
  const t = useTranslations('Login');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t('errors.invalid_email'))
        .required(t('errors.required_email')),
      password: Yup.string().required(t('errors.required_password')),
    }),
    onSubmit: async (values) => {
      setError(null);
      try {
        await login(values.email, values.password);
      } catch (err: any) {
        console.log('Login error:', err);
        if (
          err.code === 'auth/invalid-credential' ||
          err.code === 'auth/wrong-password'
        ) {
          setError(t('errors.invalid_credentials'));
        } else {
          setError(t('errors.generic'));
        }
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
                {t('email_label')}
              </label>
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
              <label className='form-label d-flex justify-content-between text-secondary'>
                {t('password_label')}
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

            <div className='d-flex justify-content-between align-items-center fs-14'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='rememberMe'
                />
                <label className='form-check-label' htmlFor='rememberMe'>
                  {t('remember')}
                </label>
              </div>
              <Link href='/forgot-password' className='text-critical fs-12'>
                {t('forgot')}
              </Link>
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
            {t('not_member')}{' '}
            <Link href='/register' className='text-primary fw-semibold'>
              {t('register_link')}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
