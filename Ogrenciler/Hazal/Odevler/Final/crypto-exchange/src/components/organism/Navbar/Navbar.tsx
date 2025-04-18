'use client';
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import "./Navbar.scss";
import MenuItems from "@/components/atoms/MenuItems/MenuItems";
import LocaleSwitcher from "@/components/molecules/LocaleSwitcher/LocaleSwitcher";
import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Button from "@/components/atoms/Buttons/Buttons";
import BootstrapClient from "@/components/atoms/Client/Client";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/authStore";

interface MenuItem {
    id: string;
    label: string;
    href: string;
    subMenu?: MenuItem[];
    icon?: string;
}

const Navbar = () => {
    const t = useTranslations("HomePage");
    const menuItemsLeft: MenuItem[] = t.raw("menu").left || [];
    const menuItemsRight: MenuItem[] = t.raw("menu").right || [];
    const wallet = t.raw("menu").wallet
    const router = useRouter()
    const { theme } = useTheme()
    const [mainPath, setMainPath] = useState("/logo")
    const { user } = useAuthStore()
    useEffect(() => {
        setMainPath(theme === "dark" ? "/logo-dark" : "/logo")
    }, [theme])

    return (
        <>
            <nav className="navbar navbar-expand-xxl p-0">
                <div className="container-fluid mt-0 pt-0 mt-lg-3 mt-xl-0">
                    <Link className="navbar-brand px-5 pe-2" href="/">
                        <Image src={`${mainPath}.webp`} width={121} height={32} alt="Rocket Crypto Logo" loading="lazy" />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pe-5" id="navbarSupportedContent">
                        <MenuItems menuItemsLeft={menuItemsLeft} menuItemsRight={menuItemsRight} />
                        <div className="d-flex gap-3 align-items-center right-menu-mobile">
                            <LocaleSwitcher />
                            <ThemeToggler />
                            {user && <>
                                <Button variant="temp-button"
                                    fontSize="xs"
                                    className="border-1 temp-button"
                                    height={35}
                                    onClick={() => router.push("/wallet")}>
                                    {wallet.text}</Button>

                                <Link href="/user">
                                    <Image src="/profile.png"
                                        width={31}
                                        loading="lazy"
                                        height={31}
                                        className="rounded-circle"
                                        alt="Profile Picture" />
                                </Link>
                            </> ||
                                <div className="buttons d-flex gap-3 py-2">
                                    <Button variant="primary-button"
                                        fontSize="md"
                                        className="border-1 w-100 px-0 py-0 hero-button"
                                        height={32}
                                        onClick={() => router.push("/register")}>
                                        <span className="px-5">
                                            Başla!
                                        </span>
                                    </Button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav >
            <BootstrapClient />
        </>
    );
};

export default Navbar;