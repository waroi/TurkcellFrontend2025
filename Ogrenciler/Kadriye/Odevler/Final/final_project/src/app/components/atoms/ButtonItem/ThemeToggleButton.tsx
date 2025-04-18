"use client"

import handleTheme from "@/app/hooks/handleTheme";
import ImageItem from "../ImageItem/ImageItem";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation"; // ✅ DOĞRU

interface ButtonItemProbs {
    src?: string;
    width?: number;
    height?: number;
    alt?: string;
    classProps?: string;
}

const ThemeToggleButton = ({ src, width = 0, height = 0, alt = "", classProps = "" }: ButtonItemProbs) => {
    const [theme, setTheme] = useState("light");
    const router = useRouter(); // ✅ DOĞRU hook
    const pathname = usePathname();

    useEffect(() => {
        const saved = Cookies.get("theme") || "light";
        setTheme(saved);
        document.documentElement.setAttribute("data-theme", saved);
    }, []);

    const handleClick = async () => {
        await handleTheme(theme, setTheme);
        router.replace(pathname); // Sayfayı yeniden render etmek için
    };

    return (
        <button type="button" className={classProps} onClick={handleClick}>
            {src ? <ImageItem src={src} width={width} height={height} alt={alt} /> : null}
        </button>
    );
};

export default ThemeToggleButton;
