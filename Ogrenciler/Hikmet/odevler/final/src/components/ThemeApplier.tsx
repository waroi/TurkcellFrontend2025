"use client";

import { useThemeStore } from "@/store/themeStore";
import { useEffect } from "react";

export default function ThemeApplier() {
    const theme = useThemeStore((state) => state.theme);

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }, [theme]); 


    return null;
}