'use client'

import Navbar from "@/components/organism/Navbar/Navbar"
import { usePathname } from "next/navigation"

const NavigationLayout = () => {
    const pathname = usePathname()
    return (
        <>
            {!pathname?.includes("dashboard") && <Navbar />}
        </>
    )
}

export default NavigationLayout