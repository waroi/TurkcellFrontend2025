'use client';

import { useState } from 'react';
import Navbar from "../../../components/Navbar";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { useRouter } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import '../home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from '../../context/ThemeContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';    

const LoginPage = () => {
  const t = useTranslations('common.login');
  const { theme } = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email(t('invalidEmail')).required(t('required')),
    password: Yup.string().min(6, t('passwordShort')).required(t('required')),
  });

  const handleLogin = async (values: { email: string; password: string }) => {
    setFirebaseError('');
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
      router.push('/');
    } catch (error) {
      setFirebaseError(t('error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column flex-md-row vh-100">
        <div className="d-none d-md-flex justify-content-center align-items-center" style={{ width: '60%' }}>
          <Image
            src="/en/loginKiz.png"
            alt="Login Illustration"
            width={600}
            height={600}
            className="img-fluid"
          />
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}
          style={{ width: '100%' }}
        >
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <h3 className="mb-4 text-center">{t('title')}</h3>

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group mb-3">
                    <Field
                      type="email"
                      name="email"
                      placeholder={t('emailPlaceholder')}
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'} border-secondary`}
                      disabled={isLoading}
                    />
                    <ErrorMessage name="email" component="div" className="text-danger small mt-1" />
                  </div>

                  <div className="form-group mb-3 position-relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder={t('passwordPlaceholder')}
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'} border-secondary`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                      style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                    <ErrorMessage name="password" component="div" className="text-danger small mt-1" />
                  </div>

                  <div className="mb-3 d-flex justify-content-between text-secondary">
                    <span>{t('scan')}</span>
                    <Link href="/forgot-password" className="text-decoration-none text-primary">
                      {t('forgotPassword')}
                    </Link>
                  </div>

                  {firebaseError && <div className="alert alert-danger py-1">{firebaseError}</div>}

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={isSubmitting || isLoading}
                  >
                    {isLoading ? t('signingIn') : t('signIn')}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="text-center mt-3">
              {t('noAccount')}{' '}
              <Link href="/register" className="text-primary">
                {t('registerHere')}
              </Link>
            </p>

            <div className="text-center my-3 text-secondary">{t('orContinue')}</div>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-outline-light p-2 rounded-circle">
                <Image src="/playstore.svg" alt="Google" width={20} height={20} />
              </button>
              <button className="btn btn-outline-light p-2 rounded-circle">
                <Image src="/apple.svg" alt="Apple" width={20} height={20} />
              </button>
              <button className="btn btn-outline-light p-2 rounded-circle">
                <Image src="/en/windows.svg" alt="Facebook" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
