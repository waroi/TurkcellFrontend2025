import { usePathname, useSearchParams } from "next/navigation";
import ProfileInputs from "../components/Organisms/ProfileInputs";
import ProfileSelection from "../components/Organisms/ProfileSelection";
import "./page.scss";
import React from 'react';

function UserProfile() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selection = searchParams.get('selection');

  const selectionString = selection || '';

  return (
    <div className="container userProfileWrap">
      <ProfileSelection />
      <ProfileInputs selection={selectionString} />
    </div>
  );
}

export default UserProfile;
