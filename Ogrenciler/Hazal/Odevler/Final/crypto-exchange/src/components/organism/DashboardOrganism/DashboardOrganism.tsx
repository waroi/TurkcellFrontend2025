'use client'

import { useState, useEffect } from 'react';
import styles from './DashboardOrganism.module.scss';
import ThemeToggler from '@/components/ThemeToggler/ThemeToggler';
import LocaleSwitcher from '@/components/molecules/LocaleSwitcher/LocaleSwitcher';
import Icon from '@/components/atoms/Icons/Icon';
import { useTheme } from '@/contexts/ThemeContext';
import { Image } from 'react-bootstrap';
import Logo from '@/components/atoms/Logo/Logo';
import SideNavigation from '@/components/molecules/SideNavigation/SideNavigation';
import CryptoInfo from '@/components/molecules/CryptoInfo/CryptoInfo';
import TradingViewSection from '../TradingViewSection/TradingViewSection';
import { useSidebar } from '@/hooks/useSidebar';

const DashboardOrganism = () => {
    const { sidebarActive, toggleSidebar } = useSidebar()
    const { theme } = useTheme()
    return (
        <div className={styles.container}>
            <div className={`${styles.sidebar} ${sidebarActive ? styles.active : ''}`}>
                <div className={styles.closeSidebar} onClick={toggleSidebar}>✕</div>
                <div className={styles.logo}>
                    <Logo height={32} width={32} className={styles.company} />
                </div>
                <SideNavigation />
            </div>
            <div
                className={`${styles.sidebarOverlay} ${sidebarActive ? styles.active : ''}`}
                onClick={toggleSidebar}
            />
            <div className={`${styles.mainContent}`}>
                <div>
                    <div className={styles.header}>
                        <div className={styles.headerLeft}>
                            <div className={styles.mobileMenuToggle} onClick={toggleSidebar}>☰</div>
                        </div>
                        <div className={styles.userActions}>
                            <div className={`${styles.searchBox} me-3`}>
                                <div className={styles.searchIcon}>
                                    <Icon collection='ci' color={theme == "dark" ? "#777E90" : "#B1B5C3"} name='CiSearch' size={16} />
                                </div>
                                <input type="text" className={styles.searchInput} placeholder="Search Anything" />
                            </div>
                            <LocaleSwitcher />
                            <ThemeToggler />
                            <div className={`${styles.notifications} d-flex justify-content-center align-items-center`}>
                                <Icon collection='io' name='IoIosNotificationsOutline' size={16}
                                    color={theme == "dark" ? "#FFFFFF" : "#23262F"}
                                />
                            </div>
                            <div className={`${styles.userAvatar} rounded-circle`}>
                                <Image src='/profile.png' width={32} height={32} loading='lazy' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contentPlaceholder}>
                    <CryptoInfo />
                </div>
                <TradingViewSection />
            </div>
        </div>
    )
}

export default DashboardOrganism