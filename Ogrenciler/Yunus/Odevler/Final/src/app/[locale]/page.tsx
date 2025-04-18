import { useTranslations } from 'next-intl';
import HomePages from '@/pages/HomePages';

export default function HomePage() {
  const t = useTranslations('HomePage')

  return (
    <HomePages />
  )
}