'use client';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import Link from 'next/link';
import { redirect } from 'next/navigation';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
    setEmail('');
    setPassword('');
    redirect('/');

  };

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <label for='basic-url' className='input-group-text'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for='basic-url' className='input-group-text'>
            Şifre
          </label>
          <input
            type='password'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link href="/">
          <button type='submit' className='btn btn-primary'>Giriş Yap</button>
        </Link>

      </form>
    </div>
  );
};

export default SignIn;
