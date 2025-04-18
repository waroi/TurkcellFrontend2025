'use client';

import { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { profileSchema } from '../../../shemas/profileShema';
import { useTranslations } from 'next-intl';
import { changePassword } from '@/lib/fireauth';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import ProfileHeader from '@/components/molecules/ProfileHeader';
import { UserData, PasswordChangeValues } from '../../../types/route';
import Navbar from '../../../components/Navbar';

const Profile = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const t = useTranslations();

    useEffect(() => {
        const fetchUserData = async () => {
            const currentUser = auth.currentUser;
            if (!currentUser) return;

            const docRef = doc(db, 'users', currentUser.uid);
            const snap = await getDoc(docRef);

            if (snap.exists()) {
                setUserData({
                    ...snap.data(),
                    email: currentUser.email ?? '',
                } as UserData);
            }
        };

        fetchUserData();
    }, []);

    const handleChangePassword = async (
        values: PasswordChangeValues,
        { resetForm }: FormikHelpers<PasswordChangeValues>
    ) => {
        setError('');
        setSuccess('');

        const user = auth.currentUser;
        if (!user || !user.email) return setError('Kullanıcı oturumu bulunamadı');

        try {
            await changePassword(user.email, values.currentPassword, values.newPassword);
            setSuccess(t('password_update_success'));
            resetForm();
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Bilinmeyen bir hata oluştu.');
            }
        }
    };

    if (!userData) return <p>Loading...</p>;

    return (
        <section className='mb-3'>
            <Navbar />
            <PageContainer bgColor="bg-surface">
                <ProfileHeader />
            </PageContainer>

            <div className="container">
                <div className="row">
                    {/* Sol Menü */}
                    <div className="col-md-3">
                        <div className="rounded-4 px-4">
                            <div className="text-center mb-3">
                                <div className="avatar bg-secondary rounded-circle mx-auto" style={{ width: 80, height: 80 }}></div>
                                <p className="fw-semibold mt-2">{userData.email}</p>
                            </div>
                            <ul className="list-group list-group-flush gap-3 fw-bold">
                                <li className="list-group-item border-0 ps-4 bg-primary rounded-5 text-white">
                                    <i className="fa-regular fa-user fs-3"></i> {t('user_profile')}
                                </li>
                                <li className="list-group-item border-0 ps-4">
                                    <i className="fa-regular fa-object-ungroup text-primary fs-3"></i> {t('referrals')}
                                </li>
                                <li className="list-group-item border-0 ps-4">
                                    <i className="fa-regular fa-life-ring text-primary fs-3"></i> {t('api_keys')}
                                </li>
                                <li className="list-group-item border-0 ps-4">
                                    <i className="fa-solid fa-clock-rotate-left text-primary fs-3"></i> {t('login_history')}
                                </li>
                                <li className="list-group-item border-0 ps-4">
                                    <i className="fa-solid fa-barcode text-primary fs-3"></i> {t('two_fa')}
                                </li>
                                <li className="list-group-item border-0 ps-4">
                                    <i className="fa-solid fa-unlock-keyhole text-primary fs-3"></i> {t('change_password')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Sağ İçerik */}
                    <div className="col-md-9 border-start ps-4">
                        <div className="rounded-4 p-4">
                            <h1 className="mb-4">{t('user_profile')}</h1>
                            <h4 className='mb-4'>{t('profile_information')}</h4>

                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <label>{t('username')}</label>
                                    <input className="form-control" value={userData.nickname || ''} disabled />
                                </div>
                                <div className="col-md-6">
                                    <label>{t('user_email')}</label>
                                    <input className="form-control" value={userData.email || ''} disabled />
                                </div>
                                <div className="col-md-6">
                                    <label>{t('country')}</label>
                                    <input className="form-control" value={userData.country || ''} disabled />
                                </div>
                            </div>

                            <Formik
                                initialValues={{
                                    currentPassword: '',
                                    newPassword: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={profileSchema(t)}
                                onSubmit={handleChangePassword}
                            >
                                <Form className="row g-3">
                                    <div className="col-md-12">
                                        <label>{t('current_password')}</label>
                                        <Field name="currentPassword" type="password" className="form-control" />
                                        <ErrorMessage name="currentPassword" component="div" className="text-danger" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>{t('new_password')}</label>
                                        <Field name="newPassword" type="password" className="form-control" />
                                        <ErrorMessage name="newPassword" component="div" className="text-danger" />
                                    </div>
                                    <div className="col-md-6">
                                        <label>{t('confirm_password')}</label>
                                        <Field name="confirmPassword" type="password" className="form-control" />
                                        <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
                                    </div>

                                    {/* Features */}
                                    <div className="container mt-5">
                                        <h4>{t('features')}</h4>
                                        <div className="row mt-4">
                                            <div className="col-md-6">
                                                <h5 className="fw-semibold">{t('level1')}</h5>
                                                <hr />
                                                <ul className="list-unstyled">
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span>{t('deposit_assets')}</span>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" checked disabled />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span>{t('withdraw_assets')}</span>
                                                        <span className="text-muted">{t('withdraw_enabled')}</span>
                                                    </li>
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span>{t('card_purchases')}</span>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" checked disabled />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span>{t('bank_deposit')}</span>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" checked disabled />
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-md-6">
                                                <h5 className="fw-semibold">{t('level2')}</h5>
                                                <hr />
                                                <ul className="list-unstyled">
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span>{t('fiat_spot_wallet')}</span>
                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" checked disabled />
                                                        </div>
                                                    </li>
                                                    <li className="mb-3 d-flex justify-content-between align-items-center">
                                                        <span><strong>{t('margin_wallet')}</strong></span>
                                                        <span className="text-muted">{t('margin_enabled')}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary rounded-5 py-2 px-3 text-white mt-3">
                                            {t('change_password')}
                                        </button>
                                        {error && <p className="text-danger mt-2">{error}</p>}
                                        {success && <p className="text-success mt-2">{success}</p>}
                                    </div>
                                </Form>
                            </Formik>
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

export default Profile;
