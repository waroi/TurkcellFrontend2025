import { useTranslations } from 'next-intl'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

export const useHeroSection = () => {
    const [mainImagePath, setMainImagePath] = useState<string>("/images/homepage/hero/main-hero")
    const t = useTranslations('HomePage')
    const { theme } = useTheme()

    const partners = t.raw("Hero").partners
    const info = t.raw("Hero").Info

    useEffect(() => {
        if (theme === "dark") {
            setMainImagePath("/images/homepage/hero/main-hero-dark")
        } else {
            setMainImagePath("/images/homepage/hero/main-hero")
        }
    }, [theme])

    return {
        mainImagePath,
        partners,
        info
    }
}