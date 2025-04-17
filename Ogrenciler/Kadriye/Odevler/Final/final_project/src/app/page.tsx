import { useTranslations } from 'next-intl';
import Homepage from "./components/pages/HomePage/HomePage";
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Link href="/register">Register Page</Link>
      <Link href="/login">Login Page</Link>
      <Homepage />
    </>
  );
}
