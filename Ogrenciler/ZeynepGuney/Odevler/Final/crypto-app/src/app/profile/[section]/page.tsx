'use client';

import { notFound } from "next/navigation";
import { use } from "react"; 
import UserProfile from "../../../components/organisms/ProfileSections/UserProfile";
import Referrals from "../../../components/organisms/ProfileSections/Referrals";
import ChangePassword from "../../../components/organisms/ProfileSections/ChangePassword";
import Api from "@/components/organisms/ProfileSections/Api";
import Auth from "@/components/organisms/ProfileSections/Auth";

type Section = 'user' | 'referrals' | 'apikeys' | 'history' | '2fa' | 'password';

type Params = {
  section: Section;
};

const SectionMap: Record<Section, React.ReactNode> = {
  user: <UserProfile />,
  referrals: <Referrals />,
  apikeys: <Api></Api>,
  history: <div>Login History Component</div>,
  '2fa': <Auth />,
  password: <ChangePassword />,
};

export default function ProfileSection({ params }: { params: Promise<Params> }) {
  const { section } = use(params); 

  if (!Object.keys(SectionMap).includes(section)) {
    return notFound();
  }

  return <>{SectionMap[section]}</>;
}
