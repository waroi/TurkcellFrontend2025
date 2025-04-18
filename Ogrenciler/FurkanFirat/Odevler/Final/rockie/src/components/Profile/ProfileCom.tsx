'use client';

import { useAuth } from '@/context/AuthContext';
import { useTheme } from '@/context/ThemeContext';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase/firebase';
import PageHeader from '../PageHeader.tsx/PageHeader';

export default function ProfileCom() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const t = useTranslations('Profile');

  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile');
  const [fullName, setFullName] = useState('');
  const [nameSuccess, setNameSuccess] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState(false);

  useEffect(() => {
    const fetchFullName = async () => {
      if (!user) return;
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      const data = userSnap.data();
      if (data?.fullName) setFullName(data.fullName);
    };
    fetchFullName();
  }, [user]);

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    try {
      const userRef = doc(db, 'users', user.uid);
      await updateDoc(userRef, { fullName });
      setNameSuccess(true);
    } catch (err) {
      console.error('Name update error:', err);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setPasswordSuccess(false);

    if (newPassword !== confirmPassword) {
      setPasswordError(t('errors.password_mismatch'));
      return;
    }

    if (!user || !user.email) {
      setPasswordError(t('errors.user_not_found'));
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);

      setPasswordSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error: any) {
      console.error(error);
      if (error.code === 'auth/invalid-credential') {
        setPasswordError(t('errors.wrong_password'));
      } else if (error.code === 'auth/weak-password') {
        setPasswordError(t('errors.weak_password'));
      } else {
        setPasswordError(t('errors.generic'));
      }
    }
  };

  return (
    <>
      <PageHeader
        title={t('profile')}
        breadcrumbs={[{ label: t('home'), href: '/' }, { label: t('profile') }]}
      />

      <div className='container my-100'>
        <div className='row'>
          <div className='col-12 col-lg-4 border-end border-secondary pe-lg-5 mb-lg-0'>
            <div className='d-flex flex-column align-items-center'>
              <div
                className='rounded-circle bg-secondary mb-12'
                style={{ width: 96, height: 96 }}
              />
              <h5>{fullName || user?.email?.split('@')[0]}</h5>
              <p className='text-secondary small mb-16'>{user?.email}</p>
              <ul className='list-unstyled w-100'>
                <li
                  className={`btn w-100 mb-8 text-start ${
                    activeTab === 'profile'
                      ? 'btn-outline-primary'
                      : 'btn-outline-secondary'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <i className='bi bi-person me-2' /> {t('profile')}
                </li>
                <li
                  className={`btn w-100 text-start ${
                    activeTab === 'password'
                      ? 'btn-outline-primary'
                      : 'btn-outline-secondary'
                  }`}
                  onClick={() => setActiveTab('password')}
                >
                  <i className='bi bi-lock me-2' /> {t('change_password')}
                </li>
              </ul>
            </div>
          </div>

          <div className='col-12 col-lg-8'>
            {activeTab === 'profile' && (
              <>
                <h2 className='mb-16'>{t('title')}</h2>
                <form onSubmit={handleUpdateName}>
                  <div className='mb-16'>
                    <label className='form-label'>{t('email')}</label>
                    <input
                      type='email'
                      className={`form-control border-0 ${
                        theme === 'light'
                          ? 'bg-surface-main text-secondary2'
                          : 'bg-dark-hover text-secondary'
                      }`}
                      value={user?.email || ''}
                      disabled
                    />
                  </div>
                  <div className='mb-16'>
                    <label className='form-label'>{t('full_name')}</label>
                    <input
                      type='text'
                      className={`form-control border-secondary ${
                        theme === 'light'
                          ? 'bg-surface-main text-secondary2'
                          : 'bg-dark-hover text-secondary'
                      }`}
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    {t('update_name')}
                  </button>
                  {nameSuccess && (
                    <div className='text-success mt-12'>
                      {t('update_name_success')}
                    </div>
                  )}
                </form>
              </>
            )}

            {activeTab === 'password' && (
              <>
                <h2 className='mb-16'>{t('change_password')}</h2>
                <form onSubmit={handleChangePassword}>
                  <div className='mb-16'>
                    <label className='form-label'>
                      {t('current_password')}
                    </label>
                    <input
                      type='password'
                      className={`form-control border-secondary ${
                        theme === 'light'
                          ? 'bg-surface-main text-secondary2'
                          : 'bg-dark-hover text-secondary'
                      }`}
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className='mb-16'>
                    <label className='form-label'>{t('new_password')}</label>
                    <input
                      type='password'
                      className={`form-control border-secondary ${
                        theme === 'light'
                          ? 'bg-surface-main text-secondary2'
                          : 'bg-dark-hover text-secondary'
                      }`}
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className='mb-16'>
                    <label className='form-label'>
                      {t('confirm_new_password')}
                    </label>
                    <input
                      type='password'
                      className={`form-control border-secondary ${
                        theme === 'light'
                          ? 'bg-surface-main text-secondary2'
                          : 'bg-dark-hover text-secondary'
                      }`}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button type='submit' className='btn btn-primary'>
                    {t('change_password')}
                  </button>

                  {passwordError && (
                    <div className='text-danger mt-12'>{passwordError}</div>
                  )}
                  {passwordSuccess && (
                    <div className='text-success mt-12'>
                      {t('password_update_success')}
                    </div>
                  )}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
