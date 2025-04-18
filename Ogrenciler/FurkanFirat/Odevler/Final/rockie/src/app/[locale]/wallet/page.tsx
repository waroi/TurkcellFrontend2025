import ProtectedRoute from '@/components/routes/ProtectedRoute';
import WalletComp from '@/components/Wallet/WalletComp';
import React from 'react';

export default function WalletPage() {
  return (
    <ProtectedRoute>
      <WalletComp />
    </ProtectedRoute>
  );
}
