import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/stories/components/pages/HomePage/HomePage";
import { useTranslations } from 'next-intl';
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Homepage />
      <h1>{t('title')}</h1>
    </>
  );
}
