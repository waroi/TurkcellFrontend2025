import "./style.scss"
import ImageItem from "../../atoms/ImageItem/ImageItem"
import MarketBannerTitle from "../../molecules/BannerTitle/MarketBannerTitle"

const MarketBanner = () => {
    return (
        <div className="banner">
            <MarketBannerTitle />
            <div>
                <ImageItem classProp="market-banner-image" src='/assets/images/market_banner.svg' width={478} height={338} alt='banner placeholder image' />
            </div>
        </div>
    )
}

export default MarketBanner