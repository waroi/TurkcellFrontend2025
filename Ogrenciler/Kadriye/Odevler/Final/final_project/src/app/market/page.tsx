import { useTranslations } from "next-intl";
import MarketPage from "../components/pages/MarketPage/MarketPage"

const page = ({ searchParams }: { searchParams: any }) => {
    const t = useTranslations('HomePage');
    return (
        <MarketPage searchParams={searchParams} />
    )
}

export default page