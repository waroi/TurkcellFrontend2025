'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { signIn } from '../../../lib/fireauth';
import { useRouter } from 'next/navigation';
import { loginSchema } from '../../../shemas/loginShema';
import PageContainer from '@/components/PageContainer';
import LoginHeader from '@/components/molecules/LoginHeader';
import Link from 'next/link';
import Image from 'next/image';
import EarnUp from '@/components/molecules/EarnUp';
import Navbar from '../../../components/Navbar';

type LoginValues = {
  email: string;
  password: string;
};

const Login = () => {
  const t = useTranslations();
  const [firebaseError, setFirebaseError] = useState('');
  const router = useRouter();

  const formik = useFormik<LoginValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setFirebaseError('');
      try {
        await signIn(values.email, values.password);
        router.push('/');
      } catch (error) {
        if (error instanceof Error) {
          setFirebaseError(error.message);
        } else {
          setFirebaseError('Bilinmeyen bir hata oluştu.');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      formik.setFieldValue('email', savedEmail);
      localStorage.removeItem('userEmail');
    }
  }, [formik]);

  return (
    <section>
      <Navbar />
      <PageContainer bgColor="bg-surface">
        <LoginHeader />
      </PageContainer>

      <div className="container mb-7">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="text-center mb-4">
              <h3 className="fw-bold">{t('login_title')}</h3>
              <p>{t('login_subtitle')}</p>
              <div className="bg-light rounded-pill py-1 px-3 d-inline-block mb-3">
                <span className="text-success fw-semibold bg-success bg-opacity-10 px-3 py-2 rounded-5">https://accounts.rockie.com/login</span>
              </div>

              <div className="d-flex justify-content-center gap-3 mb-3">
                <button className="btn rounded-5 px-4 text-white btn-primary">
                  Email
                </button>
                <button className="btn rounded-5 px-3 text-secondary border border-secondary">
                  Mobile
                </button>
              </div>
            </div>

            <form onSubmit={formik.handleSubmit} noValidate>
              <div className="mb-3">
                <label className="form-label text-secondary fs-3 mb-4">{t('login_email')}</label>
                <input
                  type="email"
                  name="email"
                  className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                  placeholder={t('login_email')}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="invalid-feedback">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label text-secondary fs-3 mb-4">{t('login_password')}</label>
                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                    placeholder={t('login_password')}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="invalid-feedback d-block ms-2">{formik.errors.password}</div>
                  )}
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">
                    {t('login_remember_me')}
                  </label>
                </div>
                <Link href="#" className="text-danger small">
                  {t('login_forgot_password')}
                </Link>
              </div>

              {firebaseError && <div className="alert alert-danger">{firebaseError}</div>}

              <button type="submit" className="btn btn-primary w-100" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? t('login_logging_in') : t('login_button')}
              </button>
            </form>

            <p className="text-center mt-3">
              {t('login_register_text')}{' '}
              <Link href="/register" className="fw-semibold">
                {t('login_register_link')}
              </Link>
            </p>
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <div className="text-center">
              <Image src="/qr.svg" alt="qr" width={200} height={200} />
              <p className="fw-semibold mt-3">{t('login_qr_code_text')}</p>
              <p className="small">{t('login_qr_code_description')}</p>
            </div>
          </div>
        </div>
      </div>

      <PageContainer bgColor="bg-foto">
        <EarnUp />
      </PageContainer>
    </section>
  );
};

export default Login;
