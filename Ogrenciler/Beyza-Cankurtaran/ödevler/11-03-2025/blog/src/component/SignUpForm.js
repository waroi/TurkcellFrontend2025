import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useAuth();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Lütfen tüm alanları doldurun!');
      return;
    }
    registerUser(email, password);
    setEmail('');
    setPassword('');
    router.push('/');
  };
  return (
    <div
      className='card p-4 shadow-lg'
      style={{ maxWidth: '400px', width: '100%' }}
    >
      <h3 className='text-center mb-3'>Kayıt Ol</h3>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Şifre</label>
          <div className='input-group'>
            <input
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Kayıt Ol
        </button>
      </form>
    </div>
  );
}
