import { LoginForm } from '@/components/auth/LoginForm';
import { useTranslations } from 'next-intl';
import { AuthWrapper } from '@/components/auth/AuthWrapper';

export default function LoginPage() {
  const t = useTranslations('Auth');
  
  return (
    <AuthWrapper requiredAuth={false}>
      <div className="auth-page">
        <h1>{t('login')}</h1>
        <LoginForm />
      </div>
    </AuthWrapper>
  );
}