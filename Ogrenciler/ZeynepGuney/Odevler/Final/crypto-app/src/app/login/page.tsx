'use client';

import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import FooterBanner from '@/components/atoms/FooterBanner/FooterBanner';
import Footer from '@/components/atoms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import "../../app/global.scss";
import "../../../i18n";
import LoginForm from "@/components/organisms/LoginForm/LoginForm";
import LoginRegisterHeader from "@/components/atoms/PageHeader/LoginRegisterHeader";

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
            <LoginRegisterHeader></LoginRegisterHeader>
            <LoginForm></LoginForm>
            <FooterBanner />
            <Footer />
            <main>{children}</main>
        </div>
    );
};
