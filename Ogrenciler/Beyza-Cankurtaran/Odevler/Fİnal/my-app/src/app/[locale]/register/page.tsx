'use client';

import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../../services/firebase';
import Navbar from '../../../components/Navbar';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '../../context/ThemeContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../home.css';
import { useState } from 'react';

const RegisterPage = () => {
  const t = useTranslations('common.register');
  const { theme } = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [firebaseError, setFirebaseError] = useState('');

  const validationSchema = Yup.object({
    email: Yup.string().email(t('invalidEmail')).required(t('required')),
    password: Yup.string().min(6, t('passwordShort')).required(t('required')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], t('passwordMismatch'))
      .required(t('required')),
    agree: Yup.boolean().oneOf([true], t('mustAccept'))
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setFirebaseError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: serverTimestamp(),
        firstName: '',
        lastName: '',
        displayName: '',
        phoneNumber: '',
        location: '',
        currency: ''
      });

      router.push('/signin');
    } catch (err) {
      console.error(err);
      setFirebaseError(t('registrationError'));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column flex-md-row vh-100">
        <div className="d-none d-md-flex justify-content-center align-items-center" style={{ width: '60%' }}>
          <Image src="/en/loginKiz.png" alt="Register Illustration" width={600} height={600} className="img-fluid" />
        </div>
        <div
          className={`d-flex flex-column justify-content-center align-items-center px-4 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-dark'}`}
          style={{ width: '100%' }}
        >
          <div style={{ maxWidth: '400px', width: '100%' }}>
            <h3 className="mb-4 text-center">{t('title')}</h3>

            <Formik
              initialValues={{ email: '', password: '', confirmPassword: '', agree: false }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group mb-3">
                    <Field
                      type="email"
                      name="email"
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'} border-secondary`}
                      placeholder={t('emailPlaceholder')}
                    />
                    <ErrorMessage name="email" component="div" className="text-danger small" />
                  </div>

                  <div className="form-group mb-3 position-relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'} border-secondary`}
                      placeholder={t('passwordPlaceholder')}
                    />
                    <ErrorMessage name="password" component="div" className="text-danger small" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                      style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>

                  <div className="form-group mb-3 position-relative">
                    <Field
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      className={`form-control ${theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'} border-secondary`}
                      placeholder={t('confirmPasswordPlaceholder')}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger small" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="btn position-absolute top-50 end-0 translate-middle-y me-2 p-0 border-0 bg-transparent"
                      style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>

                  <div className="form-check mb-3">
                    <Field type="checkbox" name="agree" className="form-check-input" />
                    <label className="form-check-label">
                      {t('agreementText')}{' '}
                      <a href="#" className="text-primary">{t('userAgreement')}</a>,{' '}
                      <a href="#" className="text-primary">{t('privacyPolicy')}</a>,{' '}
                      <a href="#" className="text-primary">{t('cookiePolicy')}</a>.
                    </label>
                    <ErrorMessage name="agree" component="div" className="text-danger small" />
                  </div>

                  {firebaseError && <div className="alert alert-danger py-1">{firebaseError}</div>}

                  <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                    {isSubmitting ? t('registering') : t('register')}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="text-center mt-3">
              {t('alreadyAccount')}{' '}
              <Link href="/signin" className="text-primary">
                {t('loginHere')}
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
                <Image src="/windows.svg" alt="Facebook" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
