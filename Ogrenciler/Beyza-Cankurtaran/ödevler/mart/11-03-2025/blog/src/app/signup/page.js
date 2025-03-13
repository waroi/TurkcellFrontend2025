'use client';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password);
    setEmail('');
    setPassword('');
    redirect('/');
  };

  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
        <div className='input-group mb-3'>
          <label htmlFor='basic-url' className='input-group-text'>
            Email
          </label>
          <input
            type='email'
            className='form-control'
            aria-label='Sizing example input'
            aria-describedby='inputGroup-sizing-default'
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='basic-url' className='input-group-text'>
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

          <button type='submit' className='btn btn-primary'>
            Kayıt Ol
          </button>

      </form>
    </div>
  );
};

export default SignUp;
