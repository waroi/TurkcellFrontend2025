'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const defaultContextValue: ThemeContextType = {
    theme: 'light',
    toggleTheme: () => { },
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light')
    const initializedRef = useRef(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && !initializedRef.current) {
            const savedTheme = localStorage.getItem('theme') as Theme

            if (savedTheme === 'light' || savedTheme === 'dark') {
                setTheme(savedTheme)
                applyTheme(savedTheme)
            }
            else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark')
                applyTheme('dark')
            }

            initializedRef.current = true
        }
    }, [])

    const applyTheme = (newTheme: Theme) => {
        if (typeof window !== 'undefined') {
            if (newTheme === 'dark') {
                document.body.classList.add('dark')
            } else {
                document.body.classList.remove('dark')
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme)
            applyTheme(theme)
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            return newTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('Sadece ThemeProvider ile kullanılabilir!!!!')
    }
    return context
}