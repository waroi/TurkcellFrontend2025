import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import HomeView from "@/app/home/page";
import "../style/main.scss";
import Head from "next/head";
import { ThemeProvider } from "@/contexts/ThemeContext";
import FAQ from "@/app/faq/page";
import Market from "@/app/market/page";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <HomeView />
      </ThemeProvider>
    </>
  );
}
