'use client';

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useRef, useState } from "react";
import { uploadAvatar } from "@/services/firebase";
import useUserStore from "@/store/users";
import "../../../app/global.scss";
import styles from './SideBar.module.scss';
import convertBase64 from "@/utils/convertBase64";


export default function Sidebar() {
    const pathname = usePathname();
    const { t } = useTranslation();
    const { theme } = useTheme();

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { user, setUser } = useUserStore();
    const [previewUrl, setPreviewUrl] = useState<string | null>(user?.avatarUrl || null);
    const [uploading, setUploading] = useState(false);
    const [activeItem, setActiveItem] = useState("user");

    const tabs = [
        { key: 'user', label: t("profileSidebar.user"), icon: "/assets/user2.svg", activeIcon: "/assets/user1.svg" },
        { key: 'referrals', label: t("profileSidebar.referrals"), icon: "/assets/referrals1.svg", activeIcon: "/assets/referrals2.svg" },
        { key: 'apikeys', label: t("profileSidebar.apikeys"), icon: "/assets/api1.svg", activeIcon: "/assets/api2.svg" },
        { key: 'history', label: t("profileSidebar.history"), icon: "/assets/login1.svg", activeIcon: "/assets/login2.svg" },
        { key: '2fa', label: t("profileSidebar.2fa"), icon: "/assets/2fa1.svg", activeIcon: "/assets/2fa2.svg" },
        { key: 'password', label: t("profileSidebar.password"), icon: "/assets/password1.svg", activeIcon: "/assets/password2.svg" },
    ];

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || !user) return;

        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        console.log("Base64 Resim:", base64);
        console.log("Preview URL: ", previewUrl);

        setPreviewUrl(base64); 
        setUploading(true); 

        try {
            const avatarUrl = await uploadAvatar(file, user.uid);
            const updatedUser = { ...user, avatarUrl };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        } catch (err) {
            console.error("Avatar yükleme hatası:", err);
        } finally {
            setUploading(false); 
        }
    };

    return (
        <div className={styles.sidebar}>
            <div className={styles.avatarContainer}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                />

                <div
                    className={styles.avatarImage}
                    onClick={() => fileInputRef.current?.click()}
                >
                    {previewUrl ? (
                        <>
                            <p>{previewUrl.slice(0, 100)}...</p>
                            <img src={previewUrl} alt="Avatar" className={styles.avatarPreview} />
                        </>
                    ) : (

                        !uploading && (
                            <div className={styles.avatarPlaceholder}>
                                <p>Tıklayın</p>
                            </div>
                        )
                    )}

                    {uploading && (
                        <div className={styles.uploadingOverlay}>
                            Yükleniyor...
                        </div>
                    )}
                </div>

                <p className={styles.avatarText}>
                    {user?.email ?? "Giriş yapılmadı"}
                </p>
            </div>

            <div className={styles.tabsWrapper}>
                {tabs.map((tab) => (
                    <Link key={tab.key} href={`/profile/${tab.key}`} passHref>
                        <div
                            className={`
                            ${styles.tab}
                            ${pathname.includes(tab.key) ? styles.active : ''}
                            ${theme === 'dark' ? styles.dark : ''}
                        `}
                        >
                            <img
                                src={pathname.includes(tab.key) ? tab.activeIcon : tab.icon}
                                alt={tab.label}
                                className={styles.icon}
                            />
                            {tab.label}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

