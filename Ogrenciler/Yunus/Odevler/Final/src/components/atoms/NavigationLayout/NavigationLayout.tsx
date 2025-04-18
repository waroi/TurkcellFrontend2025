'use client'

import Navbar from "@/components/organism/Navbar/Navbar"
import Sidenav from "@/components/organism/DashboardOrganism/DashboardOrganism"
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