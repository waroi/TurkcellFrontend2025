"use client"
import { useRouter, usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import "./style.scss"
import Image from "next/image";

const SelectItem = ({ theme }: { theme: string }) => {
    const router = useRouter();
    const pathname = usePathname()
    const [selectedLang, setSelectedLang] = useState('en');

    useEffect(() => {
        const match = document.cookie.match(/locale=(\w+)/);
        if (match && match[1]) {
            setSelectedLang(match[1]);

        }
    }, []);

    async function handleLanguageChange(locale: string) {
        await fetch('/api/set-locale', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ locale }),
        })
        setSelectedLang(locale)

        router.replace(pathname)
    }
    return (
        <div className="custom-select-wrapper">
            <select onChange={(e) => handleLanguageChange(e.target.value)} name="lang" id="language" value={selectedLang}>
                <option value="en">EN/USD</option>
                <option value="tr">TR</option>
            </select>
            {<Image className="custom-icon" src={`/assets/images/${theme}_arrow_down.svg`} height={5} width={8} alt="select icon" />}
        </div>
    )
}

export default SelectItem