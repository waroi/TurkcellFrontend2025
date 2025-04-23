'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import styles from './login.module.scss';
import { loginUser } from '@/lib/authService';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  
  const [loginType, setLoginType] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await loginUser({
        email,
        password,
        rememberMe
      });

      if (result.success) {
        router.push('/'); 
      } else {
        setError(result.error || 'Login failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleLoginType = (type: string) => {
    setLoginType(type);
  };

  return (
    <div className={styles.loginContainer}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`text-center mb-4 ${styles.formContainer}`}>
              <h1 className="fw-bold mb-3">Login To Rockie</h1>
              <p className="mb-3">Welcome back! Log In now to start trading</p>
              
              <div className={styles.urlDisplay}>
                <FaLock className={styles.lockIcon} />
                <span className={styles.url}>https://accounts.rockie.com/login</span>
              </div>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="d-inline-flex mb-4">
                <button 
                  type="button"
                  className={`btn me-2 ${styles.toggleBtn} ${loginType === 'email' ? styles.active : styles.inactive}`}
                  onClick={() => toggleLoginType('email')}
                >
                  Email
                </button>
                <button 
                  type="button"
                  className={`btn ${styles.toggleBtn} ${loginType === 'mobile' ? styles.active : styles.inactive}`}
                  onClick={() => toggleLoginType('mobile')}
                >
                  Mobile
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Email/ID</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Please fill in the email form."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Password</label>
                  <div className="position-relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      className="form-control" 
                      placeholder="Please enter a password."
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className={styles.eyeIcon}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
                
                <div className={styles.rememberMeContainer}>
                  <div className={styles.checkboxContainer}>
                    <input 
                      type="checkbox" 
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" className="mb-0">Remember Me</label>
                  </div>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    if (email) {
                      alert('Reset password link will be sent to your email.');
                    } else {
                      setError('Please enter your email address to reset password.');
                    }
                  }} className={styles.forgotPassword}>Forgot Password?</a>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn w-100 py-3 mb-3 ${styles.submitButton}`}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
                
                <div className="text-center">
                  <span>Not A Member? </span>
                  <a href="/pages/register" className={styles.registerLink}>Register</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}