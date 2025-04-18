import DashboardPage from '@/pages/DashboardPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Dashboard - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const page = async () => {
    return (
        <>
            <DashboardPage />
        </>
    )
}

export default page