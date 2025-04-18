'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { registerUser } from '../../../lib/fireauth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { useTranslations } from 'next-intl';
import { registerSchema } from '../../../shemas/registerSchema';
import Link from 'next/link';
import RegisterHeader from '@/components/molecules/RegisterHeader';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import { useRouter } from 'next/navigation';
import { RegisterFormValues } from "../../../types/forms";
import Navbar from '../../../components/Navbar';

const Register = () => {
  const t = useTranslations();
  const router = useRouter();
  const [firebaseError, setFirebaseError] = useState('');
  const [success, setSuccess] = useState('');

  const initialValues: RegisterFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    country: 'Turkey (+90)',
    phone: '',
    uidCode: '',
  };

  const handleSubmit = async (values: RegisterFormValues) => {
    setFirebaseError('');
    setSuccess('');

    try {
      const userCredential = await registerUser(values.email, values.password);

      if (!userCredential || !userCredential.uid) {
        throw new Error(t('register_error_message'));
      }

      await setDoc(doc(db, 'users', userCredential.uid), {
        uid: userCredential.uid,
        email: values.email,
        nickname: values.nickname,
        phone: values.phone,
        country: values.country,
        inviteCode: values.uidCode,
        wallet: {},
        balance: 1000,
      });

      localStorage.setItem('userEmail', values.email);
      setSuccess(t('register_success_message'));
      router.push('/');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setFirebaseError(error.message || t('register_error_message'));
      } else {
        setFirebaseError(t('register_error_message'));
      }
      console.error('Kayıt hatası:', error);
    }
  };

  return (
    <section className="pb-5">
      <Navbar />
      <PageContainer bgColor="bg-surface">
        <RegisterHeader />
      </PageContainer>

      <div className="container">
        <h2 className="text-center fw-bold mb-4 fs-1">{t('register_title')}</h2>

        <div className="row justify-content-center">
          <div className="col-lg-6">
            <p className="mb-1 text-center text-secondary fs-3 mb-4">{t('register_subtitle')}</p>

            <div className="d-flex justify-content-center gap-3 mb-3">
              <button className="btn rounded-5 px-4 text-white btn-primary">Email</button>
              <button className="btn rounded-5 px-3 text-secondary border border-secondary">Mobile</button>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={registerSchema(t)}
              onSubmit={handleSubmit}
            >
              {() => (
                <Form>
                  <label className="form-label fs-3 text-secondary fw-semibold">{t('register_email')}</label>
                  <div className="mb-3 d-flex gap-2">
                    <Field
                      name="email"
                      type="email"
                      className="form-control"
                      placeholder={t('register_email')}
                    />
                    <button type="button" className="btn btn-primary fw-semibold fs-4 text-white">{t('register_authentication')}</button>
                  </div>
                  <ErrorMessage name="email" component="div" className="text-danger mb-2" />

                  <label className="form-label fs-3 text-secondary fw-semibold">{t('register_password')}</label>
                  <div className="mb-3">
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder={t('register_password')}
                    />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      placeholder={t('register_confirm_password')}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                  </div>

                  <label className="form-label fs-3 text-secondary fw-semibold">{t('register_nickname')}</label>
                  <div className="mb-3">
                    <Field
                      name="nickname"
                      type="text"
                      className="form-control"
                      placeholder={t('register_nickname')}
                    />
                    <ErrorMessage name="nickname" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <Field name="country" as="select" className="form-select">
                      <option>Turkey (+90)</option>
                      <option>USA (+1)</option>
                      <option>United Kingdom (+44)</option>
                      <option>Germany (+49)</option>
                      <option>France (+33)</option>
                      <option>Italy (+39)</option>
                      <option>Spain (+34)</option>
                      <option>Netherlands (+31)</option>
                      <option>Sweden (+46)</option>
                      <option>Norway (+47)</option>
                      <option>Denmark (+45)</option>
                      <option>Finland (+358)</option>
                      <option>Poland (+48)</option>
                      <option>Greece (+30)</option>
                      <option>Russia (+7)</option>
                      <option>Ukraine (+380)</option>
                      <option>India (+91)</option>
                      <option>Pakistan (+92)</option>
                      <option>South Korea (+82)</option>
                      <option>Japan (+81)</option>
                      <option>China (+86)</option>
                      <option>Saudi Arabia (+966)</option>
                      <option>United Arab Emirates (+971)</option>
                      <option>Brazil (+55)</option>
                      <option>Argentina (+54)</option>
                      <option>Canada (+1)</option>
                      <option>Australia (+61)</option>
                      <option>New Zealand (+64)</option>
                      <option>Mexico (+52)</option>
                      <option>South Africa (+27)</option>
                    </Field>
                    <ErrorMessage name="country" component="div" className="text-danger" />
                  </div>

                  <label className="form-label fs-3 text-secondary fw-semibold">{t('register_phone')}</label>
                  <div className="mb-3">
                    <Field
                      name="phone"
                      type="text"
                      className="form-control"
                      placeholder={t('register_phone')}
                    />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>

                  <div className="mb-3">
                    <Field
                      name="uidCode"
                      type="text"
                      className="form-control"
                      placeholder={t('register_uid_code')}
                    />
                  </div>

                  {firebaseError && <p className="text-danger">{firebaseError}</p>}
                  {success && <p className="text-success">{success}</p>}

                  <button type="submit" className="btn btn-primary w-100 fw-semibold fs-4 text-white rounded-5">
                    {t('register_pre_registration')}
                  </button>

                  <p className="text-center mt-3">
                    {t('register_have_account')} <Link href="/login"><b>{t('register_login')}</b></Link>
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <PageContainer bgColor="bg-foto">
        <EarnUp />
      </PageContainer>
    </section>
  );
};

export default Register;
