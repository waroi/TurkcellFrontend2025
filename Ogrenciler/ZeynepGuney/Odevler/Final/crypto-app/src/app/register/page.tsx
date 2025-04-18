'use client';

import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import FooterBanner from '@/components/atoms/FooterBanner/FooterBanner';
import Footer from '@/components/atoms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import "../../app/global.scss";
import "../../../i18n";
import styles from "./register.module.scss";
import RegisterForm from "@/components/organisms/RegisterForm/RegisterForm";
import LoginRegisterHeader from "@/components/atoms/PageHeader/LoginRegisterHeader";

export default function RegisterPage({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <RegisterPageContent>{children}</RegisterPageContent>
        </ThemeProvider>
    );
}
const RegisterPageContent = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <div>
            <Navbar />
            <LoginRegisterHeader></LoginRegisterHeader>
            <RegisterForm></RegisterForm>
            <FooterBanner />
            <Footer />
            <main>{children}</main>
        </div>
    );
};
