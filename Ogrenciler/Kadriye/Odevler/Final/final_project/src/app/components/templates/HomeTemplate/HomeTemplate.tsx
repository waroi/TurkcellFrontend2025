import AdvertiseContainer from '../../organisms/AdvertiseContainer/AdvertiseContainer'
import Banner from '../../organisms/Banner/Banner'
import CryptuCards from '../../organisms/CryptoCards/CryptuCards'
import CustomerContainer from '../../organisms/CustomerContainer/CustomerContainer'
import Discover from '../../organisms/Discover/Discover'
import Footer from '../../organisms/Footer/Footer'
import Info from '../../organisms/Info/Info'
import MarketTable from '../../organisms/MarketTable/MarketTable'
import Navbar from '../../organisms/Navbar/Navbar'
import RockieContainer from '../../organisms/RockieContainer/RockieContainer'

const HomeTemplate = ({ dataInfos, logoInfos }: { dataInfos: any, logoInfos: any }) => {
    return (
        <>
            <Navbar />
            <Banner />
            <CryptuCards dataInfos={dataInfos} logoInfos={logoInfos} />
            <MarketTable dataInfos={dataInfos} logoInfos={logoInfos} />
            <Info />
            <RockieContainer />
            <AdvertiseContainer />
            <CustomerContainer />
            <Discover />
            <Footer />
        </>
    )
}

export default HomeTemplate