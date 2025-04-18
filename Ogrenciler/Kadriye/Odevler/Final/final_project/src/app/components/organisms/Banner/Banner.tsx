import "./style.scss"
import BannerTitle from '../../molecules/BannerTitle/BannerTitle'
import ImageItem from '../../atoms/ImageItem/ImageItem'

const Banner = () => {
    return (
        <div className="banner">
            <BannerTitle />
            <div>
                <ImageItem src='/assets/images/banner.svg' width={570} height={448} alt='banner placeholder image' />
            </div>
        </div>

    )
}

export default Banner