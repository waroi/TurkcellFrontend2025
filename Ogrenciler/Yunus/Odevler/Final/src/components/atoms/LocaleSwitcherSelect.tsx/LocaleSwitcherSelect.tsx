'use client';

import React, { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Select from '@/components/atoms/Select/Select';
import './LocaleSwitcherSelect.scss'

interface LocaleSwitcherSelectProps {
    defaultValue: string
    label: string
    children: React.ReactNode
}

const LocaleSwitcherSelect = ({ defaultValue, label, children }: LocaleSwitcherSelectProps) => {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale')

        if (savedLocale && savedLocale !== defaultValue) {
            const newPath = pathname.replace(/^\/[a-z]{2}/, `/${savedLocale}`)
            router.push(newPath)
        }
    }, [defaultValue, pathname, router])

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const currentTheme = localStorage.getItem('theme') || 'light'
        const newLocale = event.target.value

        localStorage.setItem('locale', newLocale)
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`)
        router.push(newPath)

        setTimeout(() => {
            if (currentTheme === 'dark') {
                document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark')
            }
        }, 100)
    }

    return (
        <Select
            id="locale-select"
            value={defaultValue}
            onChange={handleChange}
            label={label}
        >
            {children}
        </Select>
    )
}

export default LocaleSwitcherSelect