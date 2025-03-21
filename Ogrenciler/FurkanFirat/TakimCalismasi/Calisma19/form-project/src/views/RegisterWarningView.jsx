import React from 'react';
import { Link } from 'react-router';
import { RedirectLink } from '../components/atoms/RedirectLink';

export const RegisterWarningView = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div
        className='text-center p-5 rounded shadow-sm bg-white'
        style={{ width: '100%', maxWidth: '500px' }}
      >
        <h2 className='mb-3 text-danger'>
          You Need to Register to View this Page
        </h2>
        <p className='mb-4 text-muted'>
          Please register and try again to access this page.
        </p>
        <Link to='/register' className='btn btn-primary px-5 py-2'>
          Register Now
        </Link>
        <RedirectLink
          textContent='Already have an account?'
          linkText='Login'
          to='/login'
        />
      </div>
    </div>
  );
};
