import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from 'next-intl';
import Homepage from "./components/pages/HomePage/HomePage";
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Homepage />
      <h1>{t('title')}</h1>
    </>
  );
}
