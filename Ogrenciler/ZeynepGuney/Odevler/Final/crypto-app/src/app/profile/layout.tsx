'use client';
import '../../../i18n';
import { ThemeProvider } from "../../context/ThemeContext"; 
import Navbar from "@/components/organisms/Navbar/Navbar";
import Footer from "@/components/atoms/Footer/Footer";
import Sidebar from "@/components/organisms/ProfileSideBar/SideBar";
import LoginRegisterHeader from "@/components/atoms/PageHeader/LoginRegisterHeader";
import FooterBanner from "@/components/atoms/FooterBanner/FooterBanner";



export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider> 
      <div>
        <Navbar />
        <LoginRegisterHeader />
        <div style={{ display: 'flex', padding: '2rem' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>{children}</div>
        </div>
        <FooterBanner />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
