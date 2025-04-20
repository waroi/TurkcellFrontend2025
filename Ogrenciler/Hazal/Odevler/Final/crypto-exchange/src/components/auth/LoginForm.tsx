'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Button} from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Label } from '@/components/common/Label';
import { useAuth } from '@/hooks/useAuth';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();
  const t = useTranslations('Auth');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signIn(email, password);
      router.push('/dashboard');
    } catch (err: any) {
      setError(t(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>{t('login')}</h2>
      {error && <div className="error-message">{error}</div>}
      
      <div className="form-group">
        <Label htmlFor="email">{t('email')}</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoFocus
        />
      </div>

      <div className="form-group">
        <Label htmlFor="password">{t('password')}</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <div className="form-footer">
        <Button type="submit" disabled={loading}>
          {loading ? t('loading') : t('login')}
        </Button>
        
        <a href="/forgot-password" className="forgot-password">
          {t('forgotPassword')}
        </a>
      </div>

      <div className="auth-switch">
        {t('dontHaveAccount')}{' '}
        <a href="/register">{t('register')}</a>
      </div>
    </form>
  );
}