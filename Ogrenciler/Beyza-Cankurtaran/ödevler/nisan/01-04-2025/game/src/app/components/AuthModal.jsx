"use client";
import { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword 
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import { useRouter } from 'next/navigation';

const AuthSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setIsLogin(initialMode === 'login');
  }, [initialMode]);

  const handleAuth = async (values) => {
    try {
      setError(null);
      if (isLogin) {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        onClose();
        router.push('/dashboard');
      } else {
        const userCredential = await createUserWithEmailAndPassword(
          auth, 
          values.email, 
          values.password
        );
        await setDoc(doc(db, 'users', userCredential.user.uid), {
          email: values.email,
          totalScore: 0,
          gamesPlayed: 0,
          createdAt: new Date()
        });

        onClose();
        router.push('/dashboard');
      }
    } catch (error) {
      setError(error.message);
      console.error('Authentication Error', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isLogin ? 'Login' : 'Sign Up'}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          
          <div className="modal-body">
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}
            
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={AuthSchema}
              onSubmit={handleAuth}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <Field 
                      name="email" 
                      type="email" 
                      className={`form-control ${
                        errors.email && touched.email ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter your email"
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <Field 
                      name="password" 
                      type="password" 
                      className={`form-control ${
                        errors.password && touched.password ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter your password"
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                  >
                    {isLogin ? 'Login' : 'Sign Up'}
                  </button>
                  
                  <div className="text-center mt-3">
                    <button 
                      type="button" 
                      className="btn btn-link"
                      onClick={() => setIsLogin(!isLogin)}
                    >
                      {isLogin 
                        ? 'Need an account? Sign Up' 
                        : 'Already have an account? Login'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}