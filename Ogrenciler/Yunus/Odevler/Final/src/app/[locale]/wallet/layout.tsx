import BreadCrumb from "@/components/molecules/BreadCrumb/BreadCrumb"
import './Wallet.scss'
import WalletPage from "@/pages/WalletPage"
import { useTranslations } from "next-intl"
import { Metadata } from "next"
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute"

export const metadata: Metadata = {
    title: "Wallet - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const WalletLayout = ({ children }: { children: React.ReactNode }) => {
    const translate = useTranslations("Wallet")
    const layout = translate.raw("layout")
    const pathname = translate.raw("path")
    return (
        <ProtectedRoute>
            <div className="pb-5">
                <div className="page-top">
                    <BreadCrumb title={layout.overview} path={pathname} />
                </div>
                <WalletPage children={children} />
            </div>
        </ProtectedRoute>
    )
}

export default WalletLayout