import { ForgotPasswordForm } from '@/components/auth/ForgetPasswordForm';
import { useTranslations } from 'next-intl';

export default function ForgotPasswordPage() {
  const t = useTranslations('Auth');
  
  return (
    <div className="auth-page">
      <h1>{t('resetPassword')}</h1>
      <p>{t('resetPasswordInstructions')}</p>
      <ForgotPasswordForm />
      <p>
        <a href="/login">{t('backToLogin')}</a>
      </p>
    </div>
  );
}