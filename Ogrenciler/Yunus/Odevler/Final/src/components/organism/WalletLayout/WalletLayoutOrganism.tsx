"use client"

import { useTranslations } from 'next-intl'
import './WalletLayoutOrganism.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const WalletLayoutOrganism = () => {
    const pathname = usePathname()
    const splittedPath = pathname?.split("/")
    const purePath = splittedPath?.[splittedPath?.length - 1]
    const lastPath = splittedPath?.[splittedPath?.length - 2]
    const translate = useTranslations("Wallet")
    const layout = translate.raw("layout")

    return (
        <div className="user-layout">
            <div className="user-infos text-center">
                <ul className='user-panel-list'>
                    <li className='user-panel-item'>
                        <Link href="/wallet" className={`${purePath?.toString() === 'wallet' ? 'active' : ''} mb-3 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            {layout.overview}
                        </Link>
                    </li>
                    <li className='user-panel-item'>
                        <Link href="/wallet/buy"
                            className={`${(purePath?.toString() === 'buy') ||
                                (purePath?.toString() === 'step2' && lastPath?.toString() == 'buy') ||
                                (purePath?.toString() === 'step3' && lastPath?.toString() == 'buy') ? 'active' : ''} 
                         mb-3 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            {layout.buyCrypto}
                        </Link>
                    </li>
                    <li className='user-panel-item'>
                        <Link href="/wallet/sell" className={`${(purePath?.toString() === 'sell') ||
                            (purePath?.toString() === 'step2' && lastPath?.toString() == 'sell') ||
                            (purePath?.toString() === 'step3' && lastPath?.toString() == 'sell') ||
                            (purePath?.toString() === 'step4' && lastPath?.toString() == 'sell') ? 'active' : ''}  mb-3 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            {layout.sellCrypto}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WalletLayoutOrganism