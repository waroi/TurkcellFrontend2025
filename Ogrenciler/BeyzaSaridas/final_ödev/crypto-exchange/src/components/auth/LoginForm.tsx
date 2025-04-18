'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, AlertTriangle } from 'lucide-react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, db } from '../../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const t = (key: string): string => {
  const translations: Record<string, string> = {
    'auth.loginTitle': 'Giriş Yap',
    'auth.email': 'E-posta',
    'auth.password': 'Şifre',
    'auth.forgotPassword': 'Şifremi Unuttum',
    'auth.loginWithGoogle': 'Google ile Giriş Yap',
    'auth.noAccount': 'Henüz hesabınız yok mu?',
    'auth.createAccount': 'Hesap Oluştur',
    'common.login': 'Giriş Yap',
    'errors.loginFailed': 'Giriş başarısız oldu. Lütfen bilgilerinizi kontrol ediniz.',
    'errors.invalidEmail': 'Geçerli bir e-posta adresi giriniz',
    'errors.passwordLength': 'Şifre en az 6 karakter olmalıdır'
  };
  return translations[key] || key;
};

const loginSchema = z.object({
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin" }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır" }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      router.push('/market');
    } catch (error: any) {
      console.error('Login error:', error);
      setError(t('errors.loginFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await signInWithPopup(auth, googleProvider);

      const userDocRef = doc(db, 'users', result.user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(doc(db, 'users', result.user.uid), {
          displayName: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          createdAt: new Date(),
        });

        await setDoc(doc(db, 'wallets', result.user.uid), {
          balance: 0,
          currency: 'USD',
          assets: []
        });

        await setDoc(doc(db, 'watchlist', result.user.uid), {
          items: []
        });
      }

      router.push('/market');
    } catch (error: any) {
      console.error('Google login error:', error);
      setError(t('errors.loginFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h1 className="login-form__title">{t('auth.loginTitle')}</h1>

      {error && (
        <div className="login-form__error">
          <AlertTriangle className="login-form__error-icon" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="login-form__form">
        <div className="login-form__field">
          <label htmlFor="email" className="login-form__label">
            {t('auth.email')}
          </label>
          <div className="login-form__input-wrapper">
            <Mail className="login-form__input-icon" />
            <input
              id="email"
              type="email"
              className={`login-form__input ${errors.email ? "login-form__input--error" : ""}`}
              placeholder="email@example.com"
              {...register("email")}
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <p className="login-form__error-text">{t("errors.invalidEmail")}</p>
          )}
        </div>

        <div className="login-form__field">
          <div className="login-form__label-row">
            <label htmlFor="password" className="login-form__label">
              {t("auth.password")}
            </label>
            <Link
              href="/forgot-password"
              className="login-form__forgot-password"
            >
              {t("auth.forgotPassword")}
            </Link>
          </div>
          <div className="login-form__input-wrapper">
            <Lock className="login-form__input-icon" />
            <input
              id="password"
              type="password"
              className={`login-form__input ${errors.password ? "login-form__input--error" : ""}`}
              placeholder="••••••"
              {...register("password")}
              disabled={isLoading}
            />
          </div>
          {errors.password && (
            <p className="login-form__error-text">
              {t("errors.passwordLength")}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="login-form__submit"
          disabled={isLoading}
        >
          {isLoading ? "Yükleniyor..." : t("common.login")}
        </button>
      </form>

      <div className="login-form__divider">
        <span className="login-form__divider-text">veya</span>
      </div>

      <button
        type="button"
        className="login-form__google-button"
        onClick={handleGoogleLogin}
        disabled={isLoading}
      >
        <svg className="login-form__google-icon" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
          <path d="M1 1h22v22H1z" fill="none" />
        </svg>
        {t("auth.loginWithGoogle")}
      </button>

      <p className="login-form__register">
        {t("auth.noAccount")}{" "}
        <Link href="/register" className="login-form__register-link">
          {t("auth.createAccount")}
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;