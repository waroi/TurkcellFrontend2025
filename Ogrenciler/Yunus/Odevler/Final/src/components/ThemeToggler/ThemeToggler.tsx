'use client'

import { useTheme } from "@/contexts/ThemeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggler = () => {
    const { theme, toggleTheme } = useTheme()

    let switchToLightText = 'Açık temaya geç'
    let switchToDarkText = 'Koyu temaya geç'

    return (
        <button
            onClick={toggleTheme}
            className="rounded-md transition-colors border-0 bg-transparent"
            aria-label={theme === 'dark' ? switchToLightText : switchToDarkText}
        >
            {theme === 'dark' ? (
                <MdOutlineDarkMode className="text-white" />
            ) : (
                <IoSunnyOutline />
            )}
        </button>
    )
}

export default ThemeToggler