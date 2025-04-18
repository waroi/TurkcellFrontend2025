'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Lock, User, AlertTriangle } from 'lucide-react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';


const t = (key: string): string => {
  const translations: Record<string, string> = {
    'auth.registerTitle': 'Hesap Oluştur',
    'auth.displayName': 'Ad Soyad',
    'auth.email': 'E-posta',
    'auth.password': 'Şifre',
    'auth.confirmPassword': 'Şifreyi Onayla',
    'auth.createAccount': 'Hesap Oluştur',
    'auth.haveAccount': 'Zaten hesabınız var mı?',
    'common.login': 'Giriş Yap',
    'errors.registerFailed': 'Kayıt işlemi başarısız oldu. Lütfen tekrar deneyiniz.'
  };
  return translations[key] || key;
};




const registerSchema = z.object({
  displayName: z.string().min(3, { message: "Ad Soyad en az 3 karakter olmalıdır" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi girin" }),
  password: z.string().min(6, { message: "Şifre en az 6 karakter olmalıdır" }),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"]
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null);

    try {

      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: data.displayName
      });

      await setDoc(doc(db, 'users', user.uid), {
        displayName: data.displayName,
        email: data.email,
        photoURL: user.photoURL,
        createdAt: new Date(),
      });

      await setDoc(doc(db, 'wallets', user.uid), {
        balance: 0,
        currency: 'USD',
        assets: []
      });

      await setDoc(doc(db, 'watchlist', user.uid), {
        items: []
      });

      router.push('/market');
    } catch (error: any) {
      console.error('Registration error:', error);
      setError(t('errors.registerFailed'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-form">
      <h1 className="register-form__title">{t('auth.registerTitle')}</h1>

      {error && (
        <div className="register-form__error">
          <AlertTriangle className="register-form__error-icon" />
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="register-form__form">
        <div className="register-form__field">
          <label htmlFor="displayName" className="register-form__label">
            {t('auth.displayName')}
          </label>
          <div className="register-form__input-wrapper">
            <User className="register-form__input-icon" />
            <input
              id="displayName"
              type="text"
              className={`register-form__input ${errors.displayName ? 'register-form__input--error' : ''}`}
              placeholder="Tam Adınız"
              {...register('displayName')}
              disabled={isLoading}
            />
          </div>
          {errors.displayName && (
            <p className="register-form__error-text">{errors.displayName.message}</p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="email" className="register-form__label">
            {t('auth.email')}
          </label>
          <div className="register-form__input-wrapper">
            <Mail className="register-form__input-icon" />
            <input
              id="email"
              type="email"
              className={`register-form__input ${errors.email ? 'register-form__input--error' : ''}`}
              placeholder="email@example.com"
              {...register('email')}
              disabled={isLoading}
            />
          </div>
          {errors.email && (
            <p className="register-form__error-text">{errors.email.message}</p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="password" className="register-form__label">
            {t('auth.password')}
          </label>
          <div className="register-form__input-wrapper">
            <Lock className="register-form__input-icon" />
            <input
              id="password"
              type="password"
              className={`register-form__input ${errors.password ? 'register-form__input--error' : ''}`}
              placeholder="••••••"
              {...register('password')}
              disabled={isLoading}
            />
          </div>
          {errors.password && (
            <p className="register-form__error-text">{errors.password.message}</p>
          )}
        </div>

        <div className="register-form__field">
          <label htmlFor="confirmPassword" className="register-form__label">
            {t('auth.confirmPassword')}
          </label>
          <div className="register-form__input-wrapper">
            <Lock className="register-form__input-icon" />
            <input
              id="confirmPassword"
              type="password"
              className={`register-form__input ${errors.confirmPassword ? 'register-form__input--error' : ''}`}
              placeholder="••••••"
              {...register('confirmPassword')}
              disabled={isLoading}
            />
          </div>
          {errors.confirmPassword && (
            <p className="register-form__error-text">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="register-form__submit"
          disabled={isLoading}
        >
          {isLoading ? 'Yükleniyor...' : t('auth.createAccount')}
        </button>
      </form>

      <p className="register-form__login">
        {t('auth.haveAccount')} <Link href="/login" className="register-form__login-link">{t('common.login')}</Link>
      </p>
    </div>
  );
};

export default RegisterForm;