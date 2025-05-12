"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'


export default function Navbar() {
    const { user, loading } = useAuthStore()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    const handleLogout = async () => {
        try {
            await useAuthStore.getState().logout();
            setIsDropdownOpen(false)
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return (
        <nav className='d-flex justify-content-between align-items-center px-3 px-md-5 py-3 bg-light shadow-sm position-relative'>
            <div className='d-flex align-items-center gap-4'>
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Websitenin Logosu"
                        aria-label="Ana Sayfaya Dön"
                    />
                </Link>

                <ul className='d-flex gap-3 list-unstyled mb-0 d-none d-md-flex'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/trade">BuyCrypto</Link></li>
                    <li><Link href="/watchlist">Favorites</Link></li>
                    <li><Link href="/portfolio">My Portfolio</Link></li>
                </ul>
            </div>

            <div>
                {!loading && (
                    <div className='d-flex align-items-center gap-4'>
                        {user ? (
                            <div className='position-relative'>
                                <button
                                    className='d-flex align-items-center gap-2 bg-transparent border-0'
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <div className='avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center'
                                        style={{ width: '40px', height: '40px' }}>
                                        {user.name?.[0]?.toUpperCase()}
                                    </div>
                                    <span className='d-none d-md-inline'>{user.name}</span>
                                </button>

                                {isDropdownOpen && (
                                    <div className='dropdown-menu show position-absolute end-0 mt-2 shadow'>
                                        <Link
                                            href="/profile"
                                            className='dropdown-item'
                                            onClick={() => setIsDropdownOpen(false)}
                                        >
                                            Profil
                                        </Link>
                                        <button
                                            className='dropdown-item text-danger'
                                            onClick={handleLogout}
                                        >
                                            Çıkış Yap
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <ul className='d-flex list-unstyled gap-3 mb-0 '>
                                <li><Link href="/login">Giriş Yap</Link></li>
                                <li><Link href="/register">Kayıt Ol</Link></li>
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </nav>
    )
}