'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { unifiedRegisterSchema } from '@/schemas/authSchema';
import UnifiedInput from '../../atoms/RegisterInput/UnifiedInput';
import styles from './RegisterForm.module.scss';
import { useRouter } from 'next/navigation';
import useAuth from '@/hooks/useAuth';

const RegisterForm = () => {
    const [registerMethod, setRegisterMethod] = useState<'email' | 'mobile'>('email');
    const { t } = useTranslation();
    const { theme } = useTheme();
    const router = useRouter();
    const { register } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const eyeIcon = "/assets/eye.svg";


    const formik = useFormik({
        initialValues: {
            registerMethod: registerMethod,
            name: '',
            nickname: '',
            country: '',
            uidCode: '',
            email: '',
            phoneNumber: '',
            countryCode: '+90',
            password: '',
            confirmPassword: '',
        },
        enableReinitialize: true,
        validationSchema: unifiedRegisterSchema,
        onSubmit: async (values) => {
            try {
                await register({
                    email: values.email,
                    password: values.password,
                    nickname: values.nickname,
                    phoneNumber: values.phoneNumber,
                    countryCode: values.countryCode,
                    uidCode: values.uidCode,
                });
                router.push('/login');
            } catch (error) {
                console.error('Kayıt işlemi sırasında bir hata oluştu:', error);
            }
        }

    });

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountryCode = e.target.value;
        const countryMap: Record<string, string> = {
            '+90': 'Turkey',
            '+82': 'South Korea',
            '+44': 'United Kingdom',
            '+49': 'Germany',
            '+33': 'France',
        };
        formik.setFieldValue('countryCode', selectedCountryCode);
        formik.setFieldValue('country', countryMap[selectedCountryCode] || '');
    };

    const switchMethod = (method: 'email' | 'mobile') => {
        setRegisterMethod(method);
        formik.setFieldValue('registerMethod', method);
    };

    return (
        <form onSubmit={formik.handleSubmit} className={`${styles.registerForm} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.formContent}>
                <div className={styles.leftSide}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>{t('RegisterForm.title')}</h2>
                        <h6 className={styles.content}>{t('RegisterForm.subtitle')}</h6>
                    </div>

                    <div className={styles.toggleButtons}>
                        <button
                            type="button"
                            className={registerMethod === 'email' ? styles.active : ''}
                            onClick={() => switchMethod('email')}
                        >
                            {t('RegisterForm.email')}
                        </button>
                        <button
                            type="button"
                            className={registerMethod === 'mobile' ? styles.active : ''}
                            onClick={() => switchMethod('mobile')}
                        >
                            {t('RegisterForm.mobile')}
                        </button>
                    </div>

                    <UnifiedInput
                        method={registerMethod}
                        email={formik.values.email}
                        phoneNumber={formik.values.phoneNumber}
                        countryCode={formik.values.countryCode}
                        onEmailChange={(value) => formik.setFieldValue('email', value)}
                        onPhoneNumberChange={(value) => formik.setFieldValue('phoneNumber', value)}
                        onCountryCodeChange={(value) => formik.setFieldValue('countryCode', value)}
                        isRegisterForm={true}
                    />

<input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('RegisterForm.password')}
                    autoComplete="new-password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                />
                    <img
                        src={eyeIcon}
                        alt="Toggle visibility"
                        className={`${styles.eyeIcon} ${showConfirmPassword ? styles.visible : styles.hidden}`}
                        onClick={() => setShowPassword(!showPassword)}
                    />
                    {formik.touched.password && formik.errors.password && (
                        <div className={styles.error}>{formik.errors.password}</div>
                    )}

                    <input
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder={t('RegisterForm.confirmPassword')}
                        autoComplete="new-password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                    />
                    <img
                        src={eyeIcon}
                        alt="Toggle visibility"
                        className={`${styles.eyeIcon} ${showConfirmPassword ? styles.visible : styles.hidden}`}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className={styles.error}>{formik.errors.confirmPassword}</div>
                    )}

                    <input
                        name="nickname"
                        type="text"
                        placeholder={t('RegisterForm.nickname')}
                        autoComplete="nickname"
                        value={formik.values.nickname}
                        onChange={formik.handleChange}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                    />
                    {formik.touched.nickname && formik.errors.nickname && (
                        <div className={styles.error}>{formik.errors.nickname}</div>
                    )}

                    <select
                        value={formik.values.countryCode}
                        onChange={handleCountryChange}
                        className={`${styles.select} ${theme === 'dark' ? styles.dark : styles.light}`}
                    >
                        <option value="+90">Turkey (+90)</option>
                        <option value="+82">South Korea (+82)</option>
                        <option value="+44">United Kingdom (+44)</option>
                        <option value="+49">Germany (+49)</option>
                        <option value="+33">France (+33)</option>
                    </select>
                    {formik.touched.country && formik.errors.country && (
                        <div className={styles.error}>{formik.errors.country}</div>
                    )}
                    <input
                        name="phoneNumber"
                        type="text"
                        placeholder={t('RegisterForm.phone')}
                        autoComplete="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                    />
                    <input
                        name="uidCode"
                        type="text"
                        placeholder={t('RegisterForm.uidCode')}
                        autoComplete="uidCode"
                        value={formik.values.uidCode}
                        onChange={formik.handleChange}
                        className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                    />
                    {formik.touched.uidCode && formik.errors.uidCode && (
                        <div className={styles.error}>{formik.errors.uidCode}</div>
                    )}

                    <button type="submit" className={styles.registerButton}>
                        {t('RegisterForm.register')}
                    </button>

                    <p className={styles.loginPrompt}>
                        {t('RegisterForm.alreadyAccount')}{' '}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/login');
                            }}
                        >
                            {t('RegisterForm.login')}
                        </a>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default RegisterForm;
