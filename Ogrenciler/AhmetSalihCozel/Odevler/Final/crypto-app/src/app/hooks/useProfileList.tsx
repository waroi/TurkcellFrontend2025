"use client"
import React, { useState } from 'react';
import Typography from "../components/Atoms/Typography/Typography";
import BootIcon from '../components/Atoms/Icon/BootIcon';
import Link from 'next/link';

function useProfileList() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const listItems: React.ReactNode[] = [
    { label: "User Profile", icon: "person-circle", link:"user" },
    { label: "Referrals", icon: "people-fill", link:"refferals" },
    { label: "API Keys", icon: "key-fill", link:"apikeys" },
    { label: "Login History", icon: "clock-history", link:"loginhistory" },
    { label: "NFT", icon: "collection", link:"nft" },
    { label: "2FA", icon: "shield-lock", link:"2fa" },
    { label: "Change Passwords", icon: "lock-fill", link:"changepassword" },
  ].map((item, index) => (
    <Link
      href={`profile/${item.link}`}
      key={item.label}
      className={`py-12 px-20 border-rad-40 cursor-pointer flex items-center gap-8 ${activeIndex === index ? 'bg-primary color-surface' : 'theme-type-color'}`}
      onClick={() => setActiveIndex(index)}
    >
      <BootIcon iconName={item.icon} className="mr-4" size={24} />
      <Typography variant="free" className="f-bold">{item.label}</Typography>
    </Link>
  ));

  return { listItems };
}

export default useProfileList;
