"use client";
// hooks/handleTheme.ts
import Cookies from "js-cookie";

const handleTheme = async (currentTheme: string, setTheme: (theme: string) => void) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    // Cookie'ye yaz (client tarafında)
    Cookies.set("theme", newTheme);

    // HTML attribute güncelle
    document.documentElement.setAttribute("data-theme", newTheme);

    // State'i güncelle (kullanıcıya anında yansısın diye)
    setTheme(newTheme);
    await fetch("/api/set-theme", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ theme: newTheme }),
    });
};

export default handleTheme;
