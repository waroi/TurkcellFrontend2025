'use client';

import { useEffect } from 'react';
import PrimaryButton from '@/app/_components/ui/Buttons/PrimaryButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center py-5 d-flex flex-column gap-3 align-items-center justify-content-center">
      <h2 className="fw-bold">Something went wrong!</h2>
      <p className="text-secondary body3">Please try again later or refresh the page.</p>
      <PrimaryButton onClick={reset}>Try again</PrimaryButton>
    </div>
  );
}
