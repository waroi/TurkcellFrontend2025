'use client';

import LinkButton from '@/app/_components/ui/Buttons/LinkButton';
import { useNavigation } from '../../utils/navigation';

export default function NotFound() {
    const {goToHomePage}=useNavigation()
  return (
    <div className="text-center py-5 d-flex flex-column gap-3 align-items-center justify-content-center">
      <h2 className="fw-bold">Page Not Found</h2>
      <p className="text-secondary body3">Sorry, the page you are looking for does not exist.</p>
      <LinkButton onClick={goToHomePage} >Back to Home</LinkButton>
    </div>
  );
}
