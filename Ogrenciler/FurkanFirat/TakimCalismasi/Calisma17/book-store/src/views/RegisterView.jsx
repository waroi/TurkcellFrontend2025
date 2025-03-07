import React, { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext';
import { Navigate, NavLink } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUserPlus,
  faBuilding,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [publisher, setPublisher] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password, publisher);
      } catch (error) {
        setErrorMessage(error.message || 'Registration failed. Try again.');
      } finally {
        setIsRegistering(false);
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
          <h2 className='text-orange mb-1'>Create Account</h2>
          <p className='text-muted'>Register</p>
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

          <div className='mb-3'>
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
                autoComplete='new-password'
                required
              />
            </div>
          </div>

          <div className='mb-4'>
            <label htmlFor='publisher' className='form-label'>
              Publisher
            </label>
            <div className='input-group'>
              <span className='input-group-text bg-light'>
                <FontAwesomeIcon icon={faBuilding} className='text-muted' />
              </span>
              <input
                type='text'
                className='form-control'
                id='publisher'
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
                placeholder='Enter publisher name'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            className='btn btn-orange w-100 py-2'
            disabled={isRegistering}
          >
            {isRegistering ? (
              <span
                className='spinner-border spinner-border-sm me-2'
                role='status'
                aria-hidden='true'
              ></span>
            ) : (
              <FontAwesomeIcon icon={faUserPlus} className='me-2' />
            )}
            {isRegistering ? 'Registering...' : 'Register'}
          </button>

          <div className='text-center mt-3'>
            <p className='mb-0'>
              Already have an account?{' '}
              <NavLink to='/login' className='text-decoration-none text-orange'>
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
