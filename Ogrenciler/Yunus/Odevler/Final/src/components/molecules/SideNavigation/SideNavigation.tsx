'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './SideNavigation.scss'
import { useTranslations } from 'next-intl'
import { signOut } from '@/services/authService'
import { useRouter } from 'next/navigation'

const SideNavigation = () => {
    const pathname = usePathname()
    const router = useRouter()
    const splittedPath = pathname?.split("/")
    const purePath = splittedPath?.[splittedPath?.length - 1]
    const translate = useTranslations("Dashboard").raw("layout")

    const logOut = async () => {
        await signOut()
        router.push('/login')
    }
    return (
        <div className="user-layout">
            <div className="user-infos text-center">
                <ul className='user-panel-list'>
                    <li className='user-panel-item'>
                        <Link href="/dashboard" className={`${purePath?.toString() === 'dashboard' ? 'active' : ''} mb-2 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.02 2.84016L3.63 7.04016C2.73 7.74016 2 9.23016 2 10.3602V17.7702C2 20.0902 3.89 21.9902 6.21 21.9902H17.79C20.11 21.9902 22 20.0902 22 17.7802V10.5002C22 9.29016 21.19 7.74016 20.2 7.05016L14.02 2.72016C12.62 1.74016 10.37 1.79016 9.02 2.84016Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 17.9902V14.9902" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translate.home}
                        </Link>
                    </li>
                    <li className='user-panel-item'>
                        <a href="#" className='mb-2 rounded-pill text-decoration-none gap-2 user-panel-link'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 8.5H13" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 16.5H8" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M10.5 16.5H14.5" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 11.33V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V7.89001C2 4.38001 2.89 3.5 6.44 3.5H13.28" stroke="#3772FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 3.25H20.13C20.82 3.25 21.38 3.88 21.38 4.5C21.38 5.19 20.82 5.75 20.13 5.75H17V3.25Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17 5.75H20.57C21.36 5.75 22 6.31 22 7C22 7.69 21.36 8.25 20.57 8.25H17V5.75Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.7617 8.25V9.5" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.7617 2V3.25" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.19 3.25H16" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.19 8.25H16" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translate.buyCrypto}
                        </a>
                    </li>
                    <li className='user-panel-item'>
                        <a href="#" className='mb-2 rounded-pill text-decoration-none gap-2 user-panel-link'>
                            <svg className='marketSvg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z" fill="#3772FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M7 8C7.55228 8 8 8.44772 8 9V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8Z" fill="#3772FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 14C11.5523 14 12 14.4477 12 15V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14Z" fill="#3772FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 4C15.5523 4 16 4.44772 16 5V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V5C14 4.44772 14.4477 4 15 4Z" fill="#3772FF" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M19 10C19.5523 10 20 10.4477 20 11V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V11C18 10.4477 18.4477 10 19 10Z" fill="#3772FF" />
                            </svg>
                            {translate.market}
                        </a>
                    </li>
                    <li className='user-panel-item'>
                        <a href="#" className='mb-2 rounded-pill text-decoration-none gap-2 user-panel-link'>
                            <svg className='marketSvg' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2071 2.7929C15.8166 2.40237 15.1834 2.40237 14.7929 2.79289C14.4024 3.18341 14.4024 3.81658 14.7929 4.2071L15.5819 4.99615H10C6.13401 4.99615 3 8.13016 3 11.9962V12.9962C3 13.5484 3.44772 13.9962 4 13.9962C4.55228 13.9962 5 13.5484 5 12.9962V11.9962C5 9.23473 7.23858 6.99615 10 6.99615H15.5866L14.7929 7.78992C14.4024 8.18045 14.4024 8.81362 14.7929 9.20414C15.1834 9.59466 15.8166 9.59465 16.2071 9.20412L18.352 7.05916C18.9378 6.47337 18.9378 5.52363 18.352 4.93785L16.2071 2.7929Z" fill="#3772FF" />
                                <path d="M13.9984 19C17.8644 19 20.9984 15.866 20.9984 12V11C20.9984 10.4477 20.5507 10 19.9984 10C19.4461 10 18.9984 10.4477 18.9984 11V12C18.9984 14.7614 16.7598 17 13.9984 17H8.4117L9.20552 16.2062C9.59604 15.8156 9.59603 15.1825 9.2055 14.792C8.81498 14.4014 8.18181 14.4014 7.79129 14.792L5.64636 16.9369C5.06059 17.5227 5.06059 18.4725 5.64636 19.0582L7.79129 21.2032C8.18181 21.5937 8.81498 21.5937 9.20551 21.2032C9.59603 20.8127 9.59604 20.1795 9.20551 19.789L8.41653 19H13.9984Z" fill="#3772FF" />
                            </svg>
                            {translate.exchane}
                        </a>
                    </li>
                    <li className='user-panel-item'>
                        <a href="#" className='mb-2 rounded-pill text-decoration-none gap-2 user-panel-link'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 15.9697C23 19.8397 19.87 22.9697 16 22.9697L17.05 21.2197" stroke="#3772FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 7.96973C1 4.09973 4.13 0.969727 8 0.969727L6.95 2.71973" stroke="#3772FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.62109 13.0703H9.4311C10.0511 13.0703 10.5611 13.6303 10.5611 14.2003C10.5611 14.8203 10.0611 15.3303 9.4311 15.3303H6.62109V13.0703Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.62109 15.3301H9.84109C10.5511 15.3301 11.1311 15.8301 11.1311 16.4601C11.1311 17.0801 10.5511 17.5901 9.84109 17.5901H6.62109V15.3301Z" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.42188 17.5801V18.7001" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.42188 11.9502V13.0702" stroke="#3772FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.8517 15.3302C14.8517 18.7402 12.0917 21.5002 8.68172 21.5002C5.27172 21.5002 2.51172 18.7402 2.51172 15.3302C2.51172 11.9202 5.27172 9.16016 8.68172 9.16016C8.84172 9.16016 8.99172 9.17018 9.16172 9.18018C12.1917 9.41018 14.6117 11.8302 14.8417 14.8602C14.8417 15.0102 14.8517 15.1602 14.8517 15.3302Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.5002 8.66998C21.5002 12.08 18.7402 14.84 15.3302 14.84H14.8402C14.6102 11.81 12.1902 9.38997 9.16016 9.15997V8.66998C9.16016 5.25998 11.9202 2.5 15.3302 2.5C18.7402 2.5 21.5002 5.25998 21.5002 8.66998Z" stroke="#3772FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translate.spot}
                        </a>
                    </li>
                    <li className='user-panel-item'>
                        <Link href="/user/change-password" className={`${purePath?.toString() === 'change-password' ? 'active' : ''} mb-2 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z" stroke="#3772FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z" stroke="#3772FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.59 2H3C2.45 2 2 2.45 2 3V5.59C2 6.48 3.07999 6.92999 3.70999 6.29999L6.29999 3.70999C6.91999 3.07999 6.48 2 5.59 2Z" stroke="#3772FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18.4097 22.0003H20.9997C21.5497 22.0003 21.9997 21.5503 21.9997 21.0003V18.4103C21.9997 17.5203 20.9197 17.0703 20.2897 17.7003L17.6997 20.2903C17.0797 20.9203 17.5197 22.0003 18.4097 22.0003Z" stroke="#3772FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translate.byfiCenter}
                        </Link>
                    </li>
                    <li className='user-panel-item'>
                        <Link href="/user/change-password" className={`${purePath?.toString() === 'change-password' ? 'active' : ''} mb-2 rounded-pill text-decoration-none gap-2 user-panel-link`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="#3772FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.9945 12H16.0035" stroke="#3772FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9945 12H12.0035" stroke="#3772FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.99451 12H8.00349" stroke="#3772FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {translate.more}
                        </Link>
                    </li>
                    <li className='user-panel-item'>
                        <a onClick={logOut} href="#" className={`${purePath?.toString() === 'change-password' ? 'active' : ''} mb-2 rounded-pill text-decoration-none gap-2 user-panel-link text-danger`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7071 7.79289C17.3166 7.40237 16.6834 7.40237 16.2929 7.79289C15.9024 8.18342 15.9024 8.81658 16.2929 9.20711L18.0858 11H9C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H18.0858L16.2929 14.7929C15.9024 15.1834 15.9024 15.8166 16.2929 16.2071C16.6834 16.5976 17.3166 16.5976 17.7071 16.2071L20.5 13.4142C21.2811 12.6332 21.281 11.3668 20.5 10.5858L17.7071 7.79289Z" fill="#D33535" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5C3 3.34315 4.34315 2 6 2H12C13.6569 2 15 3.34315 15 5V6C15 6.55228 14.5523 7 14 7C13.4477 7 13 6.55228 13 6V5C13 4.44772 12.5523 4 12 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H12C12.5523 20 13 19.5523 13 19V18C13 17.4477 13.4477 17 14 17C14.5523 17 15 17.4477 15 18V19C15 20.6569 13.6569 22 12 22H6C4.34315 22 3 20.6569 3 19V5Z" fill="#D33535" />
                            </svg>
                            {translate.logOut}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNavigation