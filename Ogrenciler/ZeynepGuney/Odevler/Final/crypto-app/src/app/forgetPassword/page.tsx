'use client';

import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import FooterBanner from '@/components/atoms/FooterBanner/FooterBanner';
import Footer from '@/components/atoms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import "../../app/global.scss";
import "../../../i18n";
import styles from "./forget.module.scss";
import LoginForm from "@/components/organisms/LoginForm/LoginForm";

export default function LoginPage({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LoginPageContent>{children}</LoginPageContent>
        </ThemeProvider>
    );
}
const LoginPageContent = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const { t } = useTranslation(); 

    return (
        <div>
            <Navbar />

            <div className={styles.loginPage}>
                <div className={`${styles.loginHeader} ${theme === "light" ? styles.light : styles.dark}`}>
                    <div className={styles.loginContainer}>
                        <div className={styles.loginTitle}>
                            <h2>{t("login.title", "Login")}</h2>
                            <p>{t("login.breadcrumb", "Home / Login")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <LoginForm></LoginForm>
            <FooterBanner />
            <Footer />
            <main>{children}</main>
        </div>
    );
};
