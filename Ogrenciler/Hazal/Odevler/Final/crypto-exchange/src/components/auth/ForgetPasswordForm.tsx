'use client';

import { useState } from 'react';
import { resetPassword } from '@/lib/firebase/auth';
import { useTranslations } from 'next-intl';
import { Button} from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Label } from '@/components/common/Label';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const t = useTranslations('Auth');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await resetPassword(email);
      setSuccess(true);
    } catch (err: any) {
      setError(t(err.code));
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-message success">
        <p>{t('resetPasswordSuccess')}</p>
        <p>{t('checkYourEmail')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="auth-form">
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

      <Button type="submit" disabled={loading}>
        {loading ? t('loading') : t('sendResetLink')}
      </Button>
    </form>
  );
}