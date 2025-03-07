import React, { useState } from 'react';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faSignInAlt,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isLoggingIn) {
      setIsLoggingIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error) {
        setErrorMessage(
          error.message || 'Login failed. Please check your email & password.'
        );
        setIsLoggingIn(false);
      }
    }
  };

  if (isLoggedIn) {
    return <Navigate to='/' replace={true} />;
  }

  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='bg-white rounded-3 p-4 mb-5 shadow col-md-4 p-4'>
        <div className='text-center mb-4'>
          <h2 className='text-orange mb-1'>Welcome Back</h2>
          <p className='text-muted'>Log in to continue</p>
        </div>

        {errorMessage && (
          <div
            className='alert alert-danger d-flex align-items-center'
            role='alert'
          >
            <FontAwesomeIcon icon={faExclamationCircle} className='me-2' />
            <div>{errorMessage}</div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <div className='input-group'>
              <span className='input-group-text bg-light'>
                <FontAwesomeIcon icon={faEnvelope} className='text-muted' />
              </span>
              <input
                type='email'
                className='form-control'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                autoComplete='email'
                required
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <div className='input-group'>
              <span className='input-group-text bg-light'>
                <FontAwesomeIcon icon={faLock} className='text-muted' />
              </span>
              <input
                type='password'
                className='form-control'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                autoComplete='current-password'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            className='btn btn-orange w-100 py-2'
            disabled={isLoggingIn}
          >
            {isLoggingIn ? (
              <span
                className='spinner-border spinner-border-sm me-2'
                role='status'
                aria-hidden='true'
              ></span>
            ) : (
              <FontAwesomeIcon icon={faSignInAlt} className='me-2' />
            )}
            {isLoggingIn ? 'Logging in...' : 'Login'}
          </button>

          <div className='text-center mt-3'>
            <a href='#' className='text-decoration-none text-orange'>
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
