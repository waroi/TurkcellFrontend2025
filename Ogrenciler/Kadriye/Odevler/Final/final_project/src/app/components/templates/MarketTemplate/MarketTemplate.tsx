import Navbar from '../../organisms/Navbar/Navbar'
import Footer from '../../organisms/Footer/Footer'
import MarketBanner from '../../organisms/Banner/MarketBanner'
import MarketCards from '../../organisms/CryptoCards/MarketCards'
import MarketTable from '../../organisms/MarketTable/MarketTable'


const MarketTemplate = async ({ dataInfos, logoInfos }: { dataInfos: any, logoInfos: any }) => {

    return (
        <>
            <Navbar />
            <MarketBanner />
            <MarketCards dataInfos={dataInfos} logoInfos={logoInfos} />
            <MarketTable dataInfos={dataInfos} logoInfos={logoInfos} showFilter={true} />
            <Footer />
        </>
    )
}

export default MarketTemplate