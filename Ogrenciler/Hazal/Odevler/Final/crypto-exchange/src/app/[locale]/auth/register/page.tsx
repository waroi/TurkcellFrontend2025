import { RegisterForm } from '@/components/auth/RegisterForm';
import { useTranslations } from 'next-intl';
import { AuthWrapper } from '@/components/auth/AuthWrapper';

export default function RegisterPage() {
  const t = useTranslations('Auth');
  
  return (
    <AuthWrapper requiredAuth={false}>
      <div className="auth-page">
        <h1>{t('register')}</h1>
        <RegisterForm />
      </div>
    </AuthWrapper>
  );
}