import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { emailLoginSchema, mobileLoginSchema } from '@/schemas/authSchema';
import UnifiedInput from '../../atoms/RegisterInput/UnifiedInput';
import "../../../app/global.scss";
import styles from './LoginForm.module.scss';
import useAuth from '@/hooks/useAuth';

const LoginForm = () => {
    const [loginMethod, setLoginMethod] = useState<'email' | 'mobile'>('email');
    const router = useRouter();
    const { t } = useTranslation();
    const { theme } = useTheme();
    const { login, user } = useAuth();
    const eyeIcon = "/assets/eye.svg";
    const [showPassword, setShowPassword] = useState(false); 

    const formik = useFormik({
        initialValues: {
            email: '',
            phoneNumber: '',
            countryCode: '+90',
            password: '',
        },
        validationSchema: loginMethod === 'email' ? emailLoginSchema : mobileLoginSchema,
        onSubmit: async (values) => {
            try {
                let response;
                if (loginMethod === 'email') {
                    response = await login(values.email, values.password);
                } else {
                    const mobileEmail = `${values.countryCode}${values.phoneNumber}@mobile.rockie.com`;
                    response = await login(mobileEmail, values.password);
                }

                console.log('Login başarılı:', response);
                router.push('/profile/user');
            } catch (error) {
                console.error('Giriş Hatası:', error);
            }
        }
    });

    return (
        <form onSubmit={formik.handleSubmit} className={`${styles.loginForm} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.formContent}>
                <div className={styles.leftSide}>
                    <div className={styles.titleWrapper}>
                        <h2 className={styles.title}>{t('LoginForm.title')}</h2>
                        <h6 className={styles.content}>{t('LoginForm.subtitle')}</h6>
                    </div>

                    <div className={`${styles.Greencontainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        <div className={`${styles.keyContainer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                            <img className={styles.keyIcon} src="/assets/key.svg" alt="Key Icon" />
                            <div className={styles.greenDot}></div>
                        </div>
                        <p className={`${styles.urlText} ${theme === 'dark' ? styles.dark : styles.light}`}>
                            <span className={styles.greenLink}>https://</span>accounts.rockie.com/login
                        </p>
                    </div>

                    <div className={styles.toggleButtons}>
                        <button
                            type="button"
                            className={loginMethod === 'email' ? styles.active : ''}
                            onClick={() => setLoginMethod('email')}
                        >
                            {t('LoginForm.email')}
                        </button>
                        <button
                            type="button"
                            className={loginMethod === 'mobile' ? styles.active : ''}
                            onClick={() => setLoginMethod('mobile')}
                        >
                            {t('LoginForm.mobile')}
                        </button>
                    </div>

                    <UnifiedInput
                        method={loginMethod}
                        email={formik.values.email}
                        phoneNumber={formik.values.phoneNumber}
                        countryCode={formik.values.countryCode}
                        onEmailChange={(value) => formik.setFieldValue('email', value)}
                        onPhoneNumberChange={(value) => formik.setFieldValue('phoneNumber', value)}
                        onCountryCodeChange={(value) => formik.setFieldValue('countryCode', value)}
                        emailLabel={t('LoginForm.emailLabel')}
                        phoneLabel={t('LoginForm.phoneLabel')}
                    />

                    <label htmlFor="password" className={styles.label}>
                        {t('LoginForm.passwordLabel')}
                    </label>
                    <div className={styles.inputWithButton}>
                        <input
                            type={showPassword ? 'text' : 'password'} 
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder={t('LoginForm.password')}
                            className={`${styles.input} ${theme === 'dark' ? styles.dark : styles.light}`}
                        />
                        <img
                            src={eyeIcon}
                            alt="Toggle visibility"
                            className={`${styles.eyeIcon} ${showPassword ? styles.visible : styles.hidden}`}
                            onClick={() => setShowPassword(!showPassword)} 
                        />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                        <div className={styles.error}>{formik.errors.password}</div>
                    )}

                    <div className={styles.options}>
                        <label>
                            <input type="checkbox" />
                            {t('LoginForm.rememberMe')}
                        </label>
                        <a
                            className={styles.forgetPassword}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/forgetPassword');
                            }}
                        >
                            {t('LoginForm.forgotPassword')}
                        </a>
                    </div>

                    <button type="submit" className={styles.loginButton}>
                        {t('LoginForm.login')}
                    </button>

                    <p className={styles.registerPrompt}>
                        {t('LoginForm.notMember')}{' '}
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/register');
                            }}
                        >
                            {t('LoginForm.register')}
                        </a>
                    </p>
                </div>

                <div className={styles.qrSection}>
                    <div className={styles.qrBox}></div>
                    <h5>{t('LoginForm.qrTitle')}</h5>
                    <p>
                        {t('LoginForm.qrDescription')}{' '}
                        <span>{t('LoginForm.qrApp')}</span>
                        {t('LoginForm.qrDescription2')}
                    </p>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;
