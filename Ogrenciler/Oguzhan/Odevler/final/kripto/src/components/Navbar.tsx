import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.svg'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className='d-flex justify-content-between align-items-center px-3 px-md-5 py-3 bg-light shadow-sm'>
            <div className='d-flex align-items-center gap-4'>
                <Link href="/">
                    <Image src={Logo} alt="Websitenin Logosu"
                        aria-label="Ana Sayfaya Dön" />
                </Link>

                <ul className='d-flex gap-3 list-unstyled mb-0 d-none d-md-flex'>

                    <li><Link href="/home">HomePage</Link></li>
                    <li><Link href="/buycrypto">BuyCrypto</Link></li>
                    <li><Link href="/markets">Markets</Link></li>
                    <li><Link href="/exchange">Exchange</Link></li>
                    <li><Link href="/"></Link>Spot</li>
                    <li><Link href="/">BITUSDT</Link></li>
                    <li><Link href="/">Pages</Link></li>
                </ul>

            </div>

            <div >
                <ul className='d-flex list-unstyled gap-3 mb-0 '>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                </ul>
            </div>
        </nav>

    )
}

