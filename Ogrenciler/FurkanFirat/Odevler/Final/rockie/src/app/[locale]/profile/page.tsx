import ProfileCom from '@/components/Profile/ProfileCom';
import ProtectedRoute from '@/components/routes/ProtectedRoute';
import React from 'react';

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileCom />
    </ProtectedRoute>
  );
}
