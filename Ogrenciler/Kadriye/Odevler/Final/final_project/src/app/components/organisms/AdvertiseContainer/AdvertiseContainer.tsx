import ImageItem from "../../atoms/ImageItem/ImageItem"
import Advertise from "../../molecules/Advertise/Advertise"
import "./style.scss"

const AdvertiseContainer = () => {
    return (
        <div className="advertise-container">
            <div className="container">
                <Advertise />
                <div className="image-container">
                    <ImageItem src="/assets/images/scan_to_download.svg" width={716} height={404} alt="phone image" />
                </div>
            </div>
        </div>
    )
}

export default AdvertiseContainer