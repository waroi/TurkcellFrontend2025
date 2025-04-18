'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from './register.module.scss';
import { registerUser } from '@/lib/authService';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const [registrationType, setRegistrationType] = useState('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [country, setCountry] = useState('South Korea (+82)');
  const [phone, setPhone] = useState('');
  const [uidCode, setUidCode] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const hasNumberAndSpecial = /(?=.*\d)(?=.*[!-@#$%^&*(),.?":{}|<>])/.test(password);
    if (!hasNumberAndSpecial) {
      setError('Password must contain at least one number and one special character.');
      return;
    }

    setLoading(true);

    try {
      const result = await registerUser({
        email,
        password,
        nickname,
        country,
        phone,
        uidCode: uidCode || undefined
      });

      if (result.success) {
        alert('Registration successful! Please verify your email before logging in.');
        router.push('/pages/login');
      } else {
        setError(result.error || 'Registration failed. Please try again.');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleRegistrationType = (type: string) => {
    setRegistrationType(type);
  };
  
  const verifyEmail = () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setEmailVerified(true);
    alert('Email verified successfully!');
  };

  return (
    <div className={styles.registerContainer}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className={`text-center mb-4 ${styles.formContainer}`}>
              <h1 className="fw-bold mb-3">Register To Rockie</h1>
              <p className="mb-4">Register in advance and enjoy the event benefits</p>
              
              {error && (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              )}
              
              <div className="d-inline-flex mb-4">
                <button 
                  type="button"
                  className={`btn me-2 ${styles.toggleBtn} ${registrationType === 'email' ? styles.active : styles.inactive}`}
                  onClick={() => toggleRegistrationType('email')}
                >
                  Email
                </button>
                <button 
                  type="button"
                  className={`btn ${styles.toggleBtn} ${registrationType === 'mobile' ? styles.active : styles.inactive}`}
                  onClick={() => toggleRegistrationType('mobile')}
                >
                  Mobile
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label>Email/ID</label>
                  <div className="d-flex">
                    <input 
                      type="email" 
                      className="form-control rounded-start" 
                      placeholder="Please fill in the email form."
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailVerified(false); 
                      }}
                      required
                    />
                    <button 
                      className={styles.authButton} 
                      type="button"
                      onClick={verifyEmail}
                    >
                      Authenticate
                    </button>
                  </div>
                  {emailVerified && (
                    <small className="text-success">Email verified successfully!</small>
                  )}
                </div>
                
                <div className={styles.inputGroup}>
                  <label>
                    Password <span className="text-danger">(8 Or More Characters, Including Numbers And Special Characters)</span>
                  </label>
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
                
                <div className={styles.inputGroup}>
                  <div className="position-relative">
                    <input 
                      type={showConfirmPassword ? "text" : "password"} 
                      className="form-control" 
                      placeholder="Please re-enter your password."
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button" 
                      className={styles.eyeIcon}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  {password && confirmPassword && password !== confirmPassword && (
                    <small className="text-danger">Passwords do not match.</small>
                  )}
                </div>
                
                <div className={styles.inputGroup}>
                  <label>
                    NickName <span className="text-danger">(Excluding Special Characters)</span>
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter Nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>Country</label>
                  <select 
                    className="form-select" 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="South Korea (+82)">South Korea (+82)</option>
                    <option value="United States (+1)">United States (+1)</option>
                    <option value="Japan (+81)">Japan (+81)</option>
                    <option value="China (+86)">China (+86)</option>
                    <option value="United Kingdom (+44)">United Kingdom (+44)</option>
                    <option value="Germany (+49)">Germany (+49)</option>
                    <option value="France (+33)">France (+33)</option>
                    <option value="Canada (+1)">Canada (+1)</option>
                  </select>
                </div>
                
                <div className={styles.inputGroup}>
                  <label>
                    Phone <span className="text-danger">(Enter Numbers Only)</span>
                  </label>
                  <input 
                    type="tel" 
                    className="form-control" 
                    placeholder="ex) 01012345678 (without '-')"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/[^\d]/g, ''))} 
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>UID Code</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Please enter your invitation code."
                    value={uidCode}
                    onChange={(e) => setUidCode(e.target.value)}
                  />
                </div>
                
                <button 
                  type="submit" 
                  className={`btn w-100 py-3 mb-3 ${styles.submitButton}`}
                  disabled={loading || !emailVerified}
                >
                  {loading ? 'Processing...' : 'Pre-Registration'}
                </button>
                
                <div className="text-center">
                  <span>Already Have An Account? </span>
                  <a href="/pages/login" className={styles.loginLink}>Login</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}