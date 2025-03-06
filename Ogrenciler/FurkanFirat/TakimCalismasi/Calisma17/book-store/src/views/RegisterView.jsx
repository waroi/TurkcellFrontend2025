import React, { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../context/authContext';
import { Navigate } from 'react-router';

const RegisterView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogginIng, setIsLoggingIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoggedIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLogginIng) {
      setIsLoggingIn(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <>
      {isLoggedIn && <Navigate to='/login' replace={true} />}
      <div>
        REGISTER
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button type='submit'>Register</button>
        </form>
      </div>
    </>
  );
};

export default RegisterView;
