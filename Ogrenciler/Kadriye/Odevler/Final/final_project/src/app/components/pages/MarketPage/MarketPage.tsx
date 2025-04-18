import MarketTemplate from '../../templates/MarketTemplate/MarketTemplate'
import fetchFilteredData from '@/app/hooks/fetchFilteredData';

const MarketPage = async ({ searchParams }: { searchParams: any }) => {
    const [dataInfos, logoInfos] = await fetchFilteredData(searchParams)
    return (
        <MarketTemplate dataInfos={dataInfos} logoInfos={logoInfos} />
    )
}

export default MarketPage