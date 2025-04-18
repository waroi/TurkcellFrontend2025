import { useTranslations } from 'next-intl';
import Homepage from "./components/pages/HomePage/HomePage";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Homepage />
    </>
  );
}
