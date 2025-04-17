import React from 'react';
import Layout from '../../../components/layout/Layout';  
import LoginForm from '../../../components/auth/LoginForm';
import './login.scss';

export default function LoginPage() {
  return (
    <Layout>
      <div className="login-page">
        <div className="login-page__container">
          <div className="login-page__content">
            <LoginForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}