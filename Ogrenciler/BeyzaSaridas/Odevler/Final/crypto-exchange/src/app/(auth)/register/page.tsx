import React from 'react';
import Layout from '../../../components/layout/Layout';
import RegisterForm from '../../../components/auth/RegisterForm';
import './register.scss';

export default function RegisterPage() {
  return (
    <Layout>
      <div className="register-page">
        <div className="register-page__container">
          <div className="register-page__content">
            <RegisterForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}