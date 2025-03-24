import React from 'react';
import { ApplicationStatus } from '../components/organisms/ApplicationStatus';

export const HomeView = () => {
  return (
    <div className='container mt-4'>
      <h1>Welcome to atmosware</h1>
      <p>Here you can check your application status.</p>

      <ApplicationStatus />
    </div>
  );
};
